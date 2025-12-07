import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import "./globals.css";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
