import LeftSVG from "@/SVGS/LeftSVG";
import Logo from "@/SVGS/Logo";
import RightSVG from "@/SVGS/RightSVG";
import Link from "next/link";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../public/VCR_OSD_MONO_1.001.ttf",
});

const Header = ({ channel, setChannel }) => {
  const handleNextChannel = () => {
    channel == 5 ? setChannel(1) : setChannel(channel + 1);
  };
  const handlePreviousChannel = () => {
    channel == 1 ? setChannel(5) : setChannel(channel - 1);
  };
  const today = new Date();
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formatted = today.toLocaleDateString("en-US", options);
  return (
    <div className="absolute top-0 w-full z-20 text-white">
      <div className=" flex justify-between py-6 px-6">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className={`${myFont.className} text-right`}>
          <p className="uppercase text-lg mb-[-2px]">{formatted}</p>
          <div className="flex items-center gap-4 uppercase text-lg ">
            <button onClick={handlePreviousChannel}>
              <LeftSVG />
            </button>
            <p>Channel 0{channel}</p>
            <button onClick={handleNextChannel}>
              <RightSVG />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
