import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        {children}
      </main>
    </SidebarProvider>
  );
}
