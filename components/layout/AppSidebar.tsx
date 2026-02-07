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
    <Sidebar
      collapsible="icon"
    >
      {/* HEADER */}
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8 rounded-md object-cover"
          />
          <span className="font-semibold text-lg group-data-[collapsible=icon]:hidden">
            Orchestrator
          </span>
        </div>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
            Menu
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                  >
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/user.jpg" />
            <AvatarFallback>FF</AvatarFallback>
          </Avatar>

          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
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
