"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function QuoteForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [status, setStatus] = React.useState<{
    ok: boolean;
    msg: string;
  } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const payload = {
      fullname: fd.get("fullname"),
      email: fd.get("email"),
      phoneNumber: fd.get("phoneNumber"),
      movingFrom: fd.get("movingFrom"),
      movingTo: fd.get("movingTo"),
      date: fd.get("date"),
      sizeOfMove: fd.get("sizeOfMove"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");
      setStatus({ ok: true, msg: "Email sent successfully!" });
      formRef.current?.reset();
    } catch (err) {
      setStatus({ ok: false, msg: "Something went wrong." });
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">
      {/* Full Name */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="full-name">Full Name</Label>
        <Input
          type="text"
          name="fullname"
          id="full-name"
          placeholder="Full Name"
        />
      </div>

      {/* Email Address */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Email" />
      </div>

      {/* Phone Number */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="phone-number">Phone Number</Label>
        <Input
          type="tel"
          name="phoneNumber"
          id="phone-number"
          placeholder="Phone Number"
        />
      </div>

      <div className="flex justify-between items-center gap-4">
        {/* Moving From */}
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="from">Moving From</Label>
          <Input
            type="text"
            name="movingFrom"
            id="from"
            placeholder="City/Province"
          />
        </div>

        {/* Moving To */}
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="to">Moving To</Label>
          <Input
            type="text"
            name="movingTo"
            id="to"
            placeholder="City/Province"
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        {/* Date */}
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="date">Date</Label>
          <Input type="date" name="date" id="date" />
        </div>

        {/* Size Of Move */}
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="sizeOfMove">Size Of Move</Label>
          <select
            id="sizeOfMove"
            name="sizeOfMove"
            defaultValue=""
            className="border rounded-md p-2"
          >
            <option value="" disabled>
              Select Size...
            </option>
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedroom">2 Bedroom</option>
            <option value="3 Bedroom">3 Bedroom</option>
          </select>
        </div>
      </div>

      {status && (
        <p className={status.ok ? "text-green-600" : "text-red-600"}>
          {status.msg}
        </p>
      )}

      <Button type="submit" variant="default" size="lg" className="mt-6">
        Get My Free Quote
      </Button>
    </form>
  );
}
