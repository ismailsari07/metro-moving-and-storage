"use client";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CommandItem } from "cmdk";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";

enum sizeListEnum {
  "1 Bedroom",
  "2 Bedroom",
  "3 Bedroom",
}

const formSchema = z.object({
  fullname: z.string(),
  email: z.email(),
  phoneNumber: z.number().lte(11),
  movingFrom: z.string(),
  movingTo: z.string(),
  date: z.date(),
  sizeOfMove: z.enum(sizeListEnum),
});

export default function QuoteForm() {
  const [open, setOpen] = React.useState(false);
  const [sizeOfMove, setSizeOfMove] = React.useState("");

  const sizeList = [
    { value: "1", label: "1 Bedroom" },
    { value: "2", label: "2 Bedroom" },
    { value: "3", label: "3 Bedroom" },
  ];

  // Define the form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      movingFrom: "",
      movingTo: "",
    },
  });
  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="full-name">Full Name</Label>
          <Input
            type="text"
            name="fullname"
            id="full-name"
            placeholder="Full Name"
          />
        </div>

        {/* Email Adress */}
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </div>

        {/* Phone Number */}
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="phone-number">Phone Number</Label>
          <Input type="number" id="phone-number" placeholder="Phone Number" />
        </div>

        <div className="flex justify-between items-center gap-4">
          {/* Moving From */}
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="from">Moving From</Label>
            <Input type="text" id="from" placeholder="City/Province" />
          </div>
          {/* Moving To */}
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="to">Moving To</Label>
            <Input type="text" id="to" placeholder="City/Province" />
          </div>
        </div>

        <div className="flex justify-between items-center gap-4">
          {/* Date */}
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="date">Date</Label>
            <Input type="date" id="date" placeholder="Date" />
          </div>
          {/* Size Of Move */}
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="size">Size Of Move</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="justify-between bg-accent"
                >
                  {sizeOfMove
                    ? sizeList.find((size) => size.value === sizeOfMove)?.label
                    : "Select Size..."}
                  <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search Size..." />
                  <CommandList>
                    <CommandEmpty>No size found.</CommandEmpty>
                    <CommandGroup>
                      {sizeList.map((size) => (
                        <CommandItem
                          key={size.value}
                          value={size.value}
                          onSelect={(currentValue) => {
                            setSizeOfMove(
                              currentValue === sizeOfMove ? "" : currentValue,
                            );
                            setOpen(false);
                          }}
                        >
                          <CheckIcon
                            className={
                              sizeOfMove === size.value
                                ? "opacity-100"
                                : "opacity-0"
                            }
                          />
                          {size.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Button type="submit" variant={"default"} size={"lg"} className="mt-6">
          {" "}
          Get My Free Quote
        </Button>
      </form>
    </Form>
  );
}
