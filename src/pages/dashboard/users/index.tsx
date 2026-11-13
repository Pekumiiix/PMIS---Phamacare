import { PlusIcon } from "lucide-react";

import {
  BaseTable,
  type TableColumn,
} from "@/components/re-useable/base-table";

import { DashboardWrapper } from "../shared/dashboard-wrapper";
import {
  ActionColumn,
  NameColumn,
  RoleColumn,
  StatusColumn,
} from "./component/table-columns";

export default function UsersPage() {
  return (
    <DashboardWrapper
      page="Users"
      description="Manage users and their access to the system."
      defaultAction={{
        icon: PlusIcon,
        label: "Add User",
        action: () => {
          console.log("Add User clicked");
        },
      }}
    >
      <>
        <BaseTable
          columns={TABLE_COLUMNS}
          data={TABLE_DATA}
          keyExtractor={(row) => row.id}
          extraCell={(row) => <ActionColumn id={row.id} />}
          classNames={{
            table: "border-2 border-[#E3E6EB] bg-white rounded-[12px]",
            tableHeader: "[&_tr]:border-[#E3E6EB]",
            tableHead: "text-xs font-medium leading-4 text-[#5B6474]",
            tableRow: "border-[#E3E6EB]",
          }}
        />

        <div className="flex flex-col gap-3">
          <p className="text-base font-semibold leading-6 text-[#101828]">
            What each role can do
          </p>

          {ROLE_DETAILS.map((item) => (
            <div
              key={item.role}
              className="flex items-center py-2.5 border-t border-[#E3E6EB]"
            >
              <p className="w-40 text-sm font-medium leading-5 text-[#101828]">
                {item.role}
              </p>
              <p className="text-sm leading-5 text-[#5B6474]">{item.acess}</p>
            </div>
          ))}
        </div>
      </>
    </DashboardWrapper>
  );
}

const TABLE_COLUMNS: TableColumn<UserRow>[] = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "last-sign-in", label: "Last Sign In" },
  { key: "status", label: "Status" },
];

const TABLE_DATA: UserRow[] = [
  {
    id: "1",
    name: <NameColumn name="Grace Mensah" />,
    role: <RoleColumn role="cashier" />,
    "last-sign-in": "Today, 08:02",
    status: <StatusColumn status="active" />,
  },
  {
    id: "2",
    name: <NameColumn name="Daniel Okafor" />,
    role: <RoleColumn role="pharmacist" />,
    "last-sign-in": "Today, 07:55",
    status: <StatusColumn status="active" />,
  },
  {
    id: "3",
    name: <NameColumn name="Priya Shah" />,
    role: <RoleColumn role="store_manager" />,
    "last-sign-in": "Today, 09:14",
    status: <StatusColumn status="active" />,
  },
  {
    id: "4",
    name: <NameColumn name="Tom Reid" />,
    role: <RoleColumn role="system_admin" />,
    "last-sign-in": "Yesterday, 17:40",
    status: <StatusColumn status="active" />,
  },
  {
    id: "5",
    name: <NameColumn name="Leah Ward" />,
    role: <RoleColumn role="cashier" />,
    "last-sign-in": "Today, 12:30",
    status: <StatusColumn status="active" />,
  },
  {
    id: "6",
    name: <NameColumn name="Samuel Adeyemi" />,
    role: <RoleColumn role="pharmacist" />,
    "last-sign-in": "28 Oct, 16:12",
    status: <StatusColumn status="inactive" />,
  },
];

const ROLE_DETAILS = [
  {
    role: "Cashier",
    acess: "Sell, scan, print receipts, enter POM details",
  },
  {
    role: "Pharmacist",
    acess: "Everything a cashier can, plus verify prescriptions",
  },
  {
    role: "Store Manager",
    acess: "Stock alerts, add batches, order drugs, daily reports",
  },
  {
    role: "System Admin",
    acess: "Manage users and read the audit trail",
  },
];

interface UserRow {
  id: string;
  name: React.ReactNode;
  role: React.ReactNode;
  "last-sign-in": string;
  status: React.ReactNode;
}
