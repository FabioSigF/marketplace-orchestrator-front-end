"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full pr-4 py-3 flex items-center justify-between">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Buscar..."
          className="pl-10 border-gray-300 w-full"
        />
      </div>
    </header>
  );
}