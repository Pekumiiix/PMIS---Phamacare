export function PrescriptionStatusContainer({
  status,
  children,
}: IPrescriptionStatusContainer) {
  return (
    <div className="flex flex-col">
      <p className="text-xs font-medium leading-5 text-[#5B6474] pl-5 py-2.25">
        {status}
      </p>

      {children}
    </div>
  );
}

interface IPrescriptionStatusContainer {
  status: string;
  children: React.ReactNode;
}
