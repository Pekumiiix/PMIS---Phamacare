import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { BaseDialog } from "@/components/re-useable/base-dialog";
import { FormBase, FormField } from "@/components/re-useable/base-form";
import { BaseRadioGroup } from "@/components/re-useable/base-radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    setOpen(false);
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
        content:
          "min-w-[520px] w-[520px] max-h-[90vh] overflow-y-scroll px-0 pt-6",
        header: "px-4",
      }}
    >
      <FormBase form={form} onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 px-4">
          <FormField form={form} name="fullname" label="Full Name">
            {(field) => (
              <Input {...field} className="w-full h-10 border-[#E5E7EB]" />
            )}
          </FormField>
          <FormField form={form} name="role" label="Role">
            {(field) => (
              <>
                <BaseRadioGroup
                  {...field}
                  options={[
                    {
                      value: "cashier",
                      label: "Cashier",
                      description:
                        "Sell, scan, print receipts, enter POM details",
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
                  ]}
                />
              </>
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
        </div>
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
