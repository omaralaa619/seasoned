"use client";

import localFont from "next/font/local";
import MarqueeItem from "./MarqueeItem";

const furnaces = localFont({
  src: "../../public/Fraunces.ttf",
});
const luxuriousScript = localFont({
  src: "../../public/LuxuriousScript.ttf",
});

const Marquee = () => {
  const upperMarquee = [
    <p key="01" className={`${furnaces.className} text-3xl`}>
      License Free
    </p>,
    <p key="02" className={`${furnaces.className} text-3xl`}>
      Membership Free
    </p>,
    <p key="03" className={`${luxuriousScript.className}   text-5xl`}>
      Subscription Free
    </p>,
    <p key="04" className={`${furnaces.className} text-3xl`}>
      1-800 DELICIOUS
    </p>,
    <p key="05" className={`${luxuriousScript.className}  text-5xl `}>
      Follow us @ studiokoto
    </p>,
  ];
  return (
    <div className="absolute h-10   bottom-4  mx-auto text-white ">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
    </div>
  );
};

export default Marquee;
