import Hero from "@/components/hero/Hero";
import SecondSection from "@/components/secondSection/SecondSection";
import StarSVG from "@/SVGS/StarSVG";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-gradient md:min-h-[550vh] min-h-[700vh] overflow-hidden">
        <SecondSection />
      </div>
    </div>
  );
}
