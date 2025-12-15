"use client";

import { useState } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

type MarketplaceSettings = {
  syncProducts: boolean;
  syncOrders: boolean;
  syncStock: boolean;
  readOnlyMode: boolean;
};

export function MarketplaceSettingsTab() {
  const [settings, setSettings] = useState<MarketplaceSettings>({
    syncProducts: true,
    syncOrders: true,
    syncStock: false,
    readOnlyMode: false,
  });

  function updateSetting<K extends keyof MarketplaceSettings>(
    key: K,
    value: MarketplaceSettings[K]
  ) {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  async function saveSettings() {
    console.log("Salvando configurações:", settings);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h3 className="text-base font-semibold">Conexão</h3>
          <p className="text-sm text-muted-foreground">
            Gerencie a autenticação e o status da integração com o marketplace.
          </p>
        </CardHeader>

        <CardContent className="flex items-center justify-between">
          <div>
            <p className="font-medium">Marketplace conectado</p>
            <p className="text-sm text-muted-foreground">
              Sua conta está autenticada e ativa no momento.
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">Reconectar</Button>
            <Button variant="destructive">Desconectar</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-base font-semibold">
            Preferências de sincronização
          </h3>
          <p className="text-sm text-muted-foreground">
            Controle como os dados serão sincronizados com este marketplace.
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <SettingRow
            title="Sincronizar produtos"
            description="Enviar atualizações de produtos automaticamente."
            checked={settings.syncProducts}
            onChange={(value) => updateSetting("syncProducts", value)}
          />

          <Separator />

          <SettingRow
            title="Sincronizar pedidos"
            description="Importar novos pedidos automaticamente."
            checked={settings.syncOrders}
            onChange={(value) => updateSetting("syncOrders", value)}
          />

          <Separator />

          <SettingRow
            title="Sincronizar estoque"
            description="Manter os níveis de estoque atualizados."
            checked={settings.syncStock}
            onChange={(value) => updateSetting("syncStock", value)}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-base font-semibold">Configurações avançadas</h3>
          <p className="text-sm text-muted-foreground">
            Opções adicionais para controle da integração.
          </p>
        </CardHeader>

        <CardContent>
          <SettingRow
            title="Modo somente leitura"
            description="Impede o envio de atualizações para o marketplace."
            checked={settings.readOnlyMode}
            onChange={(value) => updateSetting("readOnlyMode", value)}
          />
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={saveSettings}>Salvar alterações</Button>
      </div>
    </div>
  );
}

interface SettingRowProps {
  title: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

function SettingRow({
  title,
  description,
  checked,
  onChange,
}: SettingRowProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}
