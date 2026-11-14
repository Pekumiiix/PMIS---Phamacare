import { Input } from "@/components/ui/input";

import { DrugItem } from "./components/drug-item";
import { CurrentSale } from "./sections/current-sale";

export default function PointOfSalePage() {
  return (
    <div className="w-full flex flex-row bg-muted">
      <div className="basis-3/5 flex flex-col">
        <div className="flex flex-col gap-3 py-5 px-4 bg-white">
          <p className="text-xl font-semibold leading-7 text-[#101828]">
            New Sale
          </p>
          <Input
            placeholder="Search by drug name"
            className="w-full h-12.25 border-[#CFD4DC]"
          />
        </div>

        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs leading-4 text-[#5B6474]">All drugs</p>
            <p className="text-xs leading-4 text-[#5B6474]">
              Batch shown is the FEFO pick — earliest expiry first
            </p>
          </div>

          <div className="w-full flex flex-col bg-white border border-[#E3E6EB] rounded-[8px]">
            <DrugItem />
            <DrugItem />
          </div>
        </div>
      </div>

      <CurrentSale />
    </div>
  );
}
