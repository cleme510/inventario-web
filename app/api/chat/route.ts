import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

const MOCK_DB = {
    products: [
        { name: "Banca Plaza Estándar", id: "p1", recipe: { "Madera Pino 2x4": 5, "Barniz Mate": 0.2, "Tornillos 2 pulg": 12 } },
        { name: "Mesa Picnic Familiar", id: "p2", recipe: { "Madera Pino 2x4": 15, "Barniz Mate": 0.8, "Clavos Acero": 40 } },
        { name: "Jardinera Concreto", id: "p3", recipe: { "Cemento": 20, "Arena": 40, "Fierro Estriado": 4 } }
    ],
    materials: {
        "Madera Pino 2x4": { stock: 30, unit: "m" },
        "Barniz Mate": { stock: 2.5, unit: "L" },
        "Tornillos 2 pulg": { stock: 500, unit: "u" },
        "Clavos Acero": { stock: 50, unit: "u" },
        "Cemento": { stock: 850, unit: "kg" },
        "Arena": { stock: 400, unit: "kg" },
        "Fierro Estriado": { stock: 65, unit: "u" },
    }
};

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const result = streamText({
            model: openai('gpt-4o'),
            messages: [
                {
                    role: 'system',
                    content: `Eres el "Asistente de Taller Atrio". Tu rol es ADMINISTRATIVO y de CONTROL.
          
Tus Responsabilidades:
1. Consultar Stock: Tienes acceso a estos datos: ${JSON.stringify(MOCK_DB.materials)}.
2. Calcular Materiales: Usa estas recetas: ${JSON.stringify(MOCK_DB.products)}.
3. Sé amable y profesional.`
                },
                ...messages
            ],
        });

        return result.toDataStreamResponse();
    } catch (error: any) {
        console.error('Chat API Error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
