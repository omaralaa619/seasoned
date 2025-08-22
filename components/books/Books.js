"use client";
import { useRef } from "react";
import Book from "./Book";
import { useScroll, useTransform, motion } from "framer-motion";

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
    },
    {
      cover:
        "https://seasoned.koto.studio/wp-content/uploads/2025/01/book2-cover-comp.avif",
      back: "https://seasoned.koto.studio/wp-content/uploads/2025/01/book2-back-comp.avif",
      spineLeft:
        "https://seasoned.koto.studio/wp-content/uploads/2025/01/book2-spine-comp.avif",
      spineRight:
        "https://seasoned.koto.studio/wp-content/uploads/2025/01/book2-pages-comp.avif",
    },
    {
      cover:
        "https://seasoned.koto.studio/wp-content/uploads/2024/10/book3-front.avif",
      back: "https://seasoned.koto.studio/wp-content/uploads/2024/10/book3-back-2.jpg",
      spineLeft:
        "https://seasoned.koto.studio/wp-content/uploads/2024/10/book3-spine-1-scaled.avif",
      spineRight:
        "https://seasoned.koto.studio/wp-content/uploads/2024/10/book3-pages.avif",
    },
    {
      cover:
        "https://seasoned.koto.studio/wp-content/uploads/2024/10/book4-cover-2.avif",
      back: "https://seasoned.koto.studio/wp-content/uploads/2024/10/book4-back-1.avif",
      spineLeft:
        "https://seasoned.koto.studio/wp-content/uploads/2024/10/book4-spine-1.avif",
      spineRight:
        "https://seasoned.koto.studio/wp-content/uploads/2024/10/book4-pages.avif",
    },
  ];
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);
  return (
    <div className="relative h-[400vh]  " ref={targetRef}>
      <div className="sticky top-0 flex h-screen items-center  translate-x-1/3">
        <motion.div style={{ x }} className="flex gap-[500px] ">
          {books.map((book, index) => (
            <Book bookImages={book} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Books;
