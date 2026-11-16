export function RecordContainer({ icon, title, children }: IRecordContainer) {
  const Icon = icon;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5">
        <Icon strokeWidth={2} color="#5B6474" className="size-3.5" />
        <p className="text-xs leading-4 text-[#5B6474]">{title}</p>
      </div>

      {children}
    </div>
  );
}

interface IRecordContainer {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
}
