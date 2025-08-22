import { motion } from "framer-motion";

const Book = ({ bookImages, index }) => {
  const { cover, back, spineLeft, spineRight, aspectRatio, depth, height } =
    bookImages;

  const start = index * 50;
  return (
    <div className="flex items-center">
      <div
        className={`book `}
        style={{ aspectRatio: aspectRatio, height: `${height}vh` }}
      >
        <motion.div
          animate={{
            rotateY: [start, start + 360], // spin around Y
          }}
          transition={{
            duration: 12, // how long for one full rotation
            repeat: Infinity, // keep looping
            ease: "linear", // smooth constant speed
          }}
          className="book-all"
        >
          <div
            className="book-cover"
            style={{ transform: `translateZ(${depth}px)` }}
          >
            <img src={cover} alt="" />
          </div>
          <div
            className="book-back bg-slate-500"
            style={{ transform: `translateZ(-${depth}px) rotateY(180deg)` }}
          >
            <img src={back} alt="" />
          </div>
          <div
            className="book-spine left bg-slate-400 "
            style={{ width: `${depth * 2}px` }}
          >
            <img
              src={spineLeft}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div
            className="book-spine right bg-slate-500"
            style={{
              transform: `translateX(calc((${height}vh * ${aspectRatio}) - ${depth}px)) rotateY(-90deg)`,
              width: `${depth * 2}px`,
            }}
          >
            <img
              src={spineRight}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Book;
