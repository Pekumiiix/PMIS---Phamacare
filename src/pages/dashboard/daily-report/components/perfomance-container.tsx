export function PerformanceContainer({ name, children }: IPeformanceContainer) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-base leading-6 font-semibold text-[#101828]">{name}</p>
      {children}
    </div>
  );
}

interface IPeformanceContainer {
  name: string;
  children: React.ReactNode;
}
