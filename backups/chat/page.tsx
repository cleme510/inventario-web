"use client";

import { useChat } from "ai/react";
import { Send, Bot, Paperclip, Mic, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function ChatPage() {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

    return (
        <div className="flex h-[calc(100vh-8rem)] flex-col gap-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Asistente de Taller</h1>
                    <p className="text-zinc-500">Reporta producción o consulta stock con lenguaje natural.</p>
                </div>
                {/* Config Button (Mock) */}
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        <Bot className="mr-2 h-4 w-4" />
                        Configurar IA
                    </Button>
                </div>
            </div>

            {/* Chat Area */}
            <Card className="flex flex-1 flex-col overflow-hidden bg-zinc-50 dark:bg-zinc-950/50">
                <ScrollArea className="flex-1 p-4">
                    <div className="flex flex-col gap-4 pb-4">
                        {/* Welcome Message (Static) */}
                        {messages.length === 0 && (
                            <div className="flex gap-3">
                                <Avatar>
                                    <AvatarFallback>AI</AvatarFallback>
                                </Avatar>
                                <div className="rounded-2xl rounded-tl-none bg-white p-4 shadow-sm dark:bg-zinc-900">
                                    <p className="text-sm">Hola, soy tu asistente de taller. ¿Qué producimos hoy o qué necesitas consultar?</p>
                                </div>
                            </div>
                        )}

                        {messages.map((m) => (
                            <div key={m.id} className={cn("flex gap-3", m.role === "user" ? "flex-row-reverse" : "")}>
                                <Avatar>
                                    <AvatarFallback className={m.role === "user" ? "bg-zinc-900 text-white" : ""}>
                                        {m.role === "user" ? "YO" : "AI"}
                                    </AvatarFallback>
                                </Avatar>

                                <div className={cn(
                                    "space-y-3 rounded-2xl p-4 shadow-sm text-sm",
                                    m.role === "user"
                                        ? "rounded-tr-none bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                                        : "rounded-tl-none bg-white dark:bg-zinc-900"
                                )}>
                                    {/* Text Content */}
                                    {m.content && <p className="whitespace-pre-wrap">{m.content}</p>}

                                    {/* Tool Invocations (Action Cards) */}
                                    {m.toolInvocations?.map((toolInvocation) => {
                                        const { toolName, toolCallId, args } = toolInvocation;

                                        // Render "Propose Transaction" Card
                                        if (toolName === "propose_transaction") {
                                            return (
                                                <div key={toolCallId} className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-sm dark:border-zinc-800 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 mt-2">
                                                    <div className="mb-2 flex items-center justify-between">
                                                        <p className="font-semibold">{args.summary_title}</p>
                                                        <span className="text-xs text-zinc-500 bg-zinc-200 dark:bg-zinc-800 px-2 py-0.5 rounded-full">{args.project_name}</span>
                                                    </div>

                                                    <p className="mb-2 text-zinc-600 dark:text-zinc-400">{args.items_produced}</p>

                                                    <div className="mb-3 rounded bg-white p-2 dark:bg-zinc-900 border dark:border-zinc-800">
                                                        <p className="mb-1 text-xs font-medium text-zinc-500 uppercase">Materiales a descontar</p>
                                                        <ul className="list-disc pl-4 text-xs text-zinc-600 dark:text-zinc-400">
                                                            {args.materials_deduction?.map((mat: any, i: number) => (
                                                                <li key={i}>{mat.quantity} {mat.unit} {mat.name}</li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {args.warning_message && (
                                                        <div className="mb-3 rounded bg-amber-50 p-2 text-xs text-amber-700 border border-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/50">
                                                            ⚠️ {args.warning_message}
                                                        </div>
                                                    )}

                                                    <div className="flex gap-2">
                                                        <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => alert("Simulacion: Guardado en DB")}>Confirmar</Button>
                                                        <Button size="sm" variant="outline" className="w-full" onClick={() => alert("Cancelado")}>Cancelar</Button>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex gap-3">
                                <Avatar><AvatarFallback>AI</AvatarFallback></Avatar>
                                <div className="rounded-2xl rounded-tl-none bg-white p-4 shadow-sm dark:bg-zinc-900">
                                    <Loader2 className="h-4 w-4 animate-spin text-zinc-500" />
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="border-t p-4 bg-white dark:bg-zinc-900">
                    <form onSubmit={handleSubmit} className="flex items-center gap-2">
                        <Button type="button" variant="ghost" size="icon" className="text-zinc-500">
                            <Paperclip className="h-5 w-5" />
                        </Button>
                        <Input
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Ej: Terminamos 4 bancas para el proyecto plaza..."
                            className="flex-1 bg-zinc-50 border-0 focus-visible:ring-1 dark:bg-zinc-800"
                        />
                        <Button type="button" variant="ghost" size="icon" className="text-zinc-500">
                            <Mic className="h-5 w-5" />
                        </Button>
                        <Button type="submit" size="icon" className="rounded-full" disabled={isLoading || !input.trim()}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}
