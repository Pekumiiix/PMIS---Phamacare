import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { DrugTypeBadge } from "./drug-type-badge";

export function DrugItem() {
  return (
    <div className="flex justify-between py-3 px-4 border-b last:border-none border-[#E3E6EB]">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <p className="text-base leading-6 font-medium text-[#101828]">
              Amoxicillin 500mg
            </p>
            <DrugTypeBadge type="prescription-only" />
            <DrugTypeBadge type="over-the-counter" />
          </div>
          <p className="text-xs leading-4 text-[#5B6474]">Capsules × 21</p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xs leading-4 text-[#5B6474]">96 in stock</p>
          <p className="text-base leading-6 text-[#101828]">£6.80</p>
          <Button
            variant="outline"
            className="border-[#CFD4DC] py-2.25 px-4.75"
          >
            <Plus size={14} strokeWidth={2} color="#101828" />
            Add
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <p className="text-xs leading-4 text-[#101828]">AMX-2401</p>
          <SafetyBadge safety="safe" />
          <SafetyBadge safety="sell_first" />
        </div>
        <p className="text-xs leading-4 text-[#5B6474]">
          Exp 2 Jan 2027 · earliest of 2
        </p>
      </div>
    </div>
  );
}

const SAFETY_CONFIG: Record<TSafety, IBadgeConfig> = {
  safe: { bg: "#E7F8EF", color: "#067647", text: "Safe" },
  sell_first: { bg: "#FFF6E0", color: "#A15C07", text: "Sell first" },
};

function SafetyBadge({ safety }: { safety: TSafety }) {
  return (
    <div
      className="flex items-center gap-1.5 px-2 py-0.75 rounded-full"
      style={{ backgroundColor: SAFETY_CONFIG[safety].bg }}
    >
      <div
        className="size-1.5 rounded-full"
        style={{ backgroundColor: SAFETY_CONFIG[safety].color }}
      />
      <p
        className="text-xs leading-4 font-medium"
        style={{ color: SAFETY_CONFIG[safety].color }}
      >
        {SAFETY_CONFIG[safety].text}
      </p>
    </div>
  );
}

type TSafety = "safe" | "sell_first";

export interface IBadgeConfig {
  bg: string;
  color: string;
  text: string;
}
