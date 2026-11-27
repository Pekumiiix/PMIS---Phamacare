import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { FormField } from "@/components/re-useable/base-form";
import { BaseRadioGroup } from "@/components/re-useable/base-radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { DialogFormWrapper } from "../../shared/dialog-form-wrapper";

export function ResetPasswordDialog({
  open,
  setOpen,
  user = {
    name: "Grace Mensah",
    username: "gmensah",
    role: "Cashier",
  },
}: IResetPasswordDialog) {
  const firstName = user.name.trim().split(/\s+/)[0] || user.name;
  const initials = user.name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const form = useForm<z.infer<typeof RESET_PASSWORD_SCHEMA>>({
    resolver: zodResolver(RESET_PASSWORD_SCHEMA),
    defaultValues: {
      passwordMode: "temporary",
      customPassword: "",
      signOutNow: true,
    },
  });

  const passwordMode = form.watch("passwordMode");

  function onSubmit(data: z.infer<typeof RESET_PASSWORD_SCHEMA>) {
    console.log(data);
    setOpen(false);
  }

  return (
    <DialogFormWrapper
      open={open}
      setOpen={setOpen}
      form={form}
      onSubmit={onSubmit}
      title={`Reset password for ${firstName}`}
      description="Their current password stops working as soon as you reset it."
      confirmText="Reset password"
    >
      <div className="flex items-center justify-between rounded-xl bg-[#F3F4F6] px-4 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-sm font-medium text-[#111827]">
            {initials}
          </div>
          <div>
            <p className="text-sm font-medium text-[#111827]">{user.name}</p>
            <p className="font-mono text-xs text-[#6B7280]">{user.username}</p>
          </div>
        </div>

        <span className="rounded-md bg-[#FEE2E2] px-2.5 py-0.5 text-xs font-medium text-[#B91C1C]">
          {user.role}
        </span>
      </div>

      <FormField form={form} name="passwordMode" label="New password">
        {(field) => (
          <BaseRadioGroup
            value={field.value as string}
            onChange={field.onChange}
            options={[
              {
                value: "temporary",
                label: "Generate a temporary password",
                description:
                  "Shown once. They choose their own at next sign-in.",
              },
              {
                value: "custom",
                label: "Set one yourself",
                description: "For when you’re reading it out at the counter.",
              },
            ]}
          />
        )}
      </FormField>

      {passwordMode === "custom" && (
        <FormField form={form} name="customPassword" label="Password">
          {(field) => (
            <Input
              {...field}
              value={(field.value as string) ?? ""}
              placeholder="Enter password to read out"
              className="h-10 w-full border-[#E5E7EB]"
            />
          )}
        </FormField>
      )}

      <FormField form={form} name="signOutNow">
        {(field) => (
          <Label className="flex cursor-pointer items-start gap-3 pt-1">
            <Checkbox
              checked={field.value as boolean}
              onCheckedChange={(checked) => field.onChange(Boolean(checked))}
              className="mt-0.5 border-[#111827] data-[state=checked]:bg-[#111827] data-[state=checked]:text-white"
            />
            <div className="space-y-0.5">
              <p className="text-sm font-medium leading-none text-[#111827]">
                Sign {firstName} out of the till now
              </p>
              <p className="text-xs text-[#6B7280]">
                Any sale in progress on their session is held, not lost.
              </p>
            </div>
          </Label>
        )}
      </FormField>
    </DialogFormWrapper>
  );
}

const RESET_PASSWORD_SCHEMA = z
  .object({
    passwordMode: z.enum(["temporary", "custom"], {
      message: "Select how you want to set the password",
    }),
    customPassword: z.string().optional(),
    signOutNow: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (
      data.passwordMode === "custom" &&
      (!data.customPassword || data.customPassword.trim().length < 6)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["customPassword"],
        message: "Password must be at least 6 characters",
      });
    }
  });

interface IResetPasswordDialog {
  open: boolean;
  setOpen: (open: boolean) => void;
  user?: {
    name: string;
    username: string;
    role: string;
  };
}
