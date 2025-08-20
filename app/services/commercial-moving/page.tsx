import { Button } from "@/components/ui/button";
import { BadgeHelpIcon, CalculatorIcon, CircleCheckBigIcon, EarthIcon, LaptopIcon } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="bg-green-100 flex flex-col items-center gap-5 lg:text-center py-20">
        <span className={`px-3 py-1 rounded-2xl bg-green-200 text-green-800 text-sm flex items-center gap-2`}>🏢 Enterprise Business Moving</span>
        <p className="text-5xl text-gray-800 font-bold">Commercial Moving Services</p>
        <p className="text-lg text-gray-500 md:w-1/2">Expand your business across Canada-US borders with minimal downtime. Our commercial moving specialists understand that time is money, ensuring your office relocation is efficient, secure, and seamless.</p>
        <Button variant={"secondary"} size={"lg"}>Get Your Free Quote</Button>
      </div>

      <div className="flex justify-center items-center gap-5 py-28 px-40">
        <div className="w-2/5">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Minimize Business Disruption</h3>
          <p className="text-gray-700">When your business is ready to expand internationally, the last thing you need is extended downtime. Our commercial moving service is specifically designed for businesses relocating between Canada and the US, ensuring your operations continue with minimal interruption.</p>

          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">Weekend & After-Hours Moving</div>
                <div className="text-gray-700">Complete relocations during non-business hours to maintain operations</div>
              </div>
            </div>
            <div className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">IT Infrastructure Specialists</div>
                <div className="text-gray-700">Expert handling of servers, networking equipment, and sensitive technology</div>
              </div>
            </div>
            <div className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">Business Compliance</div>
                <div className="text-gray-700">Full handling of commercial customs, permits, and cross-border regulations</div>
              </div>
            </div>
          </div>
        </div>

        <img src={"/commercial-moving.jpg"} className="rounded-xl w-2xl" />
      </div>

      <div className="py-28 px-40 bg-gray-50">
        <div className="flex flex-col items-center text-center gap-5 mb-10">
          <h3 className="text-4xl text-gray-800 font-bold">Industries We Serve</h3>
          <p className="text-lg text-gray-600 md:w-1/2">From startups to enterprise corporations, we've successfully relocated businesses across all industries</p>
        </div>

        <div className="flex gap-5 justify-center items-stretch">

          {/* Technology */}
          <div className="w-1/5 flex gap-5 justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center gap-4 p-5 rounded-2xl bg-white">
              <div className="w-fit p-4 bg-blue-100 rounded-xl"><LaptopIcon className="size-6 text-blue-800" /></div>
              <h3 className="text-lg font-semibold text-gray-800" >Technology</h3>
              <div className="text-gray-500">Software companies, data centers</div>
            </div>
          </div>

          {/* Professional Service */}
          <div className="w-1/5 flex gap-5 justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center gap-4 p-5 rounded-2xl bg-white">
              <div className="w-fit p-4 bg-green-100 rounded-xl"><BadgeHelpIcon className="size-6 text-green-800" /></div>
              <h3 className="text-lg font-semibold text-gray-800" >Professional Services</h3>
              <div className="text-gray-500">Law firms, consulting, accounting</div>
            </div>
          </div>

          {/* Manufacturing */}
          <div className="w-1/5 flex gap-5 justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center gap-4 p-5 rounded-2xl bg-white">
              <div className="w-fit p-4 bg-fuchsia-100 rounded-xl"><EarthIcon className="size-6 text-fuchsia-800" /></div>
              <h3 className="text-lg font-semibold text-gray-800" >Manufacturing</h3>
              <div className="text-gray-500">Production facilities, warehouses</div>
            </div>
          </div>

          {/* Corporate Offices */}
          <div className="w-1/5 flex gap-5 justify-center items-center text-center">
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
