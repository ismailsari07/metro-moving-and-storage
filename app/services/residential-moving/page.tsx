import { Button } from "@/components/ui/button";
import { BadgeHelpIcon, CalculatorIcon, CircleCheckBigIcon, EarthIcon, LaptopIcon } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="bg-blue-100 flex flex-col items-center gap-5 lg:text-center py-20">
        <span className={`px-3 py-1 rounded-2xl bg-blue-200 text-blue-800 text-sm flex items-center gap-2`}>🏠 Professional Home Moving</span>
        <p className="text-5xl text-gray-800 font-bold">Residential Moving Services</p>
        <p className="text-lg text-gray-500 md:w-1/2">Moving your home across Canada-US borders shouldn't be stressful. Our residential moving experts handle everything from packing your first dish to setting up your new home, ensuring a seamless transition for your family.</p>
        <Button variant={"secondary"} size={"lg"}>Get Your Free Quote</Button>
      </div>

      <div className="flex justify-center items-center gap-5 py-28 px-40">
        <div className="w-2/5">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Complete Home Moving Solutions</h3>
          <p className="text-gray-700">Moving your family across international borders requires expertise, care, and attention to detail. Our residential moving service is designed specifically for families relocating between Canada and the US, handling everything from immigration paperwork to setting up your new home.</p>

          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">Full-Service Packing</div>
                <div className="text-gray-700">Professional packing of all household items with premium materials</div>
              </div>
            </div>
            <div className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">Cross-Border Expertise</div>
                <div className="text-gray-700">Complete handling of customs, documentation, and border procedures</div>
              </div>
            </div>
            <div className="flex items-start gap-4 text-start">
              <CircleCheckBigIcon className="text-green-500 size-6" />
              <div>
                <div className="font-semibold">White-Glove Service</div>
                <div className="text-gray-700">Unpacking and setup services to make your new house feel like home</div>
              </div>
            </div>
          </div>
        </div>

        <img src={"/residential-moving.jpg"} className="rounded-xl w-2xl" />
      </div>

    </>
  )
}
