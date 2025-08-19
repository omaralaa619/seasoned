"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const FuzzyOverlay = () => {
  return (
    <div className="fixed h-full w-full z-50 pointer-events-none">
      <motion.div
        initial={{ transform: "translateX(-10%) translateY(-10%)" }}
        animate={{
          transform: "translateX(10%) translateY(10%)",
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          ease: "linear",
          repeatType: "mirror",
        }}
        // You can download these PNGs here:
        // https://www.hover.dev/black-noise.png
        // https://www.hover.dev/noise.png
        style={{
          backgroundImage: 'url("/noise3.avif")',
          // backgroundImage: 'url("/noise.png")',
        }}
        className="pointer-events-none absolute -inset-[100%]   "
      />
    </div>
  );
};

export default FuzzyOverlay;
