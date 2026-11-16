import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { FormBase, FormField } from "@/components/re-useable/base-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignInPage() {
  const form = useForm({
    resolver: zodResolver(SIGN_IN_SCHEMA),
    defaultValues: {},
  });

  function onSubmit(data: z.infer<typeof SIGN_IN_SCHEMA>) {
    console.log(data);
  }

  return (
    <div className="size-full min-h-screen flex flex-col items-center justify-center bg-[#F5F6F8]">
      <div className="w-100 flex flex-col gap-8">
        <div className="flex items-center gap-2.5">
          <img src="/assets/images/logo.png" alt="Logo" className="size-9" />
          <span className="text-xl font-semibold leading-7 text-[#101828]">
            Pharmacare
          </span>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-1">
            <p className="text-2xl leading-8 font-semibold text-[#101828]">
              Sign in to this till
            </p>
            <p className="text-sm leading-5 text-[#5B6474]">
              Your account decides what you can see and do.
            </p>
          </div>

          <FormBase
            form={form}
            onSubmit={onSubmit}
            className="flex flex-col gap-4"
          >
            <FormField form={form} name="username" label="Username">
              {(field) => <Input {...field} className="h-11" />}
            </FormField>
            <FormField form={form} name="password" label="Password">
              {(field) => <Input {...field} type="password" className="h-11" />}
            </FormField>

            <Button
              type="submit"
              className="w-full h-10.5 rounded-[8px] bg-[#0F1729] text-white text-[15px] leading-5.75 font-medium"
            >
              Sign In
            </Button>
          </FormBase>
        </div>

        <div className="flex flex-col gap-3 py-5.25 border-t border-[#E3E6EB]">
          <p className="text-xs leading-4 font-medium text-[#5B6474]">
            Recently on this till
          </p>

          <div className="flex items-center gap-2">
            <p className="rounded-full border border-[#E3E6EB] px-3.25 py-2.25 text-sm leading-5 font-medium text-[#101828]">
              Grace{" "}
              <span className="text-[#5B6474] font-normal">. Cashier</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const SIGN_IN_SCHEMA = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});
