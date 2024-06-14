"use client";
import React, { useContext, useEffect, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { items } from "./profileHeader/data";
// import { AnimationContext } from "@/app/context/ThemeProviderContext";
// import { inViewAnimation, outOfViewAnimation } from "../animations/animation";
// import { useColor } from "@/app/customHooks/useColor";
// import { cn } from "@/utils/classnames";
// import TriangleLogo from "./TriangleLogo";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";
// import StackCard from "./StackCard";
// import VideoModalButton from "./VideoModalButton";
// import { ArrowTriangle } from "../StyledIcons";

const About = () => {
  //   const index = useColor();
  const { ref, inView } = useInView({ threshold: 1 });
  //   const { arrowPointingAt, setArrowPointingAt } = useContext(AnimationContext)!;
  const [on, setOn] = useState<boolean>(false);
  const animation = useAnimation();

  //   useEffect(() => {
  //     if (inView) {
  //       animation.start(inViewAnimation);
  //     }
  //     if ((!on && arrowPointingAt === "about") || !inView) {
  //       animation.start(outOfViewAnimation);
  //     }
  //   }, [inView, animation, on, arrowPointingAt]);

  const handleMouseEnter = () => {
    setOn(true);
    // setArrowPointingAt("about");
  };

  const handleMouseLeave = () => {
    setOn(false);
    // setArrowPointingAt("");
  };

  return (
    <section
      id="about"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <MaxWidthWrapper>
        <div className="w-full pt-24 rounded-t-2xl text-center overflow-x-hidden">
          <div className="max-w-4xl mx-auto">
            <p className="text-md text-[#64ffda]">Hi, my name is</p>
            <h1
              className={cn(
                "relative text-5xl font-bold tracking-wide",
                "pl-0 md:pl-10 text-center",
                "bg-clip-text text-transparent bg-gradient-to-t from-[#64ffda] to-[#CAFFF5]"
              )}
              ref={ref}>
              Olivier Frugier.
            </h1>
            {/* {inView && arrowPointingAt === "about" && ( */}
            <motion.div animate={animation}>
              {/* <ArrowTriangle className="absolute z-10 opacity-20 w-16 h-16 self-end" /> */}
            </motion.div>
            {/* )} */}
            <h2 className="text-5xl font-bold tracking-wide pl-0 md:pl-16 brightness-75">
              <span className="text-[#64FFDA]">I do web and mobile app.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
              <div>
                <p className={cn("break-words", "text-center sm:text-right")}>
                  <span className="text-[#64FFDA]">
                    I&apos;m front end / full stack developer I started
                    programming during covid time, in Koh Phangan. I studied at
                    &apos;Le Réacteur&apos;, to have more details click on
                    stacks details, or see below.
                  </span>
                </p>
              </div>
              <div>
                <p
                  className={cn(
                    "break-words",
                    "text-justify sm:text-left",
                    "indent-10 sm:indent-0"
                  )}>
                  <span className="text-[#64FFDA]">
                    I had my first company experience at &apos;Ninja
                    partners&apos;, and participate to small projects here and
                    there. I had personal life things to deal with and know
                    I&apos;m back to work
                  </span>
                </p>
              </div>
              <div>
                <p
                  className={cn(
                    "break-words",
                    "text-justify sm:text-right",
                    "indent-10 sm:indent-0"
                  )}>
                  <span className="text-[#64FFDA] underline decoration-auto">
                    We, my wife and I, also produce music and make video clips.
                    We also had a little business designing/selling clothes. I
                    invite the youtube link
                  </span>
                </p>
              </div>
              <div>
                <p className="break-words text-center sm:text-left">
                  Before Asia, I was in the tourist industry. I was mostly
                  driving sled dogs/huskies in the north of Europe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
