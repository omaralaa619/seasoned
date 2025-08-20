import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 items-center"
      >
        {images.map((image, index) => {
          return (
            <div className="pr-14 " key={index}>
              {image}
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 items-center"
      >
        {images.map((image, index) => {
          return (
            <div className="pr-14 " key={index}>
              {image}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
