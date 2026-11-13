export function WhoColumn({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex flex-col">
      <p className="text-sm font-medium leading-5 text-[#101828]">{name}</p>
      <p className="text-xs leading-4 text-[#5B6474]">{role}</p>
    </div>
  );
}

export function ActionColumn({
  action,
  tag,
}: {
  action: string;
  tag: TActionType;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="size-2 rounded-full"
        style={{ backgroundColor: ACTION_CONFIG[tag] }}
      />
      <p className="text-sm leading-5 text-[#101828]">{action}</p>
    </div>
  );
}

const ACTION_CONFIG: Record<TActionType, string> = {
  sales: "#F5B82E",
  stock: "#175CD3",
  prescription: "#6941C6",
  login: "#8A93A3",
  user: "#E8503D",
  system: "#2FBF86",
};

type TActionType =
  "sales" | "stock" | "prescription" | "login" | "user" | "system";
