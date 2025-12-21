"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Mock Data
const projects = [
    {
        id: 1,
        name: "Parque Araucano - Etapa 1",
        client: "Muni. Las Condes",
        status: "production",
        progress: 80,
        items: "12/15 Bancas",
        date: "Entrega: 15 Oct"
    },
    {
        id: 2,
        name: "Cafetería Centro",
        client: "Café Tostado",
        status: "planning",
        progress: 20,
        items: "0/25 Mesas",
        date: "Entrega: 30 Oct"
    },
    {
        id: 3,
        name: "Remodelación Oficinas",
        client: "Global Corp",
        status: "planning",
        progress: 0,
        items: "0/10 Escritorios",
        date: "Entrega: 15 Nov"
    },
    {
        id: 4,
        name: "Jardinera Privada",
        client: "Cliente Particular",
        status: "completed",
        progress: 100,
        items: "5/5 Jardineras",
        date: "Entregado: 01 Oct"
    },
];

export default function ProjectsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Proyectos</h1>
                    <p className="text-zinc-500">Gestión de órdenes de producción y estados.</p>
                </div>
                <Button className="gap-2 bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
                    <Plus className="h-4 w-4" />
                    Nuevo Proyecto
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.id} className="cursor-pointer transition-all hover:shadow-lg dark:hover:border-zinc-700">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div>
                                    <CardTitle>{project.name}</CardTitle>
                                    <CardDescription>{project.client}</CardDescription>
                                </div>
                                {project.status === 'production' && <Badge className="bg-emerald-500 hover:bg-emerald-600">Producción</Badge>}
                                {project.status === 'planning' && <Badge variant="outline" className="border-blue-500 text-blue-500">Planificación</Badge>}
                                {project.status === 'completed' && <Badge variant="secondary">Finalizado</Badge>}
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-zinc-500">Progreso</span>
                                    <span className="font-medium">{project.progress}%</span>
                                </div>
                                <Progress value={project.progress} className="h-2" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between border-t bg-zinc-50/50 p-4 text-xs font-medium text-zinc-500 dark:bg-zinc-900/50">
                            <div>{project.items}</div>
                            <div>{project.date}</div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
