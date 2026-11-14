import { useState } from "react";
import { Download } from "lucide-react";

import {
  BaseTable,
  type TableColumn,
} from "@/components/re-useable/base-table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { DashboardWrapper } from "../shared/dashboard-wrapper";
import { ActionColumn, WhoColumn } from "./components/table-columns";

export default function AuditTrialPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const data =
    activeFilter === "all"
      ? AUDIT_DATA
      : AUDIT_DATA.filter((row) => {
          const tag = row.action.tag;

          return tag === activeFilter;
        });

  const TABLE_DATA: IAuditTrialRow[] = data.map((row) => ({
    ...row,
    who: <WhoColumn name={row.who.name} role={row.who.role} />,
    action: <ActionColumn action={row.action.action} tag={row.action.tag} />,
  }));

  return (
    <DashboardWrapper
      page="Audit Trial"
      description="Every change to stock or sales by staff is recorded here and can’t be edited (SRS-003)"
      outlineAction={{
        icon: Download,
        label: "Export",
        action: () => console.log("Button clicked"),
      }}
    >
      <>
        <div className="flex items-center gap-1.5">
          {[
            "all",
            "sales",
            "stock",
            "prescription",
            "user",
            "login",
            "system",
          ].map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <Button
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "text-sm font-medium leading-5 rounded-full hover:bg-[#1A2A44] capitalize",
                  {
                    "bg-[#0F1729] text-white": isActive,
                    "bg-white text-[#5B6474] hover:bg-gray-200": !isActive,
                  },
                )}
              >
                {filter}
              </Button>
            );
          })}
        </div>

        <BaseTable
          columns={TABLE_COLUMNS}
          data={TABLE_DATA}
          keyExtractor={(row) => row.id}
          classNames={{
            table: "border-2 border-[#E3E6EB] bg-white rounded-[12px]",
            tableHeader: "[&_tr]:border-[#E3E6EB]",
            tableHead: "text-xs font-medium leading-4 text-[#5B6474]",
            tableRow: "border-[#E3E6EB]",
          }}
        />
      </>
    </DashboardWrapper>
  );
}

const TABLE_COLUMNS: TableColumn<IAuditTrialRow>[] = [
  { key: "time", label: "Time" },
  { key: "who", label: "Who" },
  { key: "action", label: "Action" },
  { key: "details", label: "Details" },
  { key: "log-id", label: "Log ID" },
];

const AUDIT_DATA = [
  {
    id: "1",
    time: "14:06:21",
    who: { name: "Grace Mensah", role: "Cashier" },
    action: { action: "Sale completed", tag: "sales" as const },
    details: "S-20934 · 3 items · £12.20 · Card",
    "log-id": "L-88412",
  },
  {
    id: "2",
    time: "14:05:58",
    who: { name: "Grace Mensah", role: "Cashier" },
    action: { action: "Sale blocked", tag: "sales" as const },
    details: "Vitamin C 1000mg — batch VTC-2303 expired 08 Nov",
    "log-id": "L-88411",
  },
  {
    id: "3",
    time: "13:58:40",
    who: { name: "Priya Shah", role: "Store Manager" },
    action: { action: "Batch added", tag: "stock" as const },
    details: "Ibuprofen 200mg · IBU-2312 · 90 units · exp 11 May 2027",
    "log-id": "L-88410",
  },
  {
    id: "4",
    time: "13:42:12",
    who: { name: "Grace Mensah", role: "Cashier" },
    action: { action: "Prescription entered", tag: "prescription" as const },
    details: "RX-0418 · Amoxicillin 500mg · patient M. Collins",
    "log-id": "L-88409",
  },
  {
    id: "5",
    time: "13:30:04",
    who: { name: "Daniel Okafor", role: "Pharmacist" },
    action: { action: "Prescription verified", tag: "prescription" as const },
    details: "RX-0415 · Omeprazole 20mg",
    "log-id": "L-88408",
  },
  {
    id: "6",
    time: "12:51:33",
    who: { name: "Priya Shah", role: "Store Manager" },
    action: { action: "Order placed", tag: "stock" as const },
    details: "PO-0192 · Metformin 500mg × 120 · MediSupply Ltd",
    "log-id": "L-88407",
  },
  {
    id: "7",
    time: "12:30:02",
    who: { name: "Leah Ward", role: "Cashier" },
    action: { action: "Signed in", tag: "login" as const },
    details: "Till 2",
    "log-id": "L-88406",
  },
  {
    id: "8",
    time: "11:47:19",
    who: { name: "Priya Shah", role: "Store Manager" },
    action: { action: "Batch removed", tag: "stock" as const },
    details: "Vitamin C 1000mg · VTC-2302 · 6 units · expired",
    "log-id": "L-88405",
  },
  {
    id: "9",
    time: "10:15:44",
    who: { name: "Tom Reid", role: "System Admin" },
    action: { action: "User deactivated", tag: "user" as const },
    details: "sadeyemi (Pharmacist)",
    "log-id": "L-88404",
  },
  {
    id: "10",
    time: "09:47:51",
    who: { name: "Daniel Okafor", role: "Pharmacist" },
    action: { action: "Prescription rejected", tag: "prescription" as const },
    details: "RX-0413 · doctor name missing",
    "log-id": "L-88403",
  },
  {
    id: "11",
    time: "09:14:08",
    who: { name: "Priya Shah", role: "Store Manager" },
    action: { action: "Signed in", tag: "login" as const },
    details: "Back office",
    "log-id": "L-88402",
  },
  {
    id: "12",
    time: "08:02:37",
    who: { name: "Grace Mensah", role: "Cashier" },
    action: { action: "Signed in", tag: "login" as const },
    details: "Till 1",
    "log-id": "L-88401",
  },
  {
    id: "13",
    time: "02:00:00",
    who: { name: "System", role: "-" },
    action: { action: "Scheduled backup", tag: "system" as const },
    details: "Completed · 48.2 MB · BACKUP-NAS-01",
    "log-id": "L-88400",
  },
];

interface IAuditTrialRow {
  id: string;
  time: string;
  who: React.ReactNode;
  action: React.ReactNode;
  details: string;
  "log-id": string;
}
