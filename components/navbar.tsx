'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center px-2 md:px-40 py-4 border-b border-gray-300">
      <Link href={"/"} className="text-xl font-semibold">Metro Moving & Storage</Link>
      <div className="hidden md:flex gap-4 items-center">

        <Link href={"/services"}>Services</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>

      </div>
      <div className="hidden md:flex gap-4 items-center">

        <Button variant={"secondary"} size={"lg"}>Call Now</Button>
        <Link href={"/contact"}><Button size={"lg"}>Get A Quote</Button></Link>

      </div>
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-center font-bold text-xl">Menu</SheetTitle>
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-6 px-4">
              <Link href={"/services"} className="grid gap-3">
                <Button variant={"ghost"} onClick={() => setOpen(false)}>Services</Button>
              </Link>
              <Link href={"/about"} className="grid gap-3">
                <Button variant={"ghost"} onClick={() => setOpen(false)}>About</Button>
              </Link>
              <Link href={"/contact"} className="grid gap-3">
                <Button variant={"ghost"} onClick={() => setOpen(false)}>Contact</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

    </nav>
  )
}
