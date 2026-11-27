import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";
import z from "zod";

import { BaseDatePicker } from "@/components/re-useable/base-date-picker";
import { FormField } from "@/components/re-useable/base-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { DialogFormWrapper } from "../../shared/dialog-form-wrapper";

const DEFAULT_LOW_STOCK_ITEMS: z.infer<typeof ORDER_ITEM_SCHEMA>[] = [
  {
    id: "1",
    name: "Loratadine 10mg",
    packaging: "Tablets × 30",
    unitPrice: 1.15,
    currentStock: 12,
    reorderLevel: 30,
    quantity: 48,
  },
  {
    id: "2",
    name: "Metformin 500mg",
    packaging: "Tablets × 28",
    unitPrice: 1.6,
    currentStock: 8,
    reorderLevel: 25,
    quantity: 42,
  },
  {
    id: "3",
    name: "Vitamin C 1000mg",
    packaging: "Tablets × 20",
    unitPrice: 2.05,
    currentStock: 0,
    reorderLevel: 20,
    quantity: 40,
  },
];

export function OrderNewDrugsDialog({ open, setOpen }: IOrderNewDrug) {
  const form = useForm<z.infer<typeof ORDER_NEW_DRUGS_SCHEMA>>({
    resolver: zodResolver(ORDER_NEW_DRUGS_SCHEMA),
    defaultValues: {
      supplier: "MediSupply Ltd",
      deliveryExpected: new Date("2026-11-12"),
      items: DEFAULT_LOW_STOCK_ITEMS,
      note: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  const watchedItems = form.watch("items");

  const orderTotal = watchedItems.reduce((sum, item) => {
    const qty = Number(item.quantity) || 0;
    const price = Number(item.unitPrice) || 0;
    return sum + qty * price;
  }, 0);

  function handleAddDrug() {
    append({
      id: crypto.randomUUID(),
      name: "",
      packaging: "Tablets × 30",
      unitPrice: 0,
      currentStock: 0,
      reorderLevel: 10,
      quantity: 20,
      isCustom: true,
    });
  }

  function onSubmit(data: z.infer<typeof ORDER_NEW_DRUGS_SCHEMA>) {
    console.log(data);
    setOpen(false);
  }

  return (
    <DialogFormWrapper
      open={open}
      setOpen={setOpen}
      form={form}
      onSubmit={onSubmit}
      title="Order new drugs"
      description="Purchase order PO-0193. Low-stock drugs are added for you, topped up to twice their reorder level."
      confirmText="Place order"
    >
      <FormField form={form} name="supplier" label="Supplier">
        {(field) => (
          <Input
            {...field}
            value={field.value as string}
            className="w-full h-10 border-[#E5E7EB]"
          />
        )}
      </FormField>

      <FormField form={form} name="deliveryExpected" label="Delivery expected">
        {(field) => (
          <BaseDatePicker date={field.value as Date} setDate={field.onChange} />
        )}
      </FormField>

      <div className="border-t border-[#E5E7EB] divide-y divide-[#E5E7EB]">
        {fields.map((item, index) => {
          const currentItem = watchedItems[index] || item;
          const lineTotal =
            (Number(currentItem.quantity) || 0) *
            (Number(currentItem.unitPrice) || 0);

          return (
            <div key={item.id} className="py-4">
              <div className="flex items-start justify-between gap-2">
                {item.isCustom ? (
                  <div className="flex-1 grid grid-cols-2 gap-2 pr-2">
                    <Input
                      placeholder="Drug name (e.g. Amoxicillin 500mg)"
                      {...form.register(`items.${index}.name`)}
                      className="h-9 text-sm border-[#E5E7EB]"
                    />
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="Unit price (£)"
                      {...form.register(`items.${index}.unitPrice`, {
                        valueAsNumber: true,
                      })}
                      className="h-9 text-sm border-[#E5E7EB]"
                    />
                  </div>
                ) : (
                  <div>
                    <p className="text-sm font-medium text-[#111827]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#6B7280] mt-0.5">
                      {item.packaging} · £{item.unitPrice.toFixed(2)} each
                    </p>
                  </div>
                )}

                <Button
                  variant="ghost"
                  type="button"
                  onClick={() => remove(index)}
                  aria-label={`Remove ${item.name || "drug"}`}
                  className="text-[#9CA3AF] hover:text-red-500 transition-colors p-1"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-3 flex items-start justify-end gap-4">
                <div className="min-w-fit text-right">
                  <p
                    className={`text-sm font-medium ${
                      item.currentStock === 0
                        ? "text-red-600"
                        : "text-[#111827]"
                    }`}
                  >
                    {item.currentStock}
                  </p>
                  <p className="text-xs text-[#6B7280]">
                    reorder at {item.reorderLevel}
                  </p>
                  <p className="text-sm font-medium text-[#111827] mt-1">
                    £{lineTotal.toFixed(2)}
                  </p>
                </div>

                <FormField
                  form={form}
                  name={`items.${index}.quantity`}
                  classNames={{ field: "w-74" }}
                >
                  {(field) => (
                    <Input
                      {...field}
                      type="number"
                      min={1}
                      value={field.value as number}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? 0 : Number(e.target.value),
                        )
                      }
                      className="h-10 text-right border-[#E5E7EB]"
                    />
                  )}
                </FormField>
              </div>
            </div>
          );
        })}

        <div className="py-3">
          <Button
            variant="ghost"
            type="button"
            onClick={handleAddDrug}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add a drug
          </Button>
        </div>
      </div>

      <div className="border-t border-[#E5E7EB] pt-4 flex items-center justify-between">
        <span className="text-sm text-[#6B7280]">Order total</span>
        <span className="text-lg font-semibold text-[#111827]">
          £{orderTotal.toFixed(2)}
        </span>
      </div>

      <FormField form={form} name="note" label="Note to supplier (optional)">
        {(field) => (
          <Textarea
            {...field}
            value={(field.value as string) ?? ""}
            placeholder="Please deliver to the rear entrance before 10:00."
            className="min-h-20 border-[#E5E7EB]"
          />
        )}
      </FormField>
    </DialogFormWrapper>
  );
}

const ORDER_ITEM_SCHEMA = z.object({
  id: z.string(),
  name: z.string().min(1, { message: "Drug name is required" }),
  packaging: z.string(),
  unitPrice: z.number().min(0),
  currentStock: z.number().min(0),
  reorderLevel: z.number().min(0),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
  isCustom: z.boolean().optional(),
});

const ORDER_NEW_DRUGS_SCHEMA = z.object({
  supplier: z.string().min(1, { message: "Supplier is required" }),
  deliveryExpected: z.date({ message: "Expected delivery date is required" }),
  items: z
    .array(ORDER_ITEM_SCHEMA)
    .min(1, { message: "At least one drug is required" }),
  note: z.string().optional(),
});

interface IOrderNewDrug {
  open: boolean;
  setOpen: (open: boolean) => void;
}
