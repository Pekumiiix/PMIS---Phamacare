import { Download, Printer, TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis } from "recharts";

import {
  BaseTable,
  type TableColumn,
} from "@/components/re-useable/base-table";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

import { DashboardWrapper } from "../shared/dashboard-wrapper";
import { PerformanceContainer } from "./components/perfomance-container";
import { StatsContainer } from "./components/stats-container";
import { DrugNameColumn, StaffNameColumn } from "./components/table-columns";

export default function DailyReportPage() {
  return (
    <DashboardWrapper
      page="Daily report"
      description="View your daily report here."
      outlineAction={{
        icon: Download,
        label: "Export CSV",
        action: () => console.log("Button clicked"),
      }}
      defaultAction={{
        icon: Printer,
        label: "Print report",
        action: () => console.log("Button clicked"),
      }}
    >
      <>
        <div className="flex gap-8">
          <div className="basis-2/6 flex flex-col gap-7">
            <div className="flex flex-col">
              <p className="text-sm leading-5 text-[#5B6474] mb-1">
                Takings so far today
              </p>
              <p className="text-5xl leading-12 font-semibold text-[#101828] mb-2">
                £1846.40
              </p>

              <div className="flex items-center gap-1.5">
                <TrendingUp size={16} strokeWidth={2} color="#067647" />
                <p className="text-sm leading-5 text-[#067647]">
                  7.8% vs. yesterday’s £1712.15
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatsContainer name="Sales" value={142} />
              <StatsContainer name="Items sold" value={318} />
              <StatsContainer name="POM sales" value={27} />
              <StatsContainer
                name="Blocked (expired)"
                value={3}
                className="text-[#B42318]"
              />
            </div>
          </div>
          <div className="basis-4/6 flex flex-col gap-5">
            <p className="text-base leading-6 font-semibold text-[#1A2A44]">
              Sales by hour
            </p>

            <ChartContainer config={chartConfig} className="h-53 w-full">
              <BarChart accessibilityLayer data={chartData}>
                <XAxis
                  dataKey="hour"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={true}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <PerformanceContainer name="Top sellers">
            <BaseTable
              columns={TOP_SELLER_COLUMNS}
              data={TOP_SELLER_DATA}
              keyExtractor={(row) => row.id}
              classNames={{
                tableHeader: "[&_tr]:border-[#E3E6EB]",
                tableHead: "text-xs font-medium leading-4 text-[#5B6474]",
                tableRow: "border-[#E3E6EB]",
              }}
            />
          </PerformanceContainer>
          <PerformanceContainer name="By staff member">
            <BaseTable
              columns={TOP_STAFF_COLUMNS}
              data={TOP_STAFF_DATA}
              keyExtractor={(row) => row.id}
              classNames={{
                tableHeader: "[&_tr]:border-[#E3E6EB]",
                tableHead: "text-xs font-medium leading-4 text-[#5B6474]",
                tableRow: "border-[#E3E6EB]",
              }}
            />
          </PerformanceContainer>
        </div>
      </>
    </DashboardWrapper>
  );
}

const chartData = [
  { hour: "8", sales: 186 },
  { hour: "9", sales: 305 },
  { hour: "10", sales: 237 },
  { hour: "11", sales: 73 },
  { hour: "12", sales: 209 },
  { hour: "13", sales: 214 },
  { hour: "14", sales: 187 },
  { hour: "15", sales: 187 },
  { hour: "16", sales: 187 },
  { hour: "17", sales: 187 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#1A2A44",
  },
} satisfies ChartConfig;

const TOP_SELLER_COLUMNS: TableColumn<ITopSellerData>[] = [
  { key: "drug", label: "Drug" },
  { key: "unit", label: "Unit" },
  { key: "takings", label: "Takings" },
];

const TOP_STAFF_COLUMNS: TableColumn<ITopStaffData>[] = [
  { key: "name", label: "Name" },
  { key: "sales", label: "Sales" },
  { key: "takings", label: "Takings" },
];

const TOP_SELLER_DATA: ITopSellerData[] = [
  {
    id: "1",
    drug: <DrugNameColumn name="Paracetamol 500mg" type="over-the-counter" />,
    unit: 64,
    takings: "£160.00",
  },
  {
    id: "2",
    drug: <DrugNameColumn name="Ibuprofen 200mg" type="over-the-counter" />,
    unit: 41,
    takings: "£131.20",
  },
];

const TOP_STAFF_DATA: ITopStaffData[] = [
  {
    id: "1",
    name: <StaffNameColumn name="Grace Mensah" role="Cashier" />,
    sales: 64,
    takings: "£160.00",
  },
  {
    id: "2",
    name: <StaffNameColumn name="Leah Ward" role="Cashier" />,
    sales: 41,
    takings: "£131.20",
  },
];

interface ITopSellerData {
  id: string;
  drug: React.ReactElement;
  unit: number;
  takings: string;
}

interface ITopStaffData {
  id: string;
  name: React.ReactElement;
  sales: number;
  takings: string;
}
