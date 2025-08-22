import BooksSection from "@/components/books/BooksSection";
import Hero from "@/components/hero/Hero";
import SecondSection from "@/components/secondSection/SecondSection";
import StarSVG from "@/SVGS/StarSVG";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-gradient  h-[800vh]">
        <SecondSection />
        <BooksSection />
      </div>
    </div>
  );
}
