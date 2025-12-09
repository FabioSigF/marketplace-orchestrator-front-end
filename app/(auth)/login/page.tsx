"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { TextField } from "@/components/forms/TextField";
import PasswordField from "@/components/forms/PasswordField";

import { FcGoogle } from "react-icons/fc";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/schemas/loginSchema";

export default function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log("Login data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-sm bg-white shadow-md border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Login
          </CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <TextField
              label="Email"
              placeholder="exemplo@email.com"
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

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full border border-gray-200">
              Entrar
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full flex items-center gap-2 border border-gray-200"
            >
              <FcGoogle size={20} />
              Entrar com Google
            </Button>

            <p className="text-sm text-center text-gray-600">
              Não tem acesso?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Criar conta
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
