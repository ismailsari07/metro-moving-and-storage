import { Button } from "@/components/ui/button";
import { CircleCheckBigIcon, HomeIcon, ShoppingBagIcon, StoreIcon } from "lucide-react";

export default function Services() {
  return (
    <>
      <div className="bg-[#e5e4ff] flex flex-col items-center gap-5 lg:text-center py-20">
        <span className={`px-3 py-1 rounded-2xl bg-slate-100 text-blue-800 text-sm flex items-center gap-2`}>🚚 Complete Moving & Delivery Solutions</span>
        <p className="text-5xl text-gray-800 font-bold">Our Services</p>
        <p className="text-lg text-gray-500 max-md:text-center">From cross-border delivery to full-service moving and secure storage, we provide <br className="max-md:hidden" /> comprehensive solutions for all your logistics needs.</p>
      </div>

      <div className="flex flex-col gap-5 lg:text-center py-28 max-md:px-2">
        <p className="text-4xl text-gray-800 font-bold">Moving & Storage Services</p>
        <p className="text-gray-500 mb-12">Full-service moving solutions and secure storage for homes and businesses</p>

        <div className="w-full flex flex-col md:flex-row gap-5 justify-center">

          {/* Service 1 */}
          <div className="p-4 md:p-8 border-2 border-gray-300 rounded-xl shadow-xl">
            <div className="w-fit p-4 bg-fuchsia-100 rounded-xl"><StoreIcon className="size-6 text-fuchsia-800" /></div>
            <h3 className="text-2xl font-semibold text-start" >Storage Service</h3>
            <p className="text-gray-500 mb-6">Secure, climate-controlled storage facilities on both sides</p>

            <div className="flex flex-col gap-1 mb-6">
              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-sm text-green-500 size-6" />
                <div className="text-gray-700">Climate-controlled units</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">24/7 security monitoring</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Easy access scheduling</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Flexible rental terms</div>
              </div>
            </div>

            <Button className="w-full" variant={"outline"}>Learn More</Button>
          </div>

          {/* Service 2 */}
          <div className="p-4 md:p-8 border-2 border-gray-300 rounded-xl shadow-xl">
            <div className="w-fit p-4 bg-green-100 rounded-xl"><ShoppingBagIcon className="size-6 text-green-800" /></div>
            <h3 className="text-2xl font-semibold text-start" >Commercial Moving</h3>
            <p className="text-gray-500 mb-6">Professional office and business relocations across borders</p>

            <div className="flex flex-col gap-1 mb-6">
              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-sm text-green-500 size-6" />
                <div className="text-gray-700">Minimal business downtime</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">IT equipment handling</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Weekend/evening moves</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Project management</div>
              </div>
            </div>

            <Button className="w-full" variant={"outline"}>Learn More</Button>
          </div>

          {/* Service 3 */}
          <div className="p-4 md:p-8 border-2 border-gray-300 rounded-xl shadow-xl">
            <div className="w-fit p-4 bg-blue-100 rounded-xl"><HomeIcon className="size-6 text-blue-800" /></div>
            <h3 className="text-2xl font-semibold text-start" >Residential Moving</h3>
            <p className="text-gray-500 mb-6">Full-service home moving with care and attention to detail</p>

            <div className="flex flex-col gap-1 mb-6">
              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-sm text-green-500 size-6" />
                <div className="text-gray-700">Professional packing</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Furniture protection</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Unpacking services</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Moving insurance</div>
              </div>
            </div>

            <Button className="w-full" variant={"outline"}>Learn More</Button>
          </div>

        </div>
      </div >
    </>
  )
}
