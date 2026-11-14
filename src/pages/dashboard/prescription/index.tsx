import { Plus } from "lucide-react";

import { DashboardWrapper } from "../shared/dashboard-wrapper";

export default function PrescriptionPage() {
  return (
    <DashboardWrapper
      page="Prescriptions"
      description="Manage POM sales here"
      defaultAction={{
        icon: Plus,
        label: "Enter Prescription",
        action: () => console.log("Button clicked"),
      }}
    >
      <></>
    </DashboardWrapper>
  );
}
