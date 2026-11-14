import type { IBadgeConfig } from "./drug-item";

const TYPE_CONFIG: Record<TDrugType, IBadgeConfig> = {
  "over-the-counter": { bg: "#EEF1F5", color: "#5B6474", text: "OTC" },
  "prescription-only": { bg: "#F2EEFC", color: "#6941C6", text: "POM" },
};

export function DrugTypeBadge({ type }: { type: TDrugType }) {
  return (
    <p
      className="text-[11px] font-semibold leading-4 rounded-[4px] py-0.75 px-1.5"
      style={{
        backgroundColor: TYPE_CONFIG[type].bg,
        color: TYPE_CONFIG[type].color,
      }}
    >
      {TYPE_CONFIG[type].text}
    </p>
  );
}

type TDrugType = "prescription-only" | "over-the-counter";
