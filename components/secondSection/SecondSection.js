import Image from "next/image";
import localFont from "next/font/local";
import StarSVG from "@/SVGS/StarSVG";
const furnaces = localFont({
  src: "../../public/Fraunces.ttf",
});
const SecondSection = () => {
  return (
    <div className="md:flex relative md:overflow-hidden md:px-36 md:py-20 gap-20 md:flex-row-reverse items-center max-w-[1700px] md:m-auto 2xl:py-40 border-4 border-white">
      <div className="text-center px-8 pb-12 pt-20 flex-1 md:text-left">
        <p
          className={`font-semibold  text-5xl md:text-7xl 2xl:text-9xl ${furnaces.className} secondText mb-5`}
        >
          Braise <br /> your game
        </p>
        <p className="text-lg md:text-xl 2xl:text-3xl secondText leading-6 font-medium md:font-normal md:leading-5">
          You’ll find lots of info about getting into the industry or just
          improving your creative chops in general. There are all sorts of ways
          to cook up a career in branding. All you need are the right
          ingredients, a few key skills, and a rough idea of how they go
          together.
        </p>
      </div>
      <div className="flex-1 scale-[1.15] aspect-[4/5] rounded-[50%] border border-amber-950 p-[3px] flex items-center justify-center md:w-full md:hidden ">
        <div className="w-full h-full rounded-[50%] border border-amber-950 p-1 flex items-center justify-center">
          <div className="w-full h-full rounded-[50%] border-2 border-amber-950 overflow-hidden relative">
            <Image
              src={
                "https://seasoned.koto.studio/wp-content/uploads/2025/01/meatballs.avif"
              }
              fill
              className="object-cover outline outline-amber-950  rounded-[50%]"
              alt="llll"
            />
          </div>
        </div>
      </div>
      <div className="hidden flex-1 aspect-[4/5] rounded-[50%]   border border-amber-950 p-[3px] md:flex items-center justify-center ">
        <div className="w-full h-full rounded-[50%] border border-amber-950 p-1 flex items-center justify-center">
          <div className="w-full h-full rounded-[50%] border-2 border-amber-950 overflow-hidden relative">
            <Image
              src={
                "https://seasoned.koto.studio/wp-content/uploads/2025/01/meatballs.avif"
              }
              fill
              className="object-cover outline outline-amber-950  rounded-[50%]"
              alt="llll"
            />
          </div>
        </div>
      </div>
      <div className="absolute fill-yellow-500  w-5 h-5  z-10 right-[10%] top-[5%]">
        <StarSVG />
      </div>
      <div className="absolute fill-yellow-300/50  w-20 h-20  z-10 left-[0] top-[50%]">
        <StarSVG />
      </div>
    </div>
  );
};

export default SecondSection;
