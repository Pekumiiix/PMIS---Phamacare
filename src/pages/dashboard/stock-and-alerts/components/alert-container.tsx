import { Clock, Truck } from "lucide-react";

export function AlertContainer({
  isLowStock = true,
  title,
  count,
  caption,
  children,
}: IAlertContainer) {
  const Icon = !isLowStock ? Clock : Truck;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <Icon
            size={16}
            strokeWidth={2}
            color={isLowStock ? "#175CD3" : "#A15C07"}
          />
          <span className="leading-6 font-semibold text-[#101828]">
            {title}
          </span>{" "}
          • <span className="text-sm leading-5">{count}</span>
        </div>
        <p className="text-sm leading-5 trxt-[#5B6474]">{caption}</p>
      </div>

      {children}
    </div>
  );
}

interface IAlertContainer {
  isLowStock?: boolean;
  title: string;
  count: number;
  caption: string;
  children: React.ReactElement;
}
