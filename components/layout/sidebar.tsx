"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LayoutDashboard, Box, FolderKanban, MessageSquare, Settings, LogOut } from "lucide-react";

const sidebarItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Inventario", href: "/inventory", icon: Box },
  { name: "Proyectos", href: "/projects", icon: FolderKanban },
  { name: "Asistente IA", href: "/chat", icon: MessageSquare },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-zinc-950 text-zinc-50">
      {/* Logo Area */}
      <div className="flex h-16 items-center border-b border-zinc-800 px-6">
        <h1 className="text-xl font-bold tracking-tight">Taller<span className="text-zinc-400">OS</span></h1>
      </div>

      {/* Main Navigation */}
      <ScrollArea className="flex-1 py-4">
        <nav className="flex flex-col gap-1 px-3">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 rounded-xl px-3 py-6 text-sm font-medium transition-all hover:bg-zinc-800",
                    isActive
                      ? "bg-zinc-800 text-white shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Footer / User Area */}
      <div className="border-t border-zinc-800 p-4">
        <Button variant="ghost" className="w-full justify-start gap-3 text-zinc-400 hover:bg-zinc-800 hover:text-white">
          <Settings className="h-5 w-5" />
          Configuración
        </Button>
      </div>
    </div>
  );
}
