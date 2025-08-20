import Image from "next/image";
import localFont from "next/font/local";
const furnaces = localFont({
  src: "../../public/Fraunces.ttf",
});
const SecondSection = () => {
  return (
    <div className="">
      <div className="text-center px-8 pb-12 pt-20">
        <p
          className={`font-semibold  text-5xl md:text-7xl xl:text-9xl ${furnaces.className} secondText mb-5`}
        >
          Braise <br /> your game
        </p>
        <p className="text-lg md:text-xl xl:text-3xl secondText leading-6 font-medium">
          You’ll find lots of info about getting into the industry or just
          improving your creative chops in general. There are all sorts of ways
          to cook up a career in branding. All you need are the right
          ingredients, a few key skills, and a rough idea of how they go
          together.
        </p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-[115vw] aspect-[4/5] rounded-[50%] border border-amber-950 p-[3px] flex items-center justify-center">
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
    </div>
  );
};

export default SecondSection;
