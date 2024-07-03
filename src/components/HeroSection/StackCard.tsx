import React, { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TailwindNextImage, TailwindNextImage2 } from "../ui/TailwindNextImage";
import { useItem } from "@/lib/fetchItem";
// import { useColor } from "@/app/customHooks/useColor";
// import { items } from "./data";
// import ChakraNextImage from "../../ChakraNextImage"; // Adjust the import path as necessary

const StackCard = () => {
  //   const index = useColor();
  const { data: item, isPending, isFetching } = useItem();
  // console.log("stackCard" + item?.IconName);
  const duration = 2000;
  const transition = {
    default: {
      duration: duration / 1000,
      type: "spring",
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
    boxShadow: {
      duration: (duration - 1) / 1000,
      type: "spring",
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
    scale: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      restDelta: 0.001,
    },
  };

  return (
    <div className="flex flex-col items-center justify-start w-2/5 h-96">
      <AnimatePresence>
        <motion.div
          className="w-80 h-80 rounded-full"
          layout
          // transition={transition}
        >
          <Suspense
            fallback={
              <TailwindNextImage
                src={`/${item?.IconName}`}
                alt="fallback-stack"
                className="w-[298px] h-[298px] rounded-full flex-shrink-0 shadow-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
              />
            }>
            <TailwindNextImage
              src={`/${item?.IconName}`}
              alt="stackPic"
              className="w-[298px] h-[298px] rounded-full flex-shrink-0 shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
            />
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StackCard;
