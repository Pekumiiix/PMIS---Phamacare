import { Outlet } from "react-router";

import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "./sections/app-sidebar";

export function DashboardLayout() {
  return (
    <SidebarProvider className="flex flex-row w-full">
      <AppSidebar />

      <main className="w-full min-h-screen flex flex-col bg-muted">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
