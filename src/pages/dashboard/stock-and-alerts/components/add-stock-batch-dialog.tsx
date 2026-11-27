import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { BaseDatePicker } from "@/components/re-useable/base-date-picker";
import { FormField } from "@/components/re-useable/base-form";
import { BaseRadioGroup } from "@/components/re-useable/base-radio-group";
import { Input } from "@/components/ui/input";

import { DialogFormWrapper } from "../../shared/dialog-form-wrapper";

export function AddStockBatchDialog({ open, setOpen }: IAddStockBatchDialog) {
  const form = useForm<z.infer<typeof ADD_STOCK_BATCH_SCHEMA>>({
    resolver: zodResolver(ADD_STOCK_BATCH_SCHEMA),
    defaultValues: {
      drugName: "",
      drugType: "otc",
      batchNumber: "",
      expiryDate: new Date(),
      unitRecieved: 0,
      supplier: "",
      fromOrder: "",
    },
  });

  function onSubmit(data: z.infer<typeof ADD_STOCK_BATCH_SCHEMA>) {
    console.log(data);
    setOpen(false);
  }

  return (
    <DialogFormWrapper
      open={open}
      setOpen={setOpen}
      form={form}
      onSubmit={onSubmit}
      title="Add Stock Batch"
      description="Enter what’s printed on the box. Expiry is checked every morning, and the till sells the earliest batch first."
      confirmText={`Add ${form.watch("unitRecieved")} units`}
    >
      <FormField form={form} name="drugName" label="Drug Name">
        {(field) => (
          <Input
            {...field}
            value={field.value as string}
            className="w-full h-10 border-[#E5E7EB]"
          />
        )}
      </FormField>
      <FormField form={form} name="drugType" label="Drug Type">
        {(field) => (
          <BaseRadioGroup
            value={field.value as string}
            onChange={field.onChange}
            options={[
              {
                value: "otc",
                label: "OTC",
                description: "Over the counter drugs",
              },
              {
                value: "pom",
                label: "POM",
                description: "Prescription only medicine",
              },
            ]}
          />
        )}
      </FormField>
      <FormField form={form} name="batchNumber" label="Batch Number">
        {(field) => (
          <Input
            {...field}
            value={field.value as string}
            className="w-full h-10 border-[#E5E7EB]"
          />
        )}
      </FormField>
      <FormField form={form} name="expiryDate" label="Expiry Date">
        {(field) => (
          <>
            <BaseDatePicker
              date={field.value as Date}
              setDate={field.onChange}
            />
          </>
        )}
      </FormField>
      <FormField form={form} name="unitRecieved" label="Unit Received">
        {(field) => (
          <Input
            {...field}
            value={field.value as number}
            type="number"
            className="w-full h-10 border-[#E5E7EB]"
          />
        )}
      </FormField>
      <FormField form={form} name="supplier" label="Supplier">
        {(field) => (
          <Input
            {...field}
            value={field.value as string}
            className="w-full h-10 border-[#E5E7EB]"
          />
        )}
      </FormField>
      <FormField
        form={form}
        name="fromOrder"
        label="From Order (optional)"
        description="Marks the order as received"
      >
        {(field) => (
          <Input
            {...field}
            value={field.value as string}
            className="w-full h-10 border-[#E5E7EB]"
          />
        )}
      </FormField>
    </DialogFormWrapper>
  );
}

const ADD_STOCK_BATCH_SCHEMA = z.object({
  drugName: z.string().min(1, { message: "Drug name is required" }),
  drugType: z.enum(["otc", "pom"], { message: "Drug type is required" }),
  batchNumber: z.string().min(1, { message: "Batch number is required" }),
  expiryDate: z.date().min(new Date(), { message: "Expiry date is required" }),
  unitRecieved: z.number().min(1, { message: "Unit received is required" }),
  supplier: z.string().min(1, { message: "Supplier is required" }),
  fromOrder: z.string().optional(),
});

interface IAddStockBatchDialog {
  open: boolean;
  setOpen: (open: boolean) => void;
}
