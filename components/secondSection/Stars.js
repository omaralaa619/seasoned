"use client";
import StarSVG from "@/SVGS/StarSVG";
import { useScroll, useTransform, motion } from "framer-motion";

const Stars = ({ parentRef }) => {
  const { scrollYProgress } = useScroll({ target: parentRef });
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "30deg"]);
  const top = useTransform(scrollYProgress, [0, 1], ["5%", "8%"]);

  const rotateBig = useTransform(scrollYProgress, [0, 1], ["0deg", "30deg"]);
  const topBig = useTransform(scrollYProgress, [0, 1], ["50%", "45%"]);
  return (
    <div>
      <motion.div
        className="absolute fill-yellow-500 w-5 h-5 z-10 right-[10%]"
        style={{ rotate, top }}
      >
        <StarSVG />
      </motion.div>
      <motion.div
        className="absolute fill-yellow-500/50 w-20 h-20 left-[0] "
        style={{ rotate: rotateBig, top: topBig }}
      >
        <StarSVG />
      </motion.div>
    </div>
  );
};
export default Stars;
