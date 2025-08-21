'use client'
import { Button } from "@/components/ui/button";
import { CircleCheckBigIcon } from "lucide-react";
import { motion } from "framer-motion"

export default function Page() {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };


  return (
    <div className="">
      <motion.div
        className="bg-blue-100 flex flex-col items-center gap-5 lg:text-center py-10 md:py-20 max-md:text-center max-md:px-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}

      >
        <motion.span variants={item} className={`px-3 py-1 rounded-2xl bg-blue-200 text-blue-800 text-sm flex items-center gap-2`}>🏠 Professional Home Moving</motion.span>
        <motion.p variants={item} className="text-5xl text-gray-800 font-bold">Residential Moving Services</motion.p>
        <motion.p variants={item} className="text-lg text-gray-500 md:w-1/2">Moving your home across Canada-US borders shouldn't be stressful. Our residential moving experts handle everything from packing your first dish to setting up your new home, ensuring a seamless transition for your family.</motion.p>
        <motion.div variants={item}><Button variant={"secondary"} size={"lg"}>Get Your Free Quote</Button></motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-5 py-10 md:py-28 px-2 md:px-40"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}

      >
        <div className="md:w-2/5 max-md:order-2">
          <motion.h3 variants={item} className="text-3xl font-bold text-gray-900 mb-4">Complete Home Moving Solutions</motion.h3>
          <motion.p variants={item} className="text-gray-700">Moving your family across international borders requires expertise, care, and attention to detail. Our residential moving service is designed specifically for families relocating between Canada and the US, handling everything from immigration paperwork to setting up your new home.</motion.p>

          <div className="p-5 flex flex-col gap-3">
            <motion.div variants={item} className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">Full-Service Packing</div>
                <div className="text-gray-700">Professional packing of all household items with premium materials</div>
              </div>
            </motion.div>
            <motion.div variants={item} className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">Cross-Border Expertise</div>
                <div className="text-gray-700">Complete handling of customs, documentation, and border procedures</div>
              </div>
            </motion.div>
            <motion.div variants={item} className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">White-Glove Service</div>
                <div className="text-gray-700">Unpacking and setup services to make your new house feel like home</div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.img variants={item} src={"/residential-moving.jpg"} className="rounded-xl w-2xl max-md:order-1" />
      </motion.div >

    </div >
  )
}
