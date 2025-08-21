'use client'
import { Button } from "@/components/ui/button";
import { BoxesIcon, BoxIcon, CircleCheckBigIcon, Clock5Icon, ShieldIcon } from "lucide-react";
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import Link from "next/link";


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
        className="bg-fuchsia-100 flex flex-col items-center gap-5 lg:text-center py-10 md:py-20 max-md:px-2 text-center"
      >
        <motion.span variants={item} className={`px-3 py-1 rounded-2xl bg-fuchsia-200 text-fuchsia-800 text-sm flex items-center gap-2`}>📦 Secure Storage Solutions</motion.span>
        <motion.p variants={item} className="text-5xl text-gray-800 font-bold">Storage Services</motion.p>
        <motion.p variants={item} className="text-lg text-gray-500 md:w-1/2">Whether you need temporary storage during your Canada-US move or long-term solutions for your belongings, our state-of-the-art facilities provide the security and flexibility you need.</motion.p>
        <motion.div variants={item}>
          <Link href={"/contact"}><Button variant={"secondary"}>Get Your Quote Today</Button></Link>
        </motion.div>

      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row justify-center items-center gap-5 py-10 md:py-28 px-2 md:px-40"
      >
        <div className="md:w-2/5 max-md:order-2">
          <motion.h3 variants={item} className="text-3xl font-bold text-gray-900 mb-4">Premium Storage Facilities</motion.h3>
          <motion.p variants={item} className="text-gray-700">Our storage facilities are strategically located on both sides of the Canada-US border, providing convenient access whether you're storing items temporarily during a move or need long-term storage solutions for your personal or business belongings.</motion.p>

          <div className="p-5 flex flex-col gap-3">
            <motion.div variants={item} className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">Climate-Controlled Environment</div>
                <div className="text-gray-700">Temperature and humidity controlled to protect sensitive items</div>
              </div>
            </motion.div>
            <motion.div variants={item} className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">24/7 Security Monitoring</div>
                <div className="text-gray-700">Advanced surveillance systems and on-site security personnel</div>
              </div>
            </motion.div>
            <motion.div variants={item} className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">Flexible Access</div>
                <div className="text-gray-700">Extended hours and easy access to your stored belongings</div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.img variants={item} src={"/storage-service.jpg"} className="rounded-xl w-2xl max-md:order-1" />
      </motion.div>

      <div className="py-10 md:py-28 px-2 md:px-40 bg-gray-50">
        <div className="flex flex-col items-center text-center gap-5 mb-10">
          <h3 className="text-4xl text-gray-800 font-bold">Storage Solutions</h3>
          <p className="text-lg text-gray-600 md:w-1/2">From personal belongings to business inventory, we have the right storage solution for your needs</p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">

          {/* Personal Storage */}
          <div className="md:w-1/5 flex gap-5 justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center gap-4 p-5 rounded-2xl bg-white">
              <div className="w-fit p-4 bg-blue-100 rounded-xl"><BoxIcon className="size-6 text-blue-800" /></div>
              <h3 className="text-lg font-semibold text-gray-800" >Personal Storage</h3>
              <div className="text-gray-500">For household items, seasonal belongings, and personal valuables</div>
            </div>
          </div>

          {/* Business Storage */}
          <div className="md:w-1/5 flex gap-5 justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center gap-4 p-5 rounded-2xl bg-white">
              <div className="w-fit p-4 bg-green-100 rounded-xl"><BoxesIcon className="size-6 text-green-800" /></div>
              <h3 className="text-lg font-semibold text-gray-800" >Business Storage</h3>
              <div className="text-gray-500">Commercial inventory, equipment, and document storage</div>
            </div>
          </div>

          {/* Specialty Storage */}
          <div className="md:w-1/5 flex gap-5 justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center gap-4 p-5 rounded-2xl bg-white">
              <div className="w-fit p-4 bg-fuchsia-100 rounded-xl"><ShieldIcon className="size-6 text-fuchsia-800" /></div>
              <h3 className="text-lg font-semibold text-gray-800" >Specialty Storage</h3>
              <div className="text-gray-500">Art, antiques, wine, and temperature-sensitive items</div>
            </div>
          </div>

          {/* Transit Storage */}
          <div className="md:w-1/5 flex gap-5 justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center gap-4 p-5 rounded-2xl bg-white">
              <div className="w-fit p-4 bg-yellow-100 rounded-xl"><Clock5Icon className="size-6 text-yellow-800" /></div>
              <h3 className="text-lg font-semibold text-gray-800" >Transit Storage</h3>
              <div className="text-gray-500">Short-term storage during cross-border moves</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
