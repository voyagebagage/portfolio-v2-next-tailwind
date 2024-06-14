"use client";
import { useState } from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
// import { items } from "./data";
// import { useColor } from "@/app/customHooks/useColor";
// import { cn } from "@/utils/classnames"; // Make sure to implement this utility function
// import TriangleLogo from "./TriangleLogo";
// import StackCard from "./StackCard";
// import VideoModalButton from "./VideoModalButton";

const MotionButton = motion.button;

const whileHover = {
  letsTalk: {
    scale: 1.1,
    color: ["#fff", "#bff9e8"],
    background: `linear-gradient(to left, #64FFDA, #4ff3cc)`,
    transition: {
      backgroundColor: {
        duration: 0.7,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
      color: {
        duration: 0.7,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },
  cv: {
    scale: 1.1,
  },
};

const HeroSection = () => {
  //   const index = useColor();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MaxWidthWrapper>
      {" "}
      <div className="w-full flex flex-col items-center">
        <div
          className={cn(
            "flex items-center justify-center w-11/12 mb-6",
            "flex-col md:flex-row"
          )}>
          <div className="flex flex-col items-center justify-center">
            {/* <StackCard /> */}
            <div className="flex mt-4 mb-2">
              <MotionButton
                className="flex items-center px-3 py-2 font-semibold text-white rounded"
                animate={{
                  color: ["#fff", "#4ff3cc"],
                  // backgroundColor: [items[index]?.color, "#565C60"],
                }}
                whileTap={{ scale: 0.8 }}
                whileHover={whileHover.letsTalk}
                transition={{
                  backgroundColor: {
                    duration: 2,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                  color: {
                    duration: 2,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }}>
                <NextLink
                  href="https://wa.me/33769654361?message=urlencodedtext I have a 10k job for you."
                  legacyBehavior
                  passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    Let&apos;s Talk
                  </a>
                </NextLink>
              </MotionButton>
              <MotionButton
                className="flex items-center px-3 py-2 ml-4 font-semibold text-white rounded"
                whileTap={{ scale: 0.8 }}
                whileHover={whileHover.cv}>
                <a
                  href="/CV DEV 2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  CV
                </a>
              </MotionButton>
            </div>
          </div>

          <div
            className="relative flex items-center justify-center w-2/5 pl-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Image
              src="/ProfilePic.png"
              alt="ProfilePic"
              width={300} // Specifying the width
              height={300} // Specifying the height
              className={cn(
                "rounded-full shadow-lg",
                "transition-all duration-300 ease-in-out transform",
                isHovered ? "scale-105" : "scale-100"
              )}
            />
            {/* <TriangleLogo />
          <VideoModalButton isHovered={isHovered} /> */}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
