import type { ReactNode } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function BaseTable<T>({
  caption,
  columns,
  data,
  keyExtractor,
  extraCell,
  classNames,
}: BaseTableProps<T>) {
  return (
    <Table className={classNames?.table}>
      {caption && <TableCaption>{caption}</TableCaption>}

      <TableHeader className={classNames?.tableHeader}>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={String(col.key)} className={classNames?.tableHead}>
              {col.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody className={classNames?.tableBody}>
        {data.map((row, rowIndex) => (
          <TableRow
            key={keyExtractor(row, rowIndex)}
            className={classNames?.tableRow}
          >
            {columns.map((col) => (
              <TableCell
                key={String(col.key)}
                className={classNames?.tableCell}
              >
                {row[col.key] as ReactNode}
              </TableCell>
            ))}

            {extraCell && extraCell(row)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export interface TableColumn<T> {
  key: keyof T;
  label: string;
}

interface BaseTableProps<T> {
  caption?: string;
  columns: TableColumn<T>[];
  data: T[];
  keyExtractor: (item: T, index: number) => string | number;
  extraCell?: (data: T) => React.ReactNode;
  classNames?: {
    table?: string;
    tableHeader?: string;
    tableHead?: string;
    tableBody?: string;
    tableRow?: string;
    tableCell?: string;
  };
}
