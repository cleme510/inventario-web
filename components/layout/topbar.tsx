import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function Topbar() {
    return (
        <div className="flex h-16 w-full items-center justify-between border-b border-zinc-900 bg-transparent px-6">
            {/* Page Context / Breadcrumb (Placeholder) */}
            <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold text-zinc-100">Resumen General</h2>
            </div>

            {/* Material Status Ticker */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-full border border-emerald-900/50 bg-emerald-950 px-3 py-1 text-xs font-medium text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Sistemas: OK</span>
                </div>

                {/* Critical Alerts */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 rounded-full border border-red-900 bg-red-950 px-3 py-1 text-xs font-medium text-red-500 animation-pulse">
                        <AlertCircle className="h-3 w-3" />
                        <span>Madera (10%)</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-red-900 bg-red-950 px-3 py-1 text-xs font-medium text-red-500">
                        <AlertCircle className="h-3 w-3" />
                        <span>Fierro (13%)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
