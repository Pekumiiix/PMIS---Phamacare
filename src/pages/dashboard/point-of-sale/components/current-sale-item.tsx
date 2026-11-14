import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { DrugTypeBadge } from "./drug-type-badge";

export function CurrentSaleItem() {
  return (
    <div className="w-full flex flex-col gap-2 px-5 py-3.5 border-b last:border-none border-[#E3E6EB]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <p className="text-base leading-6 text-[#101828] font-medium">
              Paracetamol 500mg
            </p>
            <DrugTypeBadge type="over-the-counter" />
          </div>
          <p className="text-xs leading-4 text-[#5B6474]">
            Batch PCM-2311 · exp 2 Dec 2026 ·{" "}
            <span className="text-[#A15C07]">22d left</span>
          </p>
        </div>
        <p className="text-base leading-6 text-[#101828] font-medium">£5.00</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3 px-1.5 py-0.5 rounded-[6px] border border-[#E3E6EB]">
            <Button
              variant="ghost"
              className="text-xs leading-4 text-[#5B6474] p-0 hover:bg-transparent"
            >
              <Minus size={14} />
            </Button>
            <p className="text-sm leading-5 text-[#101828]">1</p>
            <Button
              variant="ghost"
              className="text-xs leading-4 text-[#5B6474] p-0 hover:bg-transparent"
            >
              <Plus size={14} />
            </Button>
          </div>
          <p className="text-xs leading-4 text-[#5B6474]">@ £4.10</p>
        </div>
        <Button variant="ghost" className="text-xs leading-4 text-[#5B6474]">
          Remove
        </Button>
      </div>
    </div>
  );
}
