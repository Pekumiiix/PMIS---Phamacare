import {
  Check,
  DollarSign,
  Plus,
  Stethoscope,
  StickyNote,
  User,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { DashboardWrapper } from "../shared/dashboard-wrapper";
import { DrugTypeBadge } from "../shared/drug-type-badge";
import { PrescriptionItem } from "./components/prescription-item";
import { PrescriptionStatusContainer } from "./components/prescription-status-container";
import { RecordContainer } from "./components/record-container";

export default function PrescriptionPage() {
  return (
    <DashboardWrapper
      page="Prescriptions"
      description="Manage POM sales here"
      defaultAction={{
        icon: Plus,
        label: "Enter Prescription",
        action: () => console.log("Button clicked"),
      }}
      className="px-0 pt-0"
    >
      <div className="min-h-full flex flex-row">
        <div className="basis-2/6 flex flex-col border-r border-[#E3E6EB]">
          <PrescriptionStatusContainer status="Waiting for check">
            <PrescriptionItem
              name="Margaret Collins"
              drug="Amoxicillin 500mg"
              unit={1}
              time="13:42"
              isActive
            />
          </PrescriptionStatusContainer>
          <PrescriptionStatusContainer status="Checked today">
            <PrescriptionItem
              name="Harun Malik"
              drug="Omeprazole 20mg"
              unit={1}
              time="11:30"
              status="verified"
            />
          </PrescriptionStatusContainer>
        </div>

        <div className="basis-4/6 flex flex-col gap-7 py-8 px-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <p className="text-sm leading-5 text-[#5B6474]">RX-0418</p>
              <p className="bg-[#F2EEFC] rounded-full px-2 py-0.75 text-xs leading-4 font-medium text-[#6941C6]">
                Awaiting Check
              </p>
            </div>
            <p className="text-2xl leading-8 font-semibold text-[#101828] mb-1">
              Margaret Collins
            </p>

            <p className="text-sm leading-5 text-[#5B6474]">
              Entered by Grace Mensah at 13:42 · sale S-20931
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-5 py-6.25 border-t border-[#E3E6EB]">
            <RecordContainer icon={User} title="Patient">
              <p className="text-base leading-6 font-medium text-[#101828]">
                Margaret Collins
              </p>
            </RecordContainer>
            <RecordContainer icon={Stethoscope} title="Prescribing doctor">
              <p className="text-base leading-6 font-medium text-[#101828]">
                Dr. A. Patel
              </p>
            </RecordContainer>
            <RecordContainer icon={StickyNote} title="Medicine">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <p className="text-base leading-6 font-medium text-[#101828]">
                    Amoxicillin 500mg
                  </p>
                  <DrugTypeBadge type="prescription-only" />
                </div>
                <p className="text-sm leading-5 text-[#5B6474]">
                  Capsules × 21 · qty 1
                </p>
              </div>
            </RecordContainer>
            <RecordContainer icon={DollarSign} title="Batch dispensed">
              <div className="flex flex-col gap-0.5">
                <p className="text-base leading-6 font-medium text-[#101828]">
                  AMX-2401
                </p>
                <p className="text-sm leading-5 text-[#5B6474]">
                  Exp 2 Jan 2027
                </p>
              </div>
            </RecordContainer>
          </div>

          <div className="flex flex-col gap-2.25 py-6.25 border-t border-[#E3E6EB]">
            <div className="flex items-center gap-2">
              <Button className="w-45 h-10 rounded-[8px] bg-[#067647] hover:bg-[#067647]/95 text-sm leading-5 font-medium text-white">
                <Check size={16} strokeWidth={2} />
                Verify prescription
              </Button>
              <Button variant="outline" className="w-25 h-10 border-[#CFD4DC]">
                <X strokeWidth={2} />
                Reject
              </Button>
            </div>
            <p className="txet-xs leading-4 text-[#5B6474]">
              Check the paper slip matches patient, doctor and medicine.
            </p>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
}
