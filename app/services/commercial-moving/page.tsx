'use client'
import { Button } from "@/components/ui/button";
import { BadgeHelpIcon, CalculatorIcon, CircleCheckBigIcon, EarthIcon, LaptopIcon } from "lucide-react";
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

export default function Page() {
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
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-green-100 flex flex-col items-center gap-5 lg:text-center py-10 md:py-20 max-md:text-center max-md:px-2"
      >
        <motion.span variants={item} className={`px-3 py-1 rounded-2xl bg-green-200 text-green-800 text-sm flex items-center gap-2`}>🏢 Enterprise Business Moving</motion.span>
        <motion.p variants={item} className="text-5xl text-gray-800 font-bold">Commercial Moving Services</motion.p>
        <motion.p variants={item} className="text-lg text-gray-500 md:w-1/2">Expand your business across Canada-US borders with minimal downtime. Our commercial moving specialists understand that time is money, ensuring your office relocation is efficient, secure, and seamless.</motion.p>
        <motion.div variants={item}><Button variant={"secondary"} size={"lg"}>Get Your Free Quote</Button></motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row justify-center items-center gap-5 py-10 md:py-28 px-2 md:px-40">
        <div className="md:w-2/5 max-md:order-2">
          <motion.h3 variants={item} className="text-3xl font-bold text-gray-900 mb-4">Minimize Business Disruption</motion.h3>
          <motion.p variants={item} className="text-gray-700">When your business is ready to expand internationally, the last thing you need is extended downtime. Our commercial moving service is specifically designed for businesses relocating between Canada and the US, ensuring your operations continue with minimal interruption.</motion.p>

          <div className="p-5 flex flex-col gap-3">
            <motion.div variants={item} className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">Weekend & After-Hours Moving</div>
                <div className="text-gray-700">Complete relocations during non-business hours to maintain operations</div>
              </div>
            </motion.div>
            <motion.div variants={item} className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">IT Infrastructure Specialists</div>
                <div className="text-gray-700">Expert handling of servers, networking equipment, and sensitive technology</div>
              </div>
            </motion.div>
            <motion.div variants={item} className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">Business Compliance</div>
                <div className="text-gray-700">Full handling of commercial customs, permits, and cross-border regulations</div>
              </div>
            </motion.div>
          </div>
        </div >

        <motion.img variants={item} src={"/commercial-moving.jpg"} className="rounded-xl w-2xl max-md:order-1" />
      </motion.div >

      <div className="py-10 md:py-28 px-2 md:px-40 bg-gray-50">
        <div className="flex flex-col items-center text-center gap-5 mb-10">
          <h3 className="text-4xl text-gray-800 font-bold">Industries We Serve</h3>
          <p className="text-lg text-gray-600 md:w-1/2">From startups to enterprise corporations, we've successfully relocated businesses across all industries</p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center items-stretch">

          {/* Technology */}
          <div className="md:w-1/5 flex gap-5 justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center gap-4 p-5 rounded-2xl bg-white">
              <div className="w-fit p-4 bg-blue-100 rounded-xl"><LaptopIcon className="size-6 text-blue-800" /></div>
              <h3 className="text-lg font-semibold text-gray-800" >Technology</h3>
              <div className="text-gray-500">Software companies, data centers</div>
            </div>
          </div>

          {/* Professional Service */}
          <div className="md:w-1/5 flex gap-5 justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center gap-4 p-5 rounded-2xl bg-white">
              <div className="w-fit p-4 bg-green-100 rounded-xl"><BadgeHelpIcon className="size-6 text-green-800" /></div>
              <h3 className="text-lg font-semibold text-gray-800" >Professional Services</h3>
              <div className="text-gray-500">Law firms, consulting, accounting</div>
            </div>
          </div>

          {/* Manufacturing */}
          <div className="md:w-1/5 flex gap-5 justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center gap-4 p-5 rounded-2xl bg-white">
              <div className="w-fit p-4 bg-fuchsia-100 rounded-xl"><EarthIcon className="size-6 text-fuchsia-800" /></div>
              <h3 className="text-lg font-semibold text-gray-800" >Manufacturing</h3>
              <div className="text-gray-500">Production facilities, warehouses</div>
            </div>
          </div>

          {/* Corporate Offices */}
          <div className="md:w-1/5 flex gap-5 justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center gap-4 p-5 rounded-2xl bg-white">
              <div className="w-fit p-4 bg-yellow-100 rounded-xl"><CalculatorIcon className="size-6 text-yellow-800" /></div>
              <h3 className="text-lg font-semibold text-gray-800" >Corporate Offices</h3>
              <div className="text-gray-500">Headquarters, regional offices</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
