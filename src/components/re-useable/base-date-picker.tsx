import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function BaseDatePicker({ date, setDate }: IBaseDatePicker) {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            data-empty={!date}
            className="h-10 justify-start text-left font-normal data-[empty=true]:text-muted-foreground border-[#E5E7EB]"
          />
        }
      >
        <CalendarIcon />
        {date ? format(date, "PPP") : <span>Pick a date</span>}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} required />
      </PopoverContent>
    </Popover>
  );
}

interface IBaseDatePicker {
  date: Date;
  setDate: (date: Date) => void;
}
