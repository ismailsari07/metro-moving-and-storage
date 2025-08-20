"use client"
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CommandItem } from "cmdk";
import { CheckIcon, ChevronsUpDownIcon, LocationEditIcon, MailboxIcon, PhoneIcon } from "lucide-react";
import React from "react";

export default function Page() {
  const [open, setOpen] = React.useState(false);
  const [sizeOfMove, setSizeOfMove] = React.useState("");

  const sizeList = [
    { value: "1", label: "1 Bedroom" },
    { value: "2", label: "2 Bedroom" },
    { value: "3", label: "3 Bedroom" },
  ]

  return (
    <div className="bg-gray-50">

      <div className="bg-[#e5e4ff] flex flex-col items-center gap-5 lg:text-center py-20">
        <p className="text-5xl text-gray-800 font-bold">Your Trusted Partner for <br /><span className="text-blue900">Get In Touch</span></p>
        <p className="w-1/2 text-lg text-gray-500">Ready to start your Canada-US move? Contact our expert team for a free consultation and quote.</p>
      </div>

      <div className="flex flex-col gap-10 justify-center items-center py-28">

        {/* Contact Information */}
        <div className="w-1/5 flex flex-col items-center gap-3">
          <div className="flex gap-2 items-center text-green-300">
            <PhoneIcon className="size-6" /> <a href="tel:+4934838484">+1 (555) 482 39 93</a>
          </div>

          <div className="flex gap-2 items-center">
            <MailboxIcon className="size-6" /> <a href="mail:">metro@moving.com</a>
          </div>

          <div className="flex gap-2 items-center">
            <LocationEditIcon className="size-6" /> <a href="mail:">Toronto, Ontario</a>
          </div>
        </div>

        <hr className="w-2/5 border-gray-300" />

        {/* Header Quote Form */}
        <div className="w-2/5 flex flex-col justify-between items-stretch gap-4 p-6 bg-gray-100 shadows-2xl shadow-slate-200 border-2 border-gray-200 rounded-2xl text-[#141327]">
          <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>

          {/* Full Name */}
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="full-name">Full Name</Label>
            <Input type="text" id="full-name" placeholder="Full Name" />
          </div>

          {/* Email Adress */}
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
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
                              setSizeOfMove(currentValue === sizeOfMove ? "" : currentValue)
                              setOpen(false)
                            }}
                          >
                            <CheckIcon className={sizeOfMove === size.value ? "opacity-100" : "opacity-0"} />
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

          <Button variant={"default"} size={"lg"} className="mt-6"> Get My Free Quote</Button>
        </div>

      </div>

    </div>
  );
}
