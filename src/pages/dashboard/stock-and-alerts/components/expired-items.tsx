import { PackageX } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ExpiredItems({ drug, batch, unit, expired_at }: IExpiredItems) {
  return (
    <div className="flex items-center justify-between py-3 px-5 last:rounded-b-[12px] border-t border-[#E3E6EB]">
      <div className="flex flex-col">
        <p className="text-base leading-6 font-medium text-[#101828]">{drug}</p>
        <p className="text-xs leading-4 text-[#5B6474]">
          Batch {batch} • {unit}units
        </p>
      </div>

      <div className="flex items-center gap-6">
        <p className="text-sm leading-5 text-[#B42318]">{expired_at}</p>
        <Button variant="outline" className="border-[#CFD4DC]">
          <PackageX size={16} />
          Mark as removed
        </Button>
      </div>
    </div>
  );
}

interface IExpiredItems {
  drug: string;
  batch: string;
  unit: number;
  expired_at: string;
}
