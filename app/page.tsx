import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { BentoGridSecondDemo } from "@/components/BentoGridSecondDemo";
import { Timeline } from "@/components/ui/timeline";
import { TimelineDemo } from "@/components/TimelineDemo";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-visible mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full flex flex-col items-center">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />

        <BentoGridSecondDemo />

        <TimelineDemo />

        <Footer />
      </div>
    </main>
  );
}
