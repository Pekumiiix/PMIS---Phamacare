import { LogOut } from "lucide-react";

import { AuditIcon } from "@/components/icons/audit";
import { PointOfSaleIcon } from "@/components/icons/point-of-sale";
import { PrescriptionIcon } from "@/components/icons/prescription";
import { ReportIcon } from "@/components/icons/report";
import { StocksIcons } from "@/components/icons/stocks";
import { UsersIcon } from "@/components/icons/users";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";

import { SidebarLinks } from "../components/sidebar-links";

export function AppSidebar() {
  return (
    <Sidebar className="h-screen sticky top-0 left-0 bg-[#0F1729] px-3">
      <SidebarHeader className="flex flex-row items-center gap-2.5 p-5 bg-[#0F1729]">
        <img src="/assets/images/logo.png" alt="Logo" className="size-7" />
        <span className="text-[17px] font-semibold leading-6 text-[#F3EFE6]">
          Pharmacare
        </span>
      </SidebarHeader>
      <SidebarContent className="px-3 bg-[#0F1729] p-0">
        <SidebarGroup>
          <SidebarMenu className="flex flex-col gap-1">
            <SidebarLinks
              icon={PointOfSaleIcon}
              label="Point of Sale"
              href="/"
            />
            <SidebarLinks
              icon={PrescriptionIcon}
              label="Prescription"
              href="/prescription"
            />
            <SidebarLinks
              icon={StocksIcons}
              label="Stock and alerts"
              href="/stock-and-alerts"
            />
            <SidebarLinks
              icon={ReportIcon}
              label="Daily reports"
              href="/daily-report"
            />
            <SidebarLinks
              icon={AuditIcon}
              label="Audit trial"
              href="/audit-trial"
            />

            <SidebarLinks icon={UsersIcon} label="Users" href="/users" />
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-3 bg-[#0F1729]">
        <div className="flex items-center justify-between py-4.25 border-t border-[#2A3C5A]">
          <div className="flex items-center gap-2">
            <p className="flex items-center justify-center rounded-full size-8 bg-[#2A3C5A] text-xs font-semibold leading-4 text-[#F3EFE6] text-center">
              GM
            </p>

            <div className="flex flex-col">
              <p className="text-sm font-medium leading-5 text-[#F3EFE6]">
                Grace Mensah
              </p>
              <p className="text-xs leading-4 text-[#9AA8BF]">Cashier</p>
            </div>
          </div>

          <Button
            variant="ghost"
            className="size-7 rounded-full hover:bg-[#2A3C5A]"
          >
            <LogOut size={16} color="#9AA8BF" strokeWidth={2} />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
