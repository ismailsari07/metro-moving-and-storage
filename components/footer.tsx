import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-28 py-8 px-10 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-18">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold max-md:text-center">
            Metro Moving & Storage
          </div>
          <div className="text-gray-400 max-md:text-center">
            Professional moving and storage services you{" "}
            <br className="max-md:hidden" /> can trust. Making your next move
            stress-free.
          </div>
          <div className="flex gap-3 justify-center md:justify-start items-center">
            <Button variant={"ghost"} size={"icon"}>
              <TwitterIcon />
            </Button>
            <Button variant={"ghost"} size={"icon"}>
              <InstagramIcon />
            </Button>
            <Button variant={"ghost"} size={"icon"}>
              <FacebookIcon />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-md:text-center">
          <div className="text-lg font-semibold">Services</div>
          <Link href={"/services/residential-moving"} className="text-gray-400">
            Residential Moving
          </Link>
          <Link href={"/services/commercial-moving"} className="text-gray-400">
            Commercial Moving
          </Link>
          <Link href={"/services/storage-service"} className="text-gray-400">
            Storage Services
          </Link>
        </div>
        <div className="flex flex-col gap-3 max-md:text-center">
          <div className="text-lg font-semibold">Company</div>
          <Link href={"/about"} className="text-gray-400">
            About
          </Link>
          <Link href={"/contact"} className="text-gray-400">
            Contact
          </Link>
          <Link href={"/services"} className="text-gray-400">
            Services
          </Link>
        </div>
        <div className="flex flex-col gap-3 max-md:text-center">
          <div className="text-lg font-semibold">Company</div>
          <div className="text-gray-400">(555) 123 Move</div>
          <div className="text-gray-400">info@metromoving.com</div>
          <div className="text-gray-400">Mississauga, Ontario, Canada</div>
        </div>
      </div>
      <hr className="border-gray-700" />
      <h3 className="text-center text-gray-400 mt-8">
        © 2024 Metro Moving & Storage. All rights reserved.
      </h3>
    </footer>
  );
}
