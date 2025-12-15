"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, AlertTriangle, Info } from "lucide-react";

type LogLevel = "info" | "success" | "error";

interface MarketplaceLog {
  id: string;
  message: string;
  level: LogLevel;
  createdAt: string;
}

export function MarketplaceLogsTab() {
  // 🔹 Mock (substituir por API depois)
  const logs: MarketplaceLog[] = [
    {
      id: "1",
      level: "success",
      message: "Sincronização concluída com sucesso.",
      createdAt: "2025-12-14T14:30:00Z",
    },
    {
      id: "2",
      level: "info",
      message: "Início da sincronização manual.",
      createdAt: "2025-12-14T14:28:00Z",
    },
    {
      id: "3",
      level: "error",
      message: "Falha ao sincronizar estoque do produto SKU-123.",
      createdAt: "2025-12-13T18:12:00Z",
    },
  ];

  function renderIcon(level: LogLevel) {
    if (level === "success")
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    if (level === "error")
      return <AlertTriangle className="h-4 w-4 text-red-500" />;
    return <Info className="h-4 w-4 text-blue-500" />;
  }

  function renderBadge(level: LogLevel) {
    if (level === "success")
      return <Badge variant="outline" className="text-green-600 border-green-300">Sucesso</Badge>;
    if (level === "error")
      return <Badge variant="outline" className="text-red-600 border-red-300">Erro</Badge>;
    return <Badge variant="outline">Info</Badge>;
  }

  return (
    <Card>
      <CardContent className="space-y-4">
        {/* HEADER */}
        <div className="space-y-1">
          <h3 className="font-medium">Logs</h3>
          <p className="text-sm text-muted-foreground">
            Histórico de eventos, erros e sincronizações do marketplace.
          </p>
        </div>

        {/* LOG LIST */}
        <ScrollArea className="h-64 rounded-md border border-gray-200">
          <div className="divide-y">
            {logs.map((log) => (
              <div
                key={log.id}
                className="flex items-start gap-3 p-3 text-sm border-gray-200"
              >
                {/* ICON */}
                <div className="mt-0.5">{renderIcon(log.level)}</div>

                {/* CONTENT */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    {renderBadge(log.level)}
                    <span className="text-xs text-muted-foreground">
                      {new Date(log.createdAt).toLocaleString("pt-BR")}
                    </span>
                  </div>

                  <p>{log.message}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* EMPTY STATE (future-proof) */}
        {logs.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-6">
            Nenhum log encontrado.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
