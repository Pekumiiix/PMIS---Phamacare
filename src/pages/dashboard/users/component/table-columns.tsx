import { useState } from "react";
import { Ellipsis, Key } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { TableCell } from "@/components/ui/table";
import { getInitials } from "@/utils/string-utils";

export function NameColumn({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3">
      <p className="size-8 rounded-full flex items-center justify-center bg-[#F5F6F8] text-xs font-semibold leading-4 text-[#101828]">
        {getInitials(name)}
      </p>

      <p className="text-sm font-medium leading-5 text-[#101828]">{name}</p>
    </div>
  );
}

const ROLE_CONFIG: Record<TRoles, IRoleConfig> = {
  cashier: { bg: "#FDECEA", text: "#B42318", label: "Cashier" },
  pharmacist: { bg: "#EAF2FF", text: "#175CD3", label: "Pharmacist" },
  store_manager: { bg: "#FFF6E0", text: "#A15C07", label: "Store Manager" },
  system_admin: { bg: "#F2EEFC", text: "#6941C6", label: "System Admin" },
};

export function RoleColumn({ role }: { role: TRoles }) {
  return (
    <p
      className="size-fit px-2 py-0.5 rounded-full"
      style={{
        backgroundColor: ROLE_CONFIG[role].bg,
        color: ROLE_CONFIG[role].text,
      }}
    >
      {ROLE_CONFIG[role].label}
    </p>
  );
}

export function StatusColumn({ status }: { status: "active" | "inactive" }) {
  const [isActive, setIsActive] = useState<boolean>(status === "active");

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={isActive}
        onCheckedChange={setIsActive}
        className="data-checked:bg-[#067647]!"
      />
      <p className="text-xs leading-4 text-[#5B6474]">
        {isActive ? "Active" : "Inactive"}
      </p>
    </div>
  );
}

export function ActionColumn({ id }: { id: string }) {
  return (
    <TableCell className="h-full flex justify-end gap-3">
      <div
        onClick={() => console.log(`Action for user ${id}`)}
        className="flex items-center gap-1.5"
      >
        <Key size={14} strokeWidth={2} color="#5B6474" />
        <p className="text-xs leading-4 font-medium text-[#5B6474]">
          Reset Password
        </p>
      </div>

      <Ellipsis color="#5B6474" />
    </TableCell>
  );
}

type TRoles = "cashier" | "pharmacist" | "store_manager" | "system_admin";

interface IRoleConfig {
  bg: string;
  text: string;
  label: string;
}
