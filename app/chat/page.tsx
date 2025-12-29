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
    const [isLoading, setIsLoading] = useState(false);

    async function sendMessage() {
        if (!input.trim() || isLoading) return;

        const userMessage = { role: "user" as const, content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });

            if (!response.ok) throw new Error("Network response was not ok");
            if (!response.body) throw new Error("No response body");

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                setMessages((prev) => {
                    const newMessages = [...prev];
                    const lastMessage = newMessages[newMessages.length - 1];
                    if (lastMessage.role === "assistant") {
                        lastMessage.content += chunk;
                    }
                    return newMessages;
                });
            }
        } catch (error) {
            console.error(error);
            setMessages((prev) => [...prev, { role: "assistant", content: "Error: Verifica tu API Key o conexión." }]);
        } finally {
            setIsLoading(false);
        }
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
                        {isLoading && messages[messages.length - 1]?.role === "user" && (
                            <div className="bg-zinc-800 text-zinc-100 self-start border border-zinc-700/50 rounded-xl px-4 py-3 text-sm max-w-[80%] animate-pulse">
                                Escribiendo...
                            </div>
                        )}
                    </div>
                </ScrollArea>

                <div className="flex gap-2 border-t border-zinc-800 p-4 bg-zinc-900">
                    <Input
                        placeholder="Escribe un mensaje…"
                        className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-700"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && !isLoading && sendMessage()}
                        disabled={isLoading}
                    />
                    <Button
                        onClick={sendMessage}
                        className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200 border-none transition-colors"
                        disabled={isLoading}
                    >
                        Enviar
                    </Button>
                </div>
            </Card>
        </div>
    );
}
