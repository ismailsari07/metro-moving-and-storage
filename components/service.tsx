import { OurService } from "@/lib/types";
import { ArrowBigRightIcon, CircleCheckBigIcon, HomeIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ServiceCard({ service }: { service: OurService }) {
  return (
    <div key={service.id} className={`flex max-md:flex-col gap-2 md:gap-10 justify-between items-start md:items-center p-4 rounded-2xl w-full ${service.ctaClass} transition-all`}>
      <div className="bg-white p-4 md:p-8 rounded-2xl">
        <HomeIcon className={`size-6 md:size-12 ${service.iconColor}`} />
      </div>
      <div className="flex flex-col gap-3 mr-auto">
        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
        <p className="text-gray-500 text-lg">{service.description}</p>
        <div className="flex max-md:flex-col gap-2 mb-3">
          <span className={`px-3 py-1 rounded-2xl ${service.highlightBg} ${service.iconColor} text-sm flex items-center gap-2`}><CircleCheckBigIcon className="size-4" />{service.highlights[0]}</span>
          <span className={`px-3 py-1 rounded-2xl ${service.highlightBg} ${service.iconColor} text-sm flex items-center gap-2`}><CircleCheckBigIcon className="size-4" />{service.highlights[1]}</span>
          <span className={`px-3 py-1 rounded-2xl ${service.highlightBg} ${service.iconColor} text-sm flex items-center gap-2`}><CircleCheckBigIcon className="size-4" />{service.highlights[2]}</span>
        </div>
        <Link href={service.url}><Button className={`${service.buttonBg} text-white w-fit`} variant={"service"} size={"lg"}>Learn More <ArrowBigRightIcon /></Button></Link>
      </div>
    </div>

  )
}
