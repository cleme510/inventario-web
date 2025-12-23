import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MaterialStockChart } from "@/components/dashboard/material-chart";
import { Activity, Package, Hammer } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4">
      {/* Header / Actions */}
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      {/* KPI Cards Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-zinc-900 border-zinc-800 shadow-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-200">Proyectos Activos</CardTitle>
            <Hammer className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-zinc-100">4</div>
            <p className="text-xs text-zinc-500">+1 iniciando esta semana</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800 shadow-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-200">Producción Semanal</CardTitle>
            <Activity className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-zinc-100">140 u</div>
            <p className="text-xs text-emerald-500">+19% vs semana pasada</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800 shadow-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-200">Materiales Críticos</CardTitle>
            <Package className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">2</div>
            <p className="text-xs text-zinc-500">Requieren atención inmediata</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Chart Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-zinc-900 border-zinc-800 shadow-none">
          <CardHeader>
            <CardTitle className="text-zinc-100">Stock de Materias Primas</CardTitle>
            <CardDescription className="text-zinc-500">Niveles actuales vs Capacidad</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <MaterialStockChart />
          </CardContent>
        </Card>

        {/* Recent Activity / Projects Summary */}
        <Card className="col-span-3 bg-zinc-900 border-zinc-800 shadow-none">
          <CardHeader>
            <CardTitle className="text-zinc-100">Estado de Proyectos</CardTitle>
            <CardDescription className="text-zinc-500">Resumen de progreso actual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none text-zinc-100">Parque Araucano</p>
                  <p className="text-sm text-zinc-500">Fabricación de Bancas (80%)</p>
                </div>
                <div className="ml-auto font-medium text-emerald-500">Producción</div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none text-zinc-100">Cafetería Centro</p>
                  <p className="text-sm text-zinc-500">Mesas y Sillas (20%)</p>
                </div>
                <div className="ml-auto font-medium text-amber-500">Materiales</div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none text-zinc-100">Remodelación Oficinas</p>
                  <p className="text-sm text-zinc-500">Escritorios (0%)</p>
                </div>
                <div className="ml-auto font-medium text-blue-500">Planificación</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
