import type { Step } from "@/lib/types";
import { CalendarRangeIcon, CircleCheckBigIcon } from "lucide-react";

export default function HowItWorkCard({ step }: { step: Step }) {
  return (
    <div className="w-[30%] flex flex-col gap-4 justify-start items-center shadow-xl border-2 border-gray-300 rounded-2xl p-4">
      <div className="px-3 py-1 rounded-full bg-blue-600 text-white mr-auto">{step.id}</div>
      <img src={step.image} className="w-4/5 rounded-2xl" />
      <h3 className="text-2xl font-semibold">{step.title}</h3>
      <p className="text-base text-gray-700 text-center">{step.subtitle}</p>
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-4 text-start">
          <CircleCheckBigIcon className="text-green-500 size-6" />
          <div>
            <div className="font-semibold">{step.features[0].label}</div>
            <div className="text-gray-700">{step.features[0].description}</div>
          </div>
        </div>

        <div className="flex items-start gap-4 text-start">
          <CircleCheckBigIcon className="text-green-500 size-6" />
          <div>
            <div className="font-semibold">{step.features[1].label}</div>
            <div className="text-gray-700">{step.features[1].description}</div>
          </div>
        </div>

        <div className="flex items-start gap-4 text-start">
          <CircleCheckBigIcon className="text-green-500 size-6" />
          <div>
            <div className="font-semibold">{step.features[2].label}</div>
            <div className="text-gray-700">{step.features[2].description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
