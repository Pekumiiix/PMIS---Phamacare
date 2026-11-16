import { cn } from "cn";

export function PrescriptionItem({
  name,
  drug,
  unit,
  time,
  status,
  isActive = false,
}: IPrescriptionItem) {
  return (
    <div
      className={cn(
        "flex justify-between border-t border-t-[#E3E6EB] border-l-2 py-3.5 px-5",
        {
          "bg-[#F2EEFC] border-l-[#101828]": isActive,
          "bg-white border-l-transparent": !isActive,
        },
      )}
    >
      <div className="flex flex-col">
        <p className="text-base leading-6 font-medium text-[#101828]">{name}</p>
        <p className="text-sm leading-5 text-[#5B6474]">
          {drug} x {unit}
        </p>
      </div>

      <div className="flex flex-col items-end">
        <p className="text-xs leading-6 text-[#5B6474]">{time}</p>
        <div className="flex">
          {status && <PrescriptionStatusBadge status={status} />}
        </div>
      </div>
    </div>
  );
}

const PRESCRIPTION_STATUS_CONFIG: Record<TPrescriptionStatus, any> = {
  rejected: { bg: "#FDECEA", color: "#B42318" },
  verified: { bg: "#E7F8EF", color: "#067647" },
};

function PrescriptionStatusBadge({ status }: { status: TPrescriptionStatus }) {
  return (
    <p
      className="px-2 py-0.5 rounded-full text-xs font-medium leading-4 capitalize"
      style={{
        backgroundColor: PRESCRIPTION_STATUS_CONFIG[status].bg,
        color: PRESCRIPTION_STATUS_CONFIG[status].color,
      }}
    >
      {status}
    </p>
  );
}

type TPrescriptionStatus = "rejected" | "verified";

interface IPrescriptionItem {
  name: string;
  drug: string;
  unit: number;
  time: string;
  status?: TPrescriptionStatus;
  isActive?: boolean;
}
