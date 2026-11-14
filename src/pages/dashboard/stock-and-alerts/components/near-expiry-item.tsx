export function NearExpiryItem({
  drug,
  id,
  unit,
  days_left,
  expires_at,
}: INearExpiryItem) {
  return (
    <div className="flex items-center justify-between border-t last:border-y border-[#E3E6EB] py-2.5">
      <div className="flex flex-col">
        <p className="text-sm font-medium leading-5 text-[#101828]">{drug}</p>
        <p className="text-xs leading-4 text-[#5B6474]">
          {id} • {unit}units
        </p>
      </div>

      <div className="flex flex-col items-end">
        <p className="text-sm leading-5 font-medium text-[#A15C07]">
          {days_left}
        </p>
        <p className="text-xs leading-4 text-[#5B6474]">{expires_at}</p>
      </div>
    </div>
  );
}

interface INearExpiryItem {
  drug: string;
  id: string;
  unit: number;
  days_left: string;
  expires_at: string;
}
