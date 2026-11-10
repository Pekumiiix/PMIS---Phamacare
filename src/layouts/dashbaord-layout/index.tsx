import { Outlet } from "react-router";

export function DashboardLayout() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-6 py-12">
      <Outlet />
    </main>
  );
}
