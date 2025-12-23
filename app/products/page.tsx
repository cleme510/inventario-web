"use client";

import { Plus, Search, ChevronRight, PackageOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

// Mock Data for Products & BOM
const initialProducts = [
    {
        id: 1,
        name: "Banca Plaza Estándar",
        category: "Mobiliario Urbano",
        sku: "BNC-001",
        recipe: [
            { material: "Madera Pino 2x4", quantity: 5, unit: "m" },
            { material: "Barniz Mate", quantity: 0.2, unit: "L" },
            { material: "Tornillos 2 pulg", quantity: 12, unit: "u" },
        ]
    },
    {
        id: 2,
        name: "Mesa Picnic Familiar",
        category: "Mobiliario Urbano",
        sku: "MES-002",
        recipe: [
            { material: "Madera Pino 2x4", quantity: 15, unit: "m" },
            { material: "Barniz Mate", quantity: 0.8, unit: "L" },
            { material: "Clavos Acero", quantity: 40, unit: "u" },
        ]
    },
    {
        id: 3,
        name: "Jardinera Concreto",
        category: "Prefabricados",
        sku: "JAR-055",
        recipe: [
            { material: "Cemento", quantity: 20, unit: "kg" },
            { material: "Arena", quantity: 40, unit: "kg" },
            { material: "Fierro Estriado", quantity: 4, unit: "u" },
        ]
    },
];

export default function ProductsPage() {
    const products = initialProducts;

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Productos & Recetas</h1>
                    <p className="text-zinc-500">Define los estándares teóricos de consumo.</p>
                </div>
                <Button className="gap-2 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 border-none transition-colors">
                    <Plus className="h-4 w-4" />
                    Nuevo Producto
                </Button>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2">
                <div className="relative flex-1 md:max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
                    <Input className="pl-9 bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-700" placeholder="Buscar producto..." />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden border-zinc-800 bg-zinc-900 shadow-none hover:border-zinc-700 transition-colors">
                        <CardHeader className="bg-zinc-900 pb-4 border-b border-zinc-800/50">
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg text-zinc-100">{product.name}</CardTitle>
                                    <CardDescription className="text-zinc-500">{product.sku}</CardDescription>
                                </div>
                                <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border-none">
                                    {product.category}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="p-4 bg-transparent">
                                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                                    <PackageOpen className="h-4 w-4" />
                                    Receta Estándar (Por Unidad)
                                </h4>
                                <Table>
                                    <TableHeader className="sr-only">
                                        <TableRow>
                                            <TableHead>Material</TableHead>
                                            <TableHead className="text-right">Cant.</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {product.recipe.map((item, idx) => (
                                            <TableRow key={idx} className="border-0 hover:bg-transparent">
                                                <TableCell className="py-1 pl-0 text-sm font-medium text-zinc-300">{item.material}</TableCell>
                                                <TableCell className="py-1 pr-0 text-right text-sm text-zinc-500">
                                                    {item.quantity} <span className="text-xs">{item.unit}</span>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            {/* View Details Action */}
                            <div className="border-t border-zinc-800 p-3 bg-zinc-900">
                                <Button variant="ghost" className="w-full justify-between text-xs text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 transition-colors" size="sm">
                                    Ver Historial de Producción
                                    <ChevronRight className="h-3 w-3" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
