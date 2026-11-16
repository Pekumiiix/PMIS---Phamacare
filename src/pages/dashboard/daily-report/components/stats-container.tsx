import { cn } from "cn";

export function StatsContainer({ name, value, className }: IStatsContainer) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-sm leading-5 text-[#5B6474]">{name}</p>
      <p
        className={cn(
          "text-xl leading-7 font-semibold text-[#101828]",
          className,
        )}
      >
        {value}
      </p>
    </div>
  );
}

interface IStatsContainer {
  name: string;
  value: number;
  className?: string;
}
