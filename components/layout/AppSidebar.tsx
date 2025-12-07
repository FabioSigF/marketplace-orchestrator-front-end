"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, Boxes, Store, Settings } from "lucide-react";

export function AppSidebar() {
  const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard, url: "/" },
    { title: "Lista de Produtos", icon: Boxes, url: "/products" },
    { title: "Marketplaces", icon: Store, url: "/marketplaces" },
    { title: "Configurações", icon: Settings, url: "/settings" },
  ];

  return (
    <Sidebar className="border-r border-gray-200">
      {/* HEADER */}
      <SidebarHeader className="border-b border-gray-200">
        <div className="flex items-center gap-3 px-3 py-2">
          {/* Troque pela sua logo */}
          <img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8 rounded-md object-cover"
          />
          <span className="font-semibold text-lg">Orchestrator</span>
        </div>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent className="border-gray-200">
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="border-t border-gray-200">
        <div className="flex items-center gap-3 p-3">
          <Avatar>
            <AvatarImage src="/user.jpg" />
            <AvatarFallback>FF</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="text-sm font-medium">Fabio Freitas</span>
            <div className="flex gap-3 text-xs text-muted-foreground">
              <a href="/perfil" className="hover:underline">
                Perfil
              </a>
              <a href="/logout" className="hover:underline">
                Logout
              </a>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
