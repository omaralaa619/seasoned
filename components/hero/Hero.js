"use client";
import Image from "next/image";
import Header from "./Header";
import { useState } from "react";
import Video from "./Video";
import FuzzyOverlay from "../ui/FuzzyOverlay";
import Marquee from "../ui/marquee/Marquee";

const Hero = () => {
  const [channel, setChannel] = useState(1);
  return (
    <div className="h-[100svh] w-full  bg-slate-600 relative ">
      <div className="text-red-600 z-20">Home</div>
      <FuzzyOverlay />

      <Header channel={channel} setChannel={setChannel} />

      <div className=" hidden z-10 w-[80%] h-full left-1/2 translate-x-[-50%] md:absolute md:block">
        <Image
          src={
            "https://seasoned.koto.studio/wp-content/themes/seasoned/assets/svg/home/the-brand-creation-kitchen-desktop.svg"
          }
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute  z-10 w-[90%] h-full left-1/2 translate-x-[-50%] md:absolute md:hidden">
        <Image
          src={
            "https://seasoned.koto.studio/wp-content/themes/seasoned/assets/svg/home/the-brand-creation-kitchen-mobile.svg"
          }
          fill
          className="object-contain"
        />
      </div>

      <Video channel={channel} />
      <Marquee />
    </div>
  );
};

export default Hero;
