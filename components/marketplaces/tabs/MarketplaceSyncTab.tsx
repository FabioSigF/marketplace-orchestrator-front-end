"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, CheckCircle, AlertCircle } from "lucide-react";

type SyncStatus = "idle" | "syncing" | "success" | "error";

export function MarketplaceSyncTab() {
  const [status, setStatus] = useState<SyncStatus>("idle");

  function handleSync() {
    setStatus("syncing");

    setTimeout(() => {
      setStatus("success");
    }, 2000);
  }

  return (
    <Card>
      <CardContent className="space-y-6">
        {/* HEADER */}
        <div className="space-y-1">
          <h3 className="font-medium">Sincronização</h3>
          <p className="text-sm text-muted-foreground">
            Controle manual e acompanhamento do status de sincronização do
            marketplace.
          </p>
        </div>

        {/* STATUS */}
        <div className="flex items-center gap-2 text-sm">
          {status === "idle" && (
            <span className="text-muted-foreground">
              Nenhuma sincronização em andamento.
            </span>
          )}

          {status === "syncing" && (
            <span className="flex items-center gap-2 text-blue-600">
              <RefreshCw className="h-4 w-4 animate-spin" />
              Sincronizando dados...
            </span>
          )}

          {status === "success" && (
            <span className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-4 w-4" />
              Sincronização concluída com sucesso.
            </span>
          )}

          {status === "error" && (
            <span className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-4 w-4" />
              Erro durante a sincronização.
            </span>
          )}
        </div>

        {/* ACTION */}
        <div>
          <Button
            onClick={handleSync}
            disabled={status === "syncing"}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Sincronizar agora
          </Button>
        </div>

        {/* INFO */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p>• Produtos, estoque e preços serão sincronizados.</p>
          <p>• O processo pode levar alguns minutos.</p>
          <p>• Evite iniciar múltiplas sincronizações simultaneamente.</p>
        </div>
      </CardContent>
    </Card>
  );
}
