import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-28 py-8 px-10 text-white">
      <div className="flex items-center justify-between mb-18">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">Metro Moving & Storage</div>
          <div className="text-gray-400">Professional moving and storage services you <br /> can trust. Making your next move stress-free.</div>
          <div className="flex gap-3 justify-start items-center">
            <Button variant={"ghost"} size={"icon"} ><TwitterIcon /></Button>
            <Button variant={"ghost"} size={"icon"} ><InstagramIcon /></Button>
            <Button variant={"ghost"} size={"icon"} ><FacebookIcon /></Button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-lg font-semibold">Services</div>
          <div className="text-gray-400">Residential Moving</div>
          <div className="text-gray-400">Commercial Moving</div>
          <div className="text-gray-400">Storage Services</div>
          <div className="text-gray-400">Long Distance</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-lg font-semibold">Company</div>
          <div className="text-gray-400">About Us</div>
          <div className="text-gray-400">Contact Us</div>
          <div className="text-gray-400">Services</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-lg font-semibold">Company</div>
          <div className="text-gray-400">(555) 123 Move</div>
          <div className="text-gray-400">info@metromoving.com</div>
          <div className="text-gray-400">Location</div>
        </div>
      </div>
      <hr className="border-gray-700" />
      <h3 className="text-center text-gray-400 mt-8">© 2024 Metro Moving & Storage. All rights reserved.</h3>
    </footer>
  )
}
