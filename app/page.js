import BooksSection from "@/components/books/BooksSection";
import Hero from "@/components/hero/Hero";
import SecondSection from "@/components/secondSection/SecondSection";
import StarSVG from "@/SVGS/StarSVG";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-gradient md:min-h-[650vh] min-h-[700vh] ">
        <SecondSection />
        <BooksSection />
      </div>
    </div>
  );
}
