import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function Topbar() {
    return (
        <div className="flex h-16 w-full items-center justify-between border-b bg-white/50 px-6 backdrop-blur-md dark:bg-zinc-950/50">
            {/* Page Context / Breadcrumb (Placeholder) */}
            <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">Resumen General</h2>
            </div>

            {/* Material Status Ticker */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-full border bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Sistemas: OK</span>
                </div>

                {/* Critical Alerts */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400 animation-pulse">
                        <AlertCircle className="h-3 w-3" />
                        <span>Madera (10%)</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
                        <AlertCircle className="h-3 w-3" />
                        <span>Fierro (13%)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
