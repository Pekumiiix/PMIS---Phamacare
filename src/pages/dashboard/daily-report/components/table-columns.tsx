import { DrugTypeBadge, type TDrugType } from "../../shared/drug-type-badge";

export function DrugNameColumn({ name, type }: IDrugNameColumn) {
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm font-medium leading-5 text-[#101828]">{name}</p>
      <DrugTypeBadge type={type} />
    </div>
  );
}

export function StaffNameColumn({ name, role }: IStaffNameColumn) {
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm font-medium leading-5 text-[#101828]">{name}</p>
      <p className="text-xs leading-4 text-[#5B6474]">{role}</p>
    </div>
  );
}

interface IDrugNameColumn {
  name: string;
  type: TDrugType;
}

interface IStaffNameColumn {
  name: string;
  role: string;
}
