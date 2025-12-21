"use client";

import { useState } from "react";
import { Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

// Mock Data
const initialMaterials = [
    { id: 1, name: "Madera Pino 2x4", stock: 120, unit: "m", status: "ok", lastUpdated: "2024-03-10" },
    { id: 2, name: "Barniz Mate", stock: 2.5, unit: "L", status: "warning", lastUpdated: "2024-03-12" },
    { id: 3, name: "Tornillos 2 pulg", stock: 500, unit: "u", status: "ok", lastUpdated: "2024-03-08" },
    { id: 4, name: "Clavos Acero", stock: 50, unit: "u", status: "critical", lastUpdated: "2024-02-28" },
];

export default function InventoryPage() {
    const [materials] = useState(initialMaterials);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Inventario Global</h1>
                    <p className="text-zinc-500">Gestión de materias primas y recursos compartidos.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="gap-2">
                        <Filter className="h-4 w-4" />
                        Filtrar
                    </Button>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
                                <Plus className="h-4 w-4" />
                                Registrar Material
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Agregar Nuevo Material</DialogTitle>
                                <DialogDescription>
                                    Ingresa los detalles del material para el control de stock.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">Nombre</Label>
                                    <Input id="name" placeholder="Ej: Madera Roble" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="stock" className="text-right">Stock Inicial</Label>
                                    <Input id="stock" type="number" placeholder="0.00" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="unit" className="text-right">Unidad</Label>
                                    <Input id="unit" placeholder="m, kg, L, u..." className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Guardar Material</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="flex items-center gap-2">
                <div className="relative flex-1 md:max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
                    <Input className="pl-9 bg-white dark:bg-zinc-900" placeholder="Buscar material..." />
                </div>
            </div>

            {/* Table */}
            <div className="rounded-xl border bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
                <Table>
                    <TableHeader className="bg-zinc-50 dark:bg-zinc-800">
                        <TableRow>
                            <TableHead>Nombre del Material</TableHead>
                            <TableHead>Stock Disponible</TableHead>
                            <TableHead>Unidad</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead className="text-right">Última Actualización</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materials.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                <TableCell className="text-lg">{item.stock}</TableCell>
                                <TableCell className="text-zinc-500">{item.unit}</TableCell>
                                <TableCell>
                                    {item.status === 'ok' && <Badge variant="outline" className="text-emerald-500 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20">Normal</Badge>}
                                    {item.status === 'warning' && <Badge variant="outline" className="text-amber-500 border-amber-500 bg-amber-50 dark:bg-amber-950/20">Bajo</Badge>}
                                    {item.status === 'critical' && <Badge variant="destructive">Crítico</Badge>}
                                </TableCell>
                                <TableCell className="text-right text-zinc-500">{item.lastUpdated}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
