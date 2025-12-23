import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TallerOS - Gestión de Producción",
  description: "Sistema de gestión de inventario y proyectos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="dark bg-zinc-950 text-zinc-100">
        <div className={inter.className}>
          <div className="flex h-screen overflow-hidden">
            <aside className="hidden md:flex">
              <Sidebar />
            </aside>

            <div className="flex flex-1 flex-col overflow-hidden">
              <header className="h-16 shrink-0 z-20">
                <Topbar />
              </header>

              <main className="flex-1 overflow-y-auto bg-transparent p-6">
                <div className="mx-auto max-w-6xl">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>

  );
}
