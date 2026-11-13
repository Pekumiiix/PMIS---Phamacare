import { isValidElement } from "react";

import { Button } from "@/components/ui/button";

export function DashboardWrapper({
  page,
  description,
  outlineAction,
  defaultAction,
  children,
}: IDashboardWrapper) {
  return (
    <div className="flex flex-col">
      <div className="w-full flex items-end justify-between py-5 px-8 bg-white border-b border-[#E3E6EB]">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-[22px] font-semibold leading-7.75 text-[#101828]">
            {page}
          </h1>
          <p className="text-sm leading-5 text-[#5B6474]">{description}</p>
        </div>

        <div className="flex items-center gap-2">
          {outlineAction && (
            <Button
              className="size-fit flex items-center gap-1.5 bg-[#0F1729] rounded-[8px] py-1.75 px-3.5"
              onClick={outlineAction.action}
            >
              <outlineAction.icon className="size-4" />
              <span className="text-sm font-medium">{outlineAction.label}</span>
            </Button>
          )}

          {defaultAction && (
            <Button className="size-fit flex items-center gap-1.5 bg-[#0F1729] rounded-[8px] py-1.75 px-3.5 hover:bg-[#0F1729]/95">
              <defaultAction.icon className="size-4 stroke-white" />
              <span className="text-sm font-medium text-white">
                {defaultAction.label}
              </span>
            </Button>
          )}
        </div>
      </div>

      {isValidElement(children) && children}
    </div>
  );
}

interface IDashboardWrapper {
  page: string;
  description: string;
  outlineAction?: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    action: () => void;
  };
  defaultAction?: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    action: () => void;
  };
  children: React.ReactNode;
}
