"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
    { name: "Lun", total: 12 },
    { name: "Mar", total: 18 },
    { name: "Mie", total: 15 },
    { name: "Jue", total: 25 },
    { name: "Vie", total: 32 },
    { name: "Sab", total: 28 },
    { name: "Dom", total: 10 },
];

export function OverviewChart() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                />
                <CartesianGrid strokeDasharray="3 3" className="stroke-zinc-200 dark:stroke-zinc-800" vertical={false} />
                <Tooltip
                    contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a", color: "#f4f4f5", borderRadius: "8px" }}
                    itemStyle={{ color: "#10b981" }}
                />
                <Area
                    type="monotone"
                    dataKey="total"
                    stroke="#10b981"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorTotal)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
