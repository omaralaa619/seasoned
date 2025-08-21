import localFont from "next/font/local";

const furnaces = localFont({
  src: "../../public/Fraunces.ttf",
});

const BooksSection = () => {
  return (
    <div className="mt-20">
      <div className="w-[80%] m-auto">
        <img
          src="https://seasoned.koto.studio/wp-content/themes/seasoned/assets/svg/home/our-best-cookbooks-mobile.svg"
          alt=""
          className="md:hidden"
        />
        <img
          src="https://seasoned.koto.studio/wp-content/themes/seasoned/assets/svg/home/our-best-cookbooks-desktop.svg"
          alt="hidden md:block"
        />

        <p
          className={`${furnaces.className} text-center text-3xl w-[75%] m-auto font-semibold text-amber-950`}
        >
          Indulge in our delicious guides, created to help you find your feet in
          a career in branding.
        </p>
      </div>
    </div>
  );
};

export default BooksSection;
