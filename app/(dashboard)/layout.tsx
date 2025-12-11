import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import Header from "@/components/layout/Header";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <div className="flex">
                <SidebarTrigger />
                <Header />
              </div>
              <div className="p-4">{children}</div>
            </main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
