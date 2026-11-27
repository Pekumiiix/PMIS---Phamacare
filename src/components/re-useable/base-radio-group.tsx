import { cn } from "cn";

import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export function BaseRadioGroup({ value, onChange, options }: IBaseRadioGroup) {
  return (
    <RadioGroup
      value={value}
      onValueChange={onChange}
      defaultValue="option-one"
      className="flex flex-col gap-0 space-0 border border-[#E5E7EB] rounded-[20px] overflow-hidden"
    >
      {options.map((option) => {
        const isSelected = value === option.value;

        return (
          <div
            className={cn(
              "flex gap-3 px-6 py-3.5 border-b border-[#E5E7EB] last:border-b-0",
              {
                "bg-transparent": !isSelected,
                "bg-[#F4F5F7]": isSelected,
              },
            )}
          >
            <RadioGroupItem
              value={option.value}
              id={`option-${option.value}`}
              className="m-0"
            />
            <Label
              htmlFor={`option-${option.value}`}
              className="flex flex-col items-start gap-0 space-0 -mt-1"
            >
              <p className="text-sm font-medium leading-5 text-[#111827]">
                {option.label}
              </p>
              {option.description && (
                <p className="text-xs leading-4 text-[#6B7280]">
                  {option.description}
                </p>
              )}
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  );
}

interface IBaseRadioGroup {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string; description?: string }[];
}
