import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-40 py-4">
      <Link href={"/"} className="text-2xl font-semibold">Metro Moving & Storage</Link>
      <div className="hidden md:flex gap-4 items-center">

        <Link href={"/services"}>Services</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>

      </div>
      <div className="flex gap-4 items-center">

        <Button variant={"secondary"} size={"lg"}>Call Now</Button>
        <Button size={"lg"}>Get A Quote</Button>

      </div>
    </nav>
  )
}
