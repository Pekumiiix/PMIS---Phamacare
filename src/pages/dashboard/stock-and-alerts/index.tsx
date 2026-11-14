import { CircleOff, Plus, Truck } from "lucide-react";

import { DashboardWrapper } from "../shared/dashboard-wrapper";
import { AlertContainer } from "./components/alert-container";
import { ExpiredItems } from "./components/expired-items";
import { LowStockItem } from "./components/low-stock-item";
import { NearExpiryItem } from "./components/near-expiry-item";

export default function StockAndAlertsPage() {
  return (
    <DashboardWrapper
      page="Stock & alerts"
      description="Tuesday 10 November 2026 · checked against expiry every morning"
      outlineAction={{
        icon: Truck,
        label: "Order new drugs",
        action: () => console.log("Button clicked"),
      }}
      defaultAction={{
        icon: Plus,
        label: "Add stock batch",
        action: () => console.log("Button clicked"),
      }}
    >
      <>
        <div className="w-full flex flex-col bg-white rounded-[12px] overflow-hidden">
          <div className="flex items-center gap-3 py-4 px-5 bg-[#FDECEA]">
            <CircleOff strokeWidth={2} color="#B42318" size={17} />
            <span className="font-semibold text-base leading-6 text-[#B42318]">
              3 expired batches on the shelf
            </span>
            <span className="text-sm leading-5 text-[#B42318]">
              Sales are blocked. Take them off the shelf today.
            </span>
          </div>

          {EXPIRED_ITEMS.map((item) => (
            <ExpiredItems key={item.batch} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <AlertContainer
            isLowStock={false}
            title="Near expiry — sell these first"
            count={4}
            caption="Within 60 days. FEFO already offers them first at the till."
          >
            <div className="flex flex-col">
              {NEAR_EXPIRY_ITEMS.map((item) => (
                <NearExpiryItem key={item.id} {...item} />
              ))}
            </div>
          </AlertContainer>

          <AlertContainer
            title="Low stock — reorder"
            count={3}
            caption="Within 60 days. FEFO already offers them first at the till."
          >
            <div className="flex flex-col">
              {LOW_STOCK_ITEMS.map((item) => (
                <LowStockItem key={item.drug} {...item} />
              ))}
            </div>
          </AlertContainer>
        </div>
      </>
    </DashboardWrapper>
  );
}

const EXPIRED_ITEMS = [
  {
    drug: "Amoxicillin 500mg",
    batch: "AMX-2305",
    unit: 14,
    expired_at: "Expired 4 Nov 2026 · 6d ago",
  },
  {
    drug: "Omeprazole 20mg",
    batch: "OME-2308",
    unit: 9,
    expired_at: "Expired 28 Oct 2026 · 13d ago",
  },
  {
    drug: "Vitamin C 1000mg",
    batch: "VTC-2303",
    unit: 20,
    expired_at: "Expired 8 Nov 2026 · 2d ago",
  },
];

const NEAR_EXPIRY_ITEMS = [
  {
    drug: "Loratadine 10mg",
    id: "LOR-2312",
    unit: 12,
    days_left: "20 days",
    expires_at: "30 Nov 2026",
  },
  {
    drug: "Paracetamol 500mg",
    id: "PCM-2311",
    unit: 48,
    days_left: "22 days",
    expires_at: "2 Dec 2026",
  },
  {
    drug: "Cetirizine 10mg",
    id: "CTZ-2310",
    unit: 25,
    days_left: "40 days",
    expires_at: "20 Dec 2026",
  },
  {
    drug: "Amoxicillin 500mg",
    id: "AMX-2401",
    unit: 36,
    days_left: "53 days",
    expires_at: "2 Jan 2027",
  },
];

const LOW_STOCK_ITEMS = [
  {
    drug: "Loratadine 10mg",
    suggestion: 30,
    unit_left: 12,
  },
  {
    drug: "Metformin 500mg",
    suggestion: 25,
    unit_left: 8,
  },
  {
    drug: "Vitamin C 1000mg",
    suggestion: 20,
    unit_left: 0,
  },
];
