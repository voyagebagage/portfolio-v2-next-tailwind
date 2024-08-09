"use client";
import { useState } from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import YStack from "@/components/ui/YStack";
import XStack from "@/components/ui/XStack";
import { useItem } from "@/lib/fetchItem";
import StackCard from "./StackCard";
import { TailwindNextImage } from "../ui/TailwindNextImage";
import { TriangleLogo } from "../ui/TriangleLogo";
import VideoModalButton from "./VideoModalButton";
// import { useColor } from "@/app/customHooks/useColor";
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
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { data: item, isPending, isFetching } = useItem();
  // console.log("item color", item?.color);
  console.log("isHovered  " + isHovered);
  return (
    <MaxWidthWrapper className="flex items-center justify-center pt-[8.3vh] mt-6 bg-pink-200 bg-opacity-20">
      {/* <XStack className="w-full items-center"> */}
      <XStack
        className={cn(
          "flex justify-end bg-slate-400 bg-opacity-10 gap-44 w-11/12 mb-6",
          "flex-col md:flex-row"
        )}>
        {/* <XStack className="flex items-center justify-center bg-slate-400"> */}
        <YStack className="items-center justify-center ">
          <StackCard />
          <XStack className="mt-4 mb-2 ">
            <MotionButton
              className="flex items-center px-3 py-2 font-semibold text-white rounded"
              animate={{
                color: ["#fff", "#4ff3cc"],
                backgroundColor: [item?.color, "#565C60"],
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
          </XStack>
        </YStack>
        {/* </XStack> */}
        <XStack className="relative items-start justify-end cursor-pointer w-2/5 h-4/6 pl-2 gap-4 group">
          <TailwindNextImage
            src="/ProfilePic.png"
            alt="ProfilePic"
            priority={true}
            fill
            imageObjectFit="contain"
            // className="w-[298px] h-[298px] rounded-full flex-shrink-0 shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
            className={cn(
              "w-[298px] h-[298px] flex-shrink-0 border-[10px]",
              "rounded-full shadow-lg",
              "transition-all duration-300 ease-in-out transform",
              isHovered ? "scale-105" : "scale-100"
            )}
            sizes="(max-width: 768px) 50vw,
          (max-width: 1200px) 50vw,
          33vw"
            style={{
              border: "2px solid red",
              backgroundImage: `linear-gradient(to right, ${
                item?.color || "#60DBFA"
              }, #4ff3cc, ${item?.color || "#60DBFA"})`,

              borderColor: "modeDarkBg",
            }}
          />
          <TriangleLogo className="flex " />
          <VideoModalButton isHovered={isHovered} setIsHovered={setIsHovered} />
        </XStack>
      </XStack>
      {/* </XStack> */}
    </MaxWidthWrapper>
  );
};

export default HeroSection;
