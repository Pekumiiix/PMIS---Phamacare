import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "cn";
import z from "zod";

import { BaseDialog } from "@/components/re-useable/base-dialog";
import { FormBase, FormField } from "@/components/re-useable/base-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function AddUserDialog({ open, setOpen }: IAddUserDialog) {
  const form = useForm<z.infer<typeof ADD_USER_SCHEMA>>({
    resolver: zodResolver(ADD_USER_SCHEMA),
    defaultValues: {
      fullname: "",
      role: "cashier",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof ADD_USER_SCHEMA>) {
    console.log(data);
  }

  return (
    <BaseDialog
      open={open}
      setOpen={setOpen}
      header={{
        title: "Add User",
        description:
          "Accounts live on this server only. Every action they take is logged in the audit trail.",
      }}
      classNames={{
        content: "min-w-[520px] w-[520px] max-h-[90vh] overflow-y-scroll",
      }}
    >
      <FormBase form={form} onSubmit={onSubmit} className="flex flex-col gap-4">
        <FormField form={form} name="fullname" label="Full Name">
          {(field) => (
            <Input {...field} className="w-full h-10 border-[#E5E7EB]" />
          )}
        </FormField>
        <FormField form={form} name="role" label="Role">
          {(field) => (
            <RadioGroup
              {...field}
              defaultValue="option-one"
              className="flex flex-col gap-0 space-0 border border-[#E5E7EB] rounded-[20px] overflow-hidden"
            >
              {[
                {
                  value: "cashier",
                  label: "Cashier",
                  description: "Sell, scan, print receipts, enter POM details",
                },
                {
                  value: "pharmacist",
                  label: "Pharmacist",
                  description:
                    "Everything a cashier can, plus verify prescriptions",
                },
                {
                  value: "store_manager",
                  label: "Store Manager",
                  description:
                    "Stock alerts, add batches, order drugs, daily reports",
                },
                {
                  value: "system_admin",
                  label: "System Admin",
                  description: "Manage users and read the audit trail",
                },
              ].map((option) => {
                const isSelected = field.value === option.value;

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
                      <p className="text-xs leading-4 text-[#6B7280]">
                        {option.description}
                      </p>
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          )}
        </FormField>
        <FormField form={form} name="password" label="Password">
          {(field) => (
            <Input
              {...field}
              type="password"
              className="w-full h-10 border-[#E5E7EB]"
            />
          )}
        </FormField>
        <div className="w-full flex items-center justify-end gap-2 border-t border-[#E5E7EB] px-6 pt-4">
          <Button
            type="button"
            variant="outline"
            className="size-fit flex items-center gap-1.5 rounded-[8px] py-1.75 px-3.5 border-[#E3E6EB]"
            onClick={() => setOpen(false)}
          >
            <span className="text-sm font-medium">Cancel</span>
          </Button>

          <Button
            type="submit"
            className="size-fit flex items-center gap-1.5 bg-[#0F1729] rounded-[8px] py-1.75 px-3.5 hover:bg-[#0F1729]/95"
          >
            <span className="text-sm font-medium text-white">
              Create Account
            </span>
          </Button>
        </div>
      </FormBase>
    </BaseDialog>
  );
}

const ADD_USER_SCHEMA = z.object({
  fullname: z.string().min(1, { message: "Full name is required" }),
  role: z.enum(["cashier", "pharmacist", "store_manager", "system_admin"], {
    message: "Role is required",
  }),
  password: z.string().min(1, { message: "Password is required" }),
});

interface IAddUserDialog {
  open: boolean;
  setOpen: (open: boolean) => void;
}
