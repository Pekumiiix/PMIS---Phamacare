import { Download, Printer } from "lucide-react";

import { DashboardWrapper } from "../shared/dashboard-wrapper";

export default function DailyReportPage() {
  return (
    <DashboardWrapper
      page="Daily report"
      description="View your daily report here."
      outlineAction={{
        icon: Download,
        label: "Export CSV",
        action: () => console.log("Button clicked"),
      }}
      defaultAction={{
        icon: Printer,
        label: "Print report",
        action: () => console.log("Button clicked"),
      }}
    >
      <></>
    </DashboardWrapper>
  );
}
