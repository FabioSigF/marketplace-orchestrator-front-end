// app/profile/page.tsx
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* ---------- MOCK USER ---------- */
const mockUser = {
  name: "Fabio Freitas",
  email: "fabio@email.com",
};
/* ------------------------------- */

export default function ProfilePage() {
  const [name, setName] = useState(mockUser.name);
  const [email] = useState(mockUser.email);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSaveProfile() {
    console.log("Salvar nome:", name);
  }

  function handleChangePassword() {
    if (newPassword !== confirmPassword) {
      alert("As senhas não conferem");
      return;
    }

    console.log("Redefinir senha:", {
      currentPassword,
      newPassword,
    });
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Meu perfil</h2>
          <p className="text-sm text-muted-foreground">
            Gerencie suas informações pessoais e segurança
          </p>
        </CardHeader>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile">Dados pessoais</TabsTrigger>
              <TabsTrigger value="security">Segurança</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6 mt-6">
              <div className="space-y-4 max-w-md">
                <div className="space-y-2">
                  <Label>Nome</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input value={email} disabled />
                  <p className="text-xs text-muted-foreground">
                    O email não pode ser alterado
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button onClick={handleSaveProfile}>Salvar alterações</Button>
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-6 mt-6">
              <div className="space-y-4 max-w-md">
                <div className="space-y-2">
                  <Label>Senha atual</Label>
                  <Input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Nova senha</Label>
                  <Input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Confirmar nova senha</Label>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button onClick={handleChangePassword}>Redefinir senha</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
