"use client";

import { useState } from "react";
import { Plus, Search, Filter, CalendarIcon } from "lucide-react";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


// Mock Data
const initialMaterials = [
    { id: 1, name: "Madera Pino 2x4", stock: 30, unit: "m", status: "critical", lastUpdated: "2024-03-10" },
    { id: 2, name: "Barniz Mate", stock: 2.5, unit: "L", status: "warning", lastUpdated: "2024-03-12" },
    { id: 3, name: "Tornillos 2 pulg", stock: 500, unit: "u", status: "ok", lastUpdated: "2024-03-08" },
    { id: 4, name: "Clavos Acero", stock: 50, unit: "u", status: "warning", lastUpdated: "2024-02-28" },
    { id: 5, name: "Arena", stock: 400, unit: "kg", status: "ok", lastUpdated: "2024-03-15" },
    { id: 6, name: "Cemento", stock: 850, unit: "kg", status: "ok", lastUpdated: "2024-03-15" },
    { id: 7, name: "Fierro Estriado", stock: 65, unit: "u", status: "critical", lastUpdated: "2024-03-14" },
];

export default function InventoryPage() {
    const [materials] = useState(initialMaterials);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">MateriaPrima</h1>
                    <p className="text-zinc-500">Gestión de materias primas y recursos.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white border-none transition-colors">
                                <Plus className="h-4 w-4" />
                                Agregar Transacción
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] bg-zinc-900 border-zinc-800 text-zinc-100">
                            <DialogHeader>
                                <DialogTitle className="text-zinc-100">MateriaPrima</DialogTitle>
                                <DialogDescription className="text-zinc-500">
                                    Registra el ingreso o egreso de materiales.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="grid gap-6 py-4">
                                {/* Material Selection */}
                                <div className="grid gap-2">
                                    <Label htmlFor="material" className="text-zinc-300">Material</Label>
                                    <Select>
                                        <SelectTrigger className="bg-zinc-950 border-zinc-800 text-zinc-100">
                                            <SelectValue placeholder="Selecciona un material" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-100">
                                            <SelectItem value="madera">Madera Pino 2x4</SelectItem>
                                            <SelectItem value="barniz">Barniz Mate</SelectItem>
                                            <SelectItem value="tornillos">Tornillos 2 pulg</SelectItem>
                                            <SelectItem value="clavos">Clavos Acero</SelectItem>
                                            <SelectItem value="arena">Arena (Saco)</SelectItem>
                                            <SelectItem value="cemento">Cemento (Saco)</SelectItem>
                                            <SelectItem value="fierro">Fierro Estriado</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Quantity & Unit (Context) */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="quantity" className="text-zinc-300">Cantidad</Label>
                                        <Input id="quantity" type="number" placeholder="0.00" className="bg-zinc-950 border-zinc-800 text-zinc-100 text-lg font-medium placeholder:text-zinc-600" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="date" className="text-zinc-300">Fecha</Label>
                                        <Input id="date" type="date" className="bg-zinc-950 border-zinc-800 text-zinc-100" />
                                    </div>
                                </div>

                            </div>
                            <DialogFooter className="mt-4">
                                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none">Confirmar Transacción</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="flex items-center gap-2">
                <div className="relative flex-1 md:max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
                    <Input className="pl-9 bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-700" placeholder="Buscar material..." />
                </div>
            </div>

            {/* Table */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 shadow-none overflow-hidden">
                <Table>
                    <TableHeader className="bg-zinc-900 border-b border-zinc-800">
                        <TableRow className="hover:bg-transparent border-zinc-800">
                            <TableHead className="text-zinc-400">Nombre del Material</TableHead>
                            <TableHead className="text-zinc-400">Stock Disponible</TableHead>
                            <TableHead className="text-zinc-400">Unidad</TableHead>
                            <TableHead className="text-zinc-400">Estado</TableHead>
                            <TableHead className="text-right text-zinc-400">Última Actualización</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materials.map((item) => (
                            <TableRow key={item.id} className="border-zinc-800 hover:bg-zinc-800/30">
                                <TableCell className="font-medium text-zinc-200">{item.name}</TableCell>
                                <TableCell className="text-lg text-zinc-100 font-bold">{item.stock}</TableCell>
                                <TableCell className="text-zinc-500 font-medium">{item.unit}</TableCell>
                                <TableCell>
                                    {item.status === 'ok' && <Badge variant="outline" className="text-emerald-400 border-emerald-900 bg-emerald-950/50">Normal</Badge>}
                                    {item.status === 'warning' && <Badge variant="outline" className="text-amber-500 border-amber-900 bg-amber-950/50">Bajo</Badge>}
                                    {item.status === 'critical' && <Badge variant="destructive" className="bg-red-950 text-red-500 border-red-900">Crítico</Badge>}
                                </TableCell>
                                <TableCell className="text-right text-zinc-500 font-medium">{item.lastUpdated}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
