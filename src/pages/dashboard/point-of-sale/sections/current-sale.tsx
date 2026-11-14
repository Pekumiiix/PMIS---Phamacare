import { Button } from "@/components/ui/button";

import { CurrentSaleItem } from "../components/current-sale-item";

export function CurrentSale() {
  return (
    <div className="basis-2/5 h-screen flex-flex-col bg-white border-l border-[#E3E6EB] sticky top-0 left-0">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#E3E6EB]">
        <p className="leading-6 text-base font-semibold text-[#101828]">
          Current sale
        </p>
        <p className="text-sm leading-5 text-[#5B6474]">3 items</p>
      </div>
      <div className="flex flex-col">
        <CurrentSaleItem />
        <CurrentSaleItem />
      </div>

      <div className="absolute w-full flex px-5 pb-4 bottom-0">
        <Button className="w-full h-12 bg-[#C23A28] rounded-[8px] text-white text-[15px] leading-5.75 font-semibold hover:bg-[#C23A28]/95">
          Checkout · £9.10
        </Button>
      </div>
    </div>
  );
}
