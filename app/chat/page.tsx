"use client";

import { Send, Bot, Paperclip, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ChatPage() {
    return (
        <div className="flex h-[calc(100vh-8rem)] flex-col gap-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Asistente de Taller</h1>
                    <p className="text-zinc-500">Reporta producción o consulta stock con lenguaje natural.</p>
                </div>
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
                    <div className="flex flex-col gap-4">
                        {/* Bot Message */}
                        <div className="flex gap-3">
                            <Avatar>
                                <AvatarFallback>AI</AvatarFallback>
                                <AvatarImage src="/bot-avatar.png" />
                            </Avatar>
                            <div className="rounded-2xl rounded-tl-none bg-white p-4 shadow-sm dark:bg-zinc-900">
                                <p className="text-sm">Hola, soy tu asistente de taller. ¿Qué producimos hoy o qué necesitas consultar?</p>
                            </div>
                        </div>

                        {/* User Message */}
                        <div className="flex flex-row-reverse gap-3">
                            <Avatar>
                                <AvatarFallback>YO</AvatarFallback>
                            </Avatar>
                            <div className="rounded-2xl rounded-tr-none bg-zinc-900 p-4 text-white shadow-sm dark:bg-zinc-100 dark:text-zinc-900">
                                <p className="text-sm">Hola, hoy terminamos 4 bancas del parque.</p>
                            </div>
                        </div>

                        {/* Bot Response (Action Proposal Mock) */}
                        <div className="flex gap-3">
                            <Avatar>
                                <AvatarFallback>AI</AvatarFallback>
                            </Avatar>
                            <div className="space-y-3 rounded-2xl rounded-tl-none bg-white p-4 shadow-sm dark:bg-zinc-900">
                                <p className="text-sm">Entendido. Para el <strong>Proyecto Parque Araucano</strong>, registrar 4 unidades.</p>
                                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-sm dark:border-zinc-800 dark:bg-zinc-950">
                                    <p className="mb-2 font-semibold">Resumen de Materiales a Descontar:</p>
                                    <ul className="list-disc pl-4 text-zinc-500">
                                        <li>20m Madera Pino</li>
                                        <li>0.5L Barniz</li>
                                    </ul>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">Confirmar Registro</Button>
                                    <Button size="sm" variant="outline">Corregir</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="border-t p-4 bg-white dark:bg-zinc-900">
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="text-zinc-500">
                            <Paperclip className="h-5 w-5" />
                        </Button>
                        <Input
                            placeholder="Escribe un mensaje o sube una foto..."
                            className="flex-1 bg-zinc-50 border-0 focus-visible:ring-1 dark:bg-zinc-800"
                        />
                        <Button variant="ghost" size="icon" className="text-zinc-500">
                            <Mic className="h-5 w-5" />
                        </Button>
                        <Button size="icon" className="rounded-full">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
