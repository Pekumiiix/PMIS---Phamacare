import { PlusIcon } from "lucide-react";

import { DashboardWrapper } from "../shared/dashboard-wrapper";

export default function UsersPage() {
  return (
    <DashboardWrapper
      page="Users"
      description="Manage users and their access to the system."
      defaultAction={{
        icon: PlusIcon,
        label: "Add User",
        action: () => {
          console.log("Add User clicked");
        },
      }}
    >
      <section className="w-full max-w-xl rounded-2xl border bg-card p-8 text-center shadow-sm">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Project kickstart
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Welcome to PMIS
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          This is the starting point for the project. The dashboard will take
          shape here as features are added.
        </p>
        <div className="mt-8 rounded-lg border border-dashed bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
          Nothing fancy yet — we&apos;re just getting started.
        </div>
      </section>
    </DashboardWrapper>
  );
}
