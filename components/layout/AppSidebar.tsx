"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, Boxes, Store, Settings } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard, url: "/" },
    { title: "Lista de Produtos", icon: Boxes, url: "/products" },
    { title: "Marketplaces", icon: Store, url: "/marketplaces" },
    { title: "Configurações", icon: Settings, url: "/settings" },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-background">
      {/* HEADER */}
      <div className="flex items-center gap-3 border-b px-4 py-3 h-14">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-7 w-7 rounded-md object-cover"
        />
        <span className="text-lg font-semibold">Orchestrator</span>
      </div>

      {/* MENU */}
      <nav className="flex-1 p-3">
        <span className="mb-2 block text-xs font-medium text-muted-foreground">
          Menu
        </span>

        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.url}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent"
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* FOOTER */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/user.jpg" />
            <AvatarFallback>FF</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="text-sm font-medium">Fabio Freitas</span>
            <div className="flex gap-3 text-xs text-muted-foreground">
              <Link href="/perfil" className="hover:underline">
                Perfil
              </Link>
              <Link href="/logout" className="hover:underline">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
