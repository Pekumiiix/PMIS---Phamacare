import { Button } from "@/components/ui/button";

export function LowStockItem({ drug, suggestion, unit_left }: ILowStockItem) {
  return (
    <div className="flex items-center justify-between border-t last:border-y border-[#E3E6EB] py-2.5">
      <div className="flex flex-col">
        <p className="text-sm font-medium leading-5 text-[#101828]">{drug}</p>
        <p className="text-xs leading-4 text-[#5B6474]">
          Reorder at {suggestion}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-sm leading-5 font-medium text-[#101828]">
          {unit_left} <span className="text-[#5B6474] font-normal">left</span>
        </p>

        <Button variant="ghost" className="text-[#175CD3]">
          Order
        </Button>
      </div>
    </div>
  );
}

interface ILowStockItem {
  drug: string;
  suggestion: number;
  unit_left: number;
}
