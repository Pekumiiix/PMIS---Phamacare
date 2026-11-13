import { NavLink } from "react-router";

import { SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function SidebarLinks({ icon, label, href }: ISidebarLink) {
  const Icon = icon;

  return (
    <SidebarMenuItem className="w-full h-9 rounded-[6px] p-0">
      <NavLink
        to={href}
        className={({ isActive }) =>
          cn("size-full flex items-center gap-3 px-3 py-2.5 rounded-[6px]", {
            "stroke-[#9AA8BF] text-[#9AA8BF] bg-transparent hover:bg-[#1A2A44]":
              !isActive,
            "stroke-[#E8503D] text-[#F3EFE6] bg-[#1A2A44]": isActive,
          })
        }
      >
        <Icon className="size-4 stroke-inherit" />

        <p className="text-sm font-medium leading-5 text-inherit">{label}</p>
      </NavLink>
    </SidebarMenuItem>
  );
}

interface ISidebarLink {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
}
