"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { TextField } from "@/components/forms/TextField";
import PasswordField from "@/components/forms/PasswordField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegisterFormData, registerSchema } from "@/schemas/registerSchema";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("REGISTER FORM:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-sm bg-white shadow-md border-none">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            Criar Conta
          </CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <CardContent className="space-y-4">
            <TextField
              label="Nome"
              placeholder="Seu nome completo"
              {...register("name")}
              error={!!errors.name}
              errorMessage={errors.name?.message}
            />

            <TextField
              label="Email"
              type="email"
              placeholder="seuemail@exemplo.com"
              {...register("email")}
              error={!!errors.email}
              errorMessage={errors.email?.message}
            />

            <PasswordField
              label="Senha"
              {...register("password")}
              error={!!errors.password}
              errorMessage={errors.password?.message}
            />

            <PasswordField
              label="Confirmar Senha"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              errorMessage={errors.confirmPassword?.message}
            />
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full border border-gray-200">
              Criar conta
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full flex items-center gap-2 border border-gray-200"
            >
              <FcGoogle size={20} />
              Registrar com Google
            </Button>

            <div className="text-sm text-center text-gray-600">
              Já possui uma conta?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Fazer login
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
