import type { FieldValues, UseFormReturn } from "react-hook-form";

import { BaseDialog } from "@/components/re-useable/base-dialog";
import { FormBase } from "@/components/re-useable/base-form";
import { Button } from "@/components/ui/button";

export function DialogFormWrapper<T extends FieldValues>({
  open,
  setOpen,
  form,
  onSubmit,
  confirmText,
  children,
  title,
  description,
}: IDialogFormQrapper<T>) {
  return (
    <BaseDialog
      open={open}
      setOpen={setOpen}
      header={{ title, description }}
      classNames={{
        content:
          "min-w-[520px] w-[520px] max-h-[90vh] overflow-y-auto px-0 pt-6",
        header: "px-4",
      }}
    >
      <FormBase form={form} onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 px-4">{children}</div>

        <div className="w-full flex flex-col gap-2 border-t border-[#E5E7EB] px-6 pt-4">
          <Button
            type="submit"
            className="w-full h-fit flex items-center gap-1.5 bg-[#0F1729] rounded-[8px] py-1.75 px-3.5 hover:bg-[#0F1729]/95"
          >
            <span className="text-sm font-medium text-white">
              {confirmText}
            </span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full h-fit flex items-center gap-1.5 rounded-[8px] py-1.75 px-3.5 border-[#E3E6EB]"
            onClick={() => setOpen(false)}
          >
            <span className="text-sm font-medium">Cancel</span>
          </Button>
        </div>
      </FormBase>
    </BaseDialog>
  );
}

interface IDialogFormQrapper<T extends FieldValues> {
  open: boolean;
  setOpen: (open: boolean) => void;
  form: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  title: string;
  description: string;
  confirmText: string;
  children: React.ReactNode;
}
