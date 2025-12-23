"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChatPage() {
    const [messages, setMessages] = useState<
        { role: "user" | "assistant"; content: string }[]
    >([]);
    const [input, setInput] = useState("");

    function sendMessage() {
        if (!input.trim()) return;

        setMessages((prev) => [
            ...prev,
            { role: "user", content: input },
            { role: "assistant", content: "Respuesta mock (IA después)" },
        ]);

        setInput("");
    }

    return (
        <div className="flex h-[calc(100vh-4rem)] flex-col gap-4">
            <div>
                <h1 className="text-3xl font-bold">Asistente de Taller</h1>
                <p className="text-zinc-500">
                    Reporta producción o consulta stock con lenguaje natural.
                </p>
            </div>

            <Card className="flex flex-1 flex-col overflow-hidden border-zinc-800 bg-zinc-900 shadow-none">
                <ScrollArea className="flex-1 p-4 bg-zinc-900">
                    <div className="flex flex-col gap-3">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`rounded-xl px-4 py-3 text-sm max-w-[80%] ${m.role === "user"
                                    ? "bg-blue-600 text-white self-end shadow-sm"
                                    : "bg-zinc-800 text-zinc-100 self-start border border-zinc-700/50"
                                    }`}
                            >
                                {m.content}
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                <div className="flex gap-2 border-t border-zinc-800 p-4 bg-zinc-900">
                    <Input
                        placeholder="Escribe un mensaje…"
                        className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-700"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <Button onClick={sendMessage} className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200 border-none transition-colors">Enviar</Button>
                </div>
            </Card>
        </div>
    );
}
