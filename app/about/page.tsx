'use client'
import { Button } from "@/components/ui/button";
import { CircleCheckBigIcon, Clock2Icon, EarthIcon, LocationEditIcon, PersonStandingIcon, ShieldIcon } from "lucide-react";
import { motion } from "framer-motion";
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

        className="bg-[#e5e4ff] flex flex-col items-center gap-5 lg:text-center py-20">
        <motion.span variants={item} className={`px-3 py-1 rounded-2xl bg-slate-100 text-blue-800 text-sm flex items-center gap-2`}>🍁🇺🇸 Cross-Border Moving Specialists</motion.span>
        <motion.p variants={item} className="text-5xl text-gray-800 font-bold max-md:text-center">Your Trusted Partner for <br /><span className="text-blue-900">Canada-US Moving</span></motion.p>
        <motion.p variants={item} className="md:w-1/2 text-lg text-gray-500 max-md:text-center">For over 15 years, we've been the leading interprovincial moving company, specializing in seamless relocations between Canada and the United States. We understand the complexities of cross-border moves and make them simple for you.</motion.p>
        <motion.div variants={item} className="flex justify-center items-center gap-3">
          <Button variant={"secondary"}>Get Your Quote Today</Button>
        </motion.div>
      </motion.div>

      <motion.div

        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row justify-center items-center gap-5 py-28 px-4 md:px-40">
        <div className="md:w-2/5">
          <motion.h3 variants={item} className="text-3xl font-bold text-gray-900 mb-4">Our Story</motion.h3>
          <motion.p variants={item} className="text-gray-700">Founded in 2009, Metro Moving & Storage began with a simple mission: to make cross-border moving between Canada and the United States as seamless as moving within the same city. What started as a small family business in Toronto has grown into one of Canada's most trusted interprovincial moving companies.</motion.p> <br />
          <motion.p variants={item} className="text-gray-700">We recognized early on that families and businesses needed more than just transportation—they needed a partner who understood immigration requirements, customs regulations, and the unique challenges of international relocation. Today, we've successfully completed over 12,000 cross-border moves, helping families and businesses start new chapters in their lives.</motion.p> <br />
          <motion.p variants={item} className="text-gray-700">Our expertise spans all major routes between Canadian provinces and US states, with specialized knowledge of border crossings, documentation requirements, and regulatory compliance that ensures your move is completed without delays or complications.</motion.p>
        </div>

        <motion.div variants={item} className="md:w-2xl bg-[#e5e4ff] flex flex-wrap justify-center gap-5 rounded-2xl p-5">
          <motion.div className="w-72 h-60 p-3 bg-white flex flex-col gap-3 justify-center rounded-2xl items-center text-center">
            <div className="p-5 bg-blue-100 rounded-full"><LocationEditIcon className="size-12 text-blue-600" /></div>
            <h4 className="text-xl font-semibold">Cross-Border Experties</h4>
            <p className="text-gray-700">Specialized Canada-US relocations</p>
          </motion.div>

          <motion.div variants={item} className="w-72 h-60 p-3 bg-white flex flex-col gap-3 justify-center rounded-2xl items-center text-center">
            <div className="p-5 bg-green-100 rounded-full"><ShieldIcon className="size-12 text-green-600" /></div>
            <h4 className="text-xl font-semibold">Fully Licensed</h4>
            <p className="text-gray-700">Licensed in both countries</p>
          </motion.div>

          <motion.div variants={item} className="w-72 h-60 p-3 bg-white flex flex-col gap-3 justify-center rounded-2xl items-center text-center">
            <div className="p-5 bg-slate-100 rounded-full"><PersonStandingIcon className="size-12 text-slate-600" /></div>
            <h4 className="text-xl font-semibold">Expert Team</h4>
            <p className="text-gray-700">Immigration & customs specialists</p>
          </motion.div>

          <motion.div variants={item} className="w-72 h-60 p-3 bg-white flex flex-col gap-3 justify-center rounded-2xl items-center text-center">
            <div className="p-5 bg-yellow-100 rounded-full"><Clock2Icon className="size-12 text-yellow-600" /></div>
            <h4 className="text-xl font-semibold">On-Time Promise</h4>
            <p className="text-gray-700">99.2% on-time delivery rate</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="py-28 md:px-40 bg-gray-50">
        <div className="flex flex-col items-center text-center gap-5">
          <h3 className="text-4xl text-gray-800 font-bold">Cross-Border Moving Expertise</h3>
          <p className="text-lg text-gray-600 md:w-1/2">Moving between Canada and the US involves complex regulations, documentation, and logistics. Our specialized knowledge ensures your international move is handled with precision and care.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center mt-20">
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

      </div >
    </ >
  );
}


