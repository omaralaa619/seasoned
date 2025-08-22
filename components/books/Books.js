"use client";
import { useRef } from "react";
import Book from "./Book";
import { useScroll, useTransform, motion } from "framer-motion";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/VCR_OSD_MONO_1.001.ttf",
});

const Books = () => {
  const books = [
    {
      cover:
        "https://seasoned.koto.studio/wp-content/uploads/2025/01/book1-cover-comp.avif",
      back: "https://seasoned.koto.studio/wp-content/uploads/2025/01/book1-back-comp.avif",
      spineLeft:
        "https://seasoned.koto.studio/wp-content/uploads/2025/01/book1-spine-comp.avif",
      spineRight:
        "https://seasoned.koto.studio/wp-content/uploads/2025/01/book1-pages-comp.avif",

      aspectRatio: "6/8",
      depth: 10,
      height: 70,
    },

    {
      cover:
        "https://seasoned.koto.studio/wp-content/uploads/2025/01/book2-cover-comp.avif",
      back: "https://seasoned.koto.studio/wp-content/uploads/2025/01/book2-back-comp.avif",
      spineLeft:
        "https://seasoned.koto.studio/wp-content/uploads/2025/01/book2-spine-comp.avif",
      spineRight:
        "https://seasoned.koto.studio/wp-content/uploads/2025/01/book2-pages-comp.avif",
      aspectRatio: "4/4",
      depth: 15,
      height: 60,
    },
    {
      cover:
        "https://seasoned.koto.studio/wp-content/uploads/2024/10/book3-front.avif",
      back: "https://seasoned.koto.studio/wp-content/uploads/2024/10/book3-back-2.jpg",
      spineLeft:
        "https://seasoned.koto.studio/wp-content/uploads/2024/10/book3-spine-1-scaled.avif",
      spineRight:
        "https://seasoned.koto.studio/wp-content/uploads/2024/10/book3-pages.avif",
      aspectRatio: "11/14",
      depth: 15,
      height: 60,
    },
    {
      cover:
        "https://seasoned.koto.studio/wp-content/uploads/2024/10/book4-cover-2.avif",
      back: "https://seasoned.koto.studio/wp-content/uploads/2024/10/book4-back-1.avif",
      spineLeft:
        "https://seasoned.koto.studio/wp-content/uploads/2024/10/book4-spine-1.avif",
      spineRight:
        "https://seasoned.koto.studio/wp-content/uploads/2024/10/book4-pages.avif",
      aspectRatio: "6/8",
      depth: 15,
      height: 60,
    },
  ];
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-90%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    ["0", "0", "100%"]
  );
  return (
    <div className="relative h-[400vh]  " ref={targetRef}>
      <div className="sticky top-0 flex h-screen items-center  ">
        <motion.div
          className="absolute  h-full w-full flex items-center justify-center"
          style={{ opacity }}
        >
          <div className="w-full flex justify-center relative">
            <img
              src="https://seasoned.koto.studio/wp-content/themes/seasoned/assets/svg/home/still-hungry-desktop.svg"
              alt=""
              className="w-[33%]"
            />

            <button className="absolute py-4 px-8 bg-orange-600 text-white rounded-full bottom-[10%] text-2xl">
              Order more
            </button>
          </div>
        </motion.div>

        <motion.div style={{ x }} className="flex gap-[500px] relative">
          {books.map((book, index) => (
            <Book bookImages={book} key={index} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Books;
