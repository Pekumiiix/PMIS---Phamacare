import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function BaseDialog({
  open,
  setOpen,
  trigger,
  header,
  children,
  classNames,
}: IBaseDialog) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={trigger} className={classNames?.tigger} />
      <DialogContent className={classNames?.content}>
        <DialogHeader className={classNames?.header}>
          <DialogTitle className={classNames?.title}>
            {header?.title}
          </DialogTitle>
          <DialogDescription className={classNames?.description}>
            {header?.description}
          </DialogDescription>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
}

interface IBaseDialog {
  open?: boolean;
  setOpen(open: boolean): void;
  trigger?: React.ReactElement;
  header?: {
    title?: string;
    description?: string;
  };
  children: React.ReactNode;
  classNames?: {
    tigger?: string;
    content?: string;
    header?: string;
    title?: string;
    description?: string;
  };
}
