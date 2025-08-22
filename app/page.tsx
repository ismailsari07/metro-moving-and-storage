'use client';

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover } from "@/components/ui/popover"
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { CheckIcon, ChevronsUpDownIcon, CircleCheckBigIcon, DollarSignIcon, EarthIcon, PersonStandingIcon, Shield, ShieldIcon, StarIcon, StarsIcon } from "lucide-react"
import { STEPS } from "@/lib/data/steps";
import HowItWorkCard from "@/components/how-it-work-card";
import ServiceCard from "@/components/service";
import React from "react"
import { OUR_SERVICES } from "@/lib/data/our-services";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion"


export default function Page() {
  const [open, setOpen] = React.useState(false);
  const [sizeOfMove, setSizeOfMove] = React.useState("");

  const sizeList = [
    { value: "1", label: "1 Bedroom" },
    { value: "2", label: "2 Bedroom" },
    { value: "3", label: "3 Bedroom" },
  ]
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      // bazen ease'in string tipi eski sürümlerde şikayet eder:
      // istersen alttaki satırı cubic-bezier'e çevir:
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      // veya geçici: ease: "easeOut" as any
    },
  };



  return (
    <main className="">
      {/* Header Section */}
      <div className="w-full">
        <motion.header
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative text-white w-full"
        >
          <div
            className="md:w-3/4 md:absolute md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex flex-col md:flex-row justify-between items-center md:gap-20 z-10"
          >

            {/* Header Text */}
            <div
              className="md:w-3/5 flex flex-col items-center md:items-start gap-3 md:gap-6 max-md:p-2 max-md:my-6 max-md:text-center"
            >
              <motion.span variants={item} className="px-3 rounded-2xl bg-blue-600 text-xs md:text-sm md:font-semibold">🏆 Trusted Moving Professionals</motion.span>
              <motion.h1 variants={item} className="text-3xl md:text-6xl font-semibold text-gray-800 md:text-white">Stress-Free, Reliable <span className="text-blue-400"> Moving Services</span></motion.h1>
              <motion.p variants={item} className="text-lg text-gray-800 md:text-white">Experience seamless moving with our professional team. From residential moves to commercial relocations, we handle your belongings with care and precision.</motion.p>
            </div>

            {/* Header Quote Form */}
            <motion.div
              variants={item}
              className="md:w-3/5 hidden md:flex flex-col justify-between items-stretch gap-4 p-3 md:p-6 max-md:mx-2 bg-[#f9f7f5] shadows-2xl shadow-slate-200 border-2 border-gray-200 rounded-2xl text-[#141327]"
            >
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
            </motion.div>

          </div>

          <img src={"/truck-highway-sunset.jpg"} alt="truck image" className="max-md:hidden relative max-h-[800px] w-[95%] md:w-full brightness-50 max-md:mt-6 max-md:rounded-xl max-md:mx-auto" />
          {/* Mobile Version */}
          <motion.img variants={item} src={"/truck-highway-sunset.jpg"} alt="truck image" className="md:hidden relative max-h-[800px] w-[95%] md:w-full brightness-50 max-md:mt-6 max-md:rounded-xl max-md:mx-auto" />

        </motion.header>
      </div >



      <section className="flex flex-col items-center justify-center gap-10 py-16 md:py-32 px-2 md:px-10">
        <div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center text-center gap-5"
          >
            <motion.h3 variants={item} className="text-4xl text-gray-800 font-bold">Cross-Border Moving Expertise</motion.h3>
            <motion.p variants={item} className="text-lg text-gray-600 md:w-1/2">Moving between Canada and the US involves complex regulations, documentation, and logistics. Our specialized knowledge ensures your international move is handled with precision and care.</motion.p>
          </motion.div>

          <div
            className="flex flex-col md:flex-row gap-5 justify-center mt-10"
          >
            {/* "Canada to USA" Card */}
            <div className="shadow-2xl md:w-1/2 rounded-2xl">
              <div className="bg-red-100 flex justify-center items-center gap-5 p-5 rounded-t-2xl">
                <div className="p-5 rounded-full bg-red-700">
                  <EarthIcon className="size-8 md:size-12 text-white" />
                </div>
                <div >
                  <h4 className="text-2xl text-gray-800 font-bold">🍁 Canada To USA</h4>
                  <p className="text-lg text-gray-500">Seamless relocations from any Canadian province to US states</p>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-start gap-4 text-start">
                  <CircleCheckBigIcon className="text-green-500 size-6" />
                  <div>
                    <div className="font-semibold">Immigration Documentation</div>
                    <div className="text-gray-700">Complete assistance with visa requirements and customs forms</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-start">
                  <CircleCheckBigIcon className="text-green-500 size-6" />
                  <div>
                    <div className="font-semibold">Duty & Tax Management</div>
                    <div className="text-gray-700">Expert handling of customs duties and import regulations</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-start">
                  <CircleCheckBigIcon className="text-green-500 size-6" />
                  <div>
                    <div className="font-semibold">Vehicle Transportation</div>
                    <div className="text-gray-700">Specialized car shipping with all required certifications</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-start">
                  <CircleCheckBigIcon className="text-green-500 size-6" />
                  <div>
                    <div className="font-semibold">Storage Solutions</div>
                    <div className="text-gray-700">Temporary storage during transition periods</div>
                  </div>
                </div>
              </div>

            </div>
            <div className="shadow-2xl md:w-1/2 rounded-2xl">
              <div className="bg-blue-100 flex justify-center items-center gap-5 p-5 rounded-t-2xl">
                <div className="p-5 rounded-full bg-blue-700">
                  <EarthIcon className="size-8 md:size-12 text-white" />
                </div>
                <div >
                  <h4 className="text-2xl text-gray-800 font-bold"> 🇺🇸  USA to Canada</h4>
                  <p className="text-lg text-gray-500">Professional moves from US states to Canadian provinces</p>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-start gap-4 text-start">
                  <CircleCheckBigIcon className="text-green-500 size-6" />
                  <div>
                    <div className="font-semibold">Canadian Immigration Support</div>
                    <div className="text-gray-700">Guidance through Canadian immigration procedures</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-start">
                  <CircleCheckBigIcon className="text-green-500 size-6" />
                  <div>
                    <div className="font-semibold">CBSA Compliance</div>
                    <div className="text-gray-700">Full compliance with Canada Border Services Agency</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-start">
                  <CircleCheckBigIcon className="text-green-500 size-6" />
                  <div>
                    <div className="font-semibold">Provincial Regulations</div>
                    <div className="text-gray-700">Expert knowledge of provincial moving requirements</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-start">
                  <CircleCheckBigIcon className="text-green-500 size-6" />
                  <div>
                    <div className="font-semibold">Healthcare Transition</div>
                    <div className="text-gray-700">Information on healthcare system transitions</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#f9fafb] flex flex-col items-center justify-center gap-10 py-16 md:py-36 px-2 md:px-10">
        <h3 className="text-4xl font-bold text-center">How It Works</h3>
        <p className="text-lg text-gray-700 text-center md:mb-10">Our comprehensive 5-step process ensures your move is handled with professional care <br /> and attention to every detail, from initial planning to settling into your new space.</p>
        <div className="flex gap-3 flex-wrap justify-center px-3 md:px-40">
          {STEPS.map(s => (
            <HowItWorkCard key={s.id} step={s} />
          ))}
        </div>

        <div className="w-full bg-blue-700 text-white flex flex-col items-center gap-3 md:gap-6 p-3 md:p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold">Ready to Experience Our Process?</h3>
          <p>Our proven 5-step method has successfully moved over 15,000 families and businesses. <br /> Let us make your next move the smoothest one yet.</p>
          <div className="flex gap-3 justify-center">
            <Button variant={"secondary"} size={"lg"}>Get Your Free Quote</Button>
            <Button variant={"secondary"} size={"lg"}>Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="flex flex-col gap-10 items-center pb-36 pt-16 px-2 md:px-10">
        <h3 className="text-4xl font-bold text-center">Our Services</h3>
        <p className="text-lg text-gray-700 text-center md:mb-10">Comprehensive moving solutions tailored to your specific needs</p>

        <div className="flex max-md:flex-col gap-10 justify-between items-start">
          <div className="w-full md:w-2/4 flex flex-col items-center justify-center gap-10 max-md:order-2">
            <div className="w-full flex flex-col items-stretch gap-6">
              {OUR_SERVICES.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div >
          </div>
          <div className="w-full md:w-[45%] h-full max-md:order-1">
            <img className=" border-2 border-gray-100 rounded-2xl " src={"/our-services.jpg"} />
          </div>
        </div>
      </section >

      {/* What Our Customers Say */}
      <section className="flex flex-col items-center justify-center gap-10 pb-36 px-2 md:px-10">
        <h3 className="text-4xl font-bold text-center">What Our Customers Say</h3>
        <p className="text-lg text-gray-700 text-center md:mb-10">Real experiences from satisfied customers who trusted us with their moves</p>

        <div className="w-full flex flex-col md:flex-row gap-5 justify-center">

          <div className="shadow-xl p-4 md:p-8 rounded-2xl flex flex-col items-start gap-5 w-full md:w-[30%]">
            <div className="flex gap-1">
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
            </div>
            <p className="italic gray-700">"Metro Moving made our cross-country move seamless. The team was professional, efficient, and took great care of our belongings. Highly recommended!"</p>
            <div className="flex gap-3 items-center">
              <div className="bg-blue-300 rounded-full px-5 py-3 font-bold" >
                S
              </div>
              <div>
                <div className="text-lg font-semibold text-black">Sarah Johnson (Ontario, Toronto)</div>
                <div className="text-gray-700">Residential Customer</div>
              </div>
            </div>
          </div>

          <div className="shadow-xl p-4 md:p-8 rounded-2xl flex flex-col items-start gap-5 w-full md:w-[30%]">
            <div className="flex gap-1">
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
            </div>
            <p className="italic gray-700">"Stored our furniture for 3 months during our move from Vancouver to Dallas. Everything was in perfect condition and the storage facility was incredibly secure!"</p>
            <div className="flex gap-3 items-center">
              <div className="bg-blue-300 rounded-full px-5 py-3 font-bold" >
                J
              </div>
              <div>
                <div className="text-lg font-semibold text-black">Jennifer Martinez (Alberta, Calgary)</div>
                <div className="text-gray-700">Storage Customer</div>
              </div>
            </div>
          </div>

          <div className="shadow-xl p-4 md:p-8 rounded-2xl flex flex-col items-start gap-5 w-full md:w-[30%]">
            <div className="flex gap-1">
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
              <StarIcon className="fill-yellow-400 text-yellow-400" size={"16"} />
            </div>
            <p className="italic gray-700">"Excellent service for our office relocation. They completed the move over the weekend with zero disruption to our business operations. Outstanding work!"</p>
            <div className="flex gap-3 items-center">
              <div className="bg-blue-300 rounded-full px-4 py-3 font-bold" >
                M
              </div>
              <div>
                <div className="text-lg font-semibold text-black">Michael Chen (Alberta, Calgary)</div>
                <div className="text-gray-700">Business Owner</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-blue-700 flex flex-col items-center justify-center gap-5 py-36 px-2 md:px-10 text-white">
        <h3 className="text-4xl font-bold text-center">Why Choose Metro Moving?</h3>
        <p className="text-lg text-gray-200 text-center md:mb-10">We're committed to providing exceptional moving services that <br className="max-md:hidden" /> exceed your expectations</p>

        <div className="md:w-2/3 flex flex-col md:flex-row gap-5 justify-center max-md:mt-10">
          {/* Licensed & Insured */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center gap-3">
            <div className="p-5 rounded-full bg-blue-800"> <ShieldIcon size={"24"} /> </div>
            <div className="text-lg font-semibold">Licensed & Insured</div>
            <div className="text-gray-200 text-center">Fully licensed and insured for your peace of mind. Your belongings are protected every step of the way.</div>
          </div>

          {/* Affordable Rates */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center gap-3">
            <div className="p-5 rounded-full bg-blue-800"> <DollarSignIcon size={"24"} /> </div>
            <div className="text-lg font-semibold">Affordable Rates</div>
            <div className="text-gray-200 text-center">Competitive pricing without compromising on quality. No hidden fees, just transparent and fair pricing.</div>
          </div>

          {/* Nationwide Coverage */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center gap-3">
            <div className="p-5 rounded-full bg-blue-800"> <EarthIcon size={"24"} /> </div>
            <div className="text-lg font-semibold">Nationwide Coverage</div>
            <div className="text-gray-200 text-center">Local, long-distance, and cross-country moves. We go wherever you need to go.</div>
          </div>
        </div>
      </section>

    </main >
  )
}
