import { AppSidebar } from "@/components/layout/AppSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen">
        {/* Sidebar fixa */}
        <AppSidebar />

        {/* Conteúdo principal */}
        <div className="flex flex-1 flex-col">
          <header className="flex h-14 items-center border-b px-6">
            <span className="font-medium">Dashboard</span>
          </header>

          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
