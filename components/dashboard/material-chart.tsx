"use client";

import { cn } from "@/lib/utils";

const data = [
    { name: "Arena", stock: 400, capacity: 1000, unit: "kg" },
    { name: "Cemento", stock: 850, capacity: 1000, unit: "kg" },
    { name: "Fierro", stock: 65, capacity: 500, unit: "u" }, // 13% - Should be red
    { name: "Madera", stock: 30, capacity: 300, unit: "m" },  // 10% - Should be red
];

export function MaterialStockChart() {
    return (
        <div className="space-y-6 pt-2">
            {data.map((item) => {
                const percentage = Math.round((item.stock / item.capacity) * 100);
                const isCritical = percentage <= 15;

                return (
                    <div key={item.name} className="space-y-2">

                        {/* Label and Value Row */}
                        <div className="flex items-end justify-between text-sm">
                            <span className="font-medium text-zinc-700 dark:text-zinc-300">{item.name}</span>
                            <div className="text-right">
                                <span className="font-bold text-zinc-900 dark:text-zinc-50">{item.stock} {item.unit}</span>
                                <span className="ml-2 text-xs text-zinc-500">({percentage}%)</span>
                            </div>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="relative h-4 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                            {/* Visual "Target/Warning" Marker at 15% (Optional visual guide) */}
                            <div className="absolute left-[15%] top-0 h-full w-[2px] bg-white/20 z-10"></div>

                            {/* Actual Progress Bar */}
                            <div
                                className={cn(
                                    "h-full transition-all duration-500 ease-out rounded-full",
                                    isCritical ? "bg-red-500" : "bg-emerald-500"
                                )}
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
