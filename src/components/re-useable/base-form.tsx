import type { ReactNode } from "react";
import {
  Controller,
  type ControllerRenderProps,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";

import { cn } from "@/lib/utils";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../ui/field";

export function FormBase<T extends FieldValues>({
  className,
  children,
  form,
  legend,
  description,
  onSubmit,
}: FormBaseProps<T>) {
  return (
    <FieldSet onSubmit={form.handleSubmit(onSubmit)} className={className}>
      {legend && <FieldLegend>{legend}</FieldLegend>}
      {description && <FieldDescription>{description}</FieldDescription>}
      {children}
    </FieldSet>
  );
}

export function FormField<T extends FieldValues>({
  form,
  name,
  children,
  label,
  description,
  showError = true,
  classNames,
}: FormFieldProps<T>) {
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        const errorMessage = error?.message;

        return (
          <Field
            className={cn("w-full flex flex-col gap-2", classNames?.field)}
          >
            {label && (
              <FieldLabel
                htmlFor={name}
                onClick={() => form.setFocus(name)}
                className={cn("peer text-black-100", classNames?.label)}
              >
                {label}
              </FieldLabel>
            )}

            {children(field)}

            {description && !errorMessage && (
              <FieldDescription className={classNames?.description}>
                {description}
              </FieldDescription>
            )}

            {showError && errorMessage && (
              <FieldError className={classNames?.error}>
                {errorMessage}
              </FieldError>
            )}
          </Field>
        );
      }}
    />
  );
}

interface FormBaseProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  className?: string;
  children: ReactNode;
  legend?: string;
  description?: string;
}

interface FormFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  children: (field: ControllerRenderProps<T, Path<T>>) => ReactNode;
  label?: string;
  description?: string;
  showError?: boolean;
  classNames?: {
    field?: string;
    label?: string;
    description?: string;
    error?: string;
  };
}
