"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
// import * as BiIcons from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import YStack from "@/components/ui/YStack";
import XStack from "@/components/ui/XStack";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Highlight from "./ui/Highlight";
import TabContent from "./ui/TabContent";
// import { AnimationContext } from "@/app/context/ThemeProviderContext";

const WorkExperience = () => {
  //   const { arrowPointingAt, setArrowPointingAt } = useContext(AnimationContext);
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [on, setOn] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, transform: "translateY(0)" });
    } else {
      animation.start({ opacity: 0, transform: "translateY(20px)" });
    }
  }, [inView]);

  return (
    <section
      id="work"
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}>
      <MaxWidthWrapper className="shadow-xl pt-2 pb-10 mb-2">
        <XStack className="justify-center items-end">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold relative"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={animation}>
            <Highlight query={["01.", "worked ..."]}>
              01. Where I have worked ...
            </Highlight>
          </motion.h2>
        </XStack>

        <Tabs defaultValue="ninja-partner">
          <TabsList className="flex items-center  max-h-[477px]">
            <TabsTrigger value="ninja-partner" className="flex-1 flex-grow">
              Ninja Partners
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex-1 flex-grow">
              Own Projects
            </TabsTrigger>
            <TabsTrigger value="boot-camp" className="flex-1 flex-grow">
              Boot Camp
            </TabsTrigger>
          </TabsList>
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Ninja Partners */}

          <TabsContent value="ninja-partner">
            {/* <YStack> */}
            <div className="relative w-full h-48">
              <Image
                src="/ninjaGroupMod.png"
                alt="workedExperience_ninjaPartnerGroup"
                layout="fill"
                objectFit="cover"
                className="brightness-65 grayscale-60 blur-0.2 rounded-t-lg"
              />
              <XStack className="items-center gap-3">
                <div className="relative w-10 h-10 my-4 ml-2.5">
                  <Image
                    src="/ninjaLogoSquare.png"
                    alt="workedExperience_ninjaPartnerLogo"
                    layout="fill"
                    objectFit="contain"
                    className="border rounded-full"
                  />
                </div>
                <h3 className="pt-2 text-lg leading-snug tracking-wider text-shadow">
                  Full Stack Developer
                </h3>
              </XStack>
            </div>
            <div className="flex items-center w-full h-1/5">
              <h4 className="pl-6 text-md">
                Oct 2021 - Feb 2022 / Oct 2022 - Dec 2022
              </h4>
            </div>
            <div className="p-4">
              {/* <SimpleList
                myList={[
                  "Re-organising data base, back office, Airtable script(JS)",
                  "Fetch data from Reply.io/Woodpecker APIs to Airtable",
                  "Data base analysis",
                  "Gamification Dashboard to reward the team, and collect data, client, campaign. Built with Appsync GraphQL, React, and Node.js",
                ]} */}
              {/* /> */}
            </div>
            {/* </YStack> */}
          </TabsContent>
          {/* </div> */}
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Projects */}
          <TabsContent value="projects">
            <YStack className="w-full h-full items-center">
              <div className="relative w-full h-48">
                <Image
                  src={"/gh.png"}
                  alt={"workedExperience_ghGroup"}
                  layout="fill"
                  className="object-cover rounded-t-lg filter brightness-65 grayscale-60 blur-px"
                />
                <div className="absolute top-4 left-4 h-24 w-24 rounded-full border">
                  <Image
                    src={"/qr.png"}
                    alt={"workedExperience_qrLogo"}
                    layout="fill"
                    className="object-contain rounded-full"
                  />
                </div>
                <h3 className="text-lg font-bold pt-2 pl-32 text-shadow-lg">
                  Projects
                </h3>
              </div>
              <div className="w-full py-4">
                <h4 className="text-md pl-6">
                  Oct 2021 - Feb 2022 / Oct 2022 - Dec 2022
                </h4>
              </div>
              <div className="w-full h-full py-2">
                <div className="py-2">
                  {/* <SimpleList
                    myList={[
                      "Youtube View booster bot, made as a PWA",
                      "Happy cow clone, mostly the map filtering",
                    ]}
                  /> */}
                </div>
              </div>
            </YStack>
          </TabsContent>
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Bootcamp */}
          <TabsContent
            value="boot-camp"
            //   className="w-full h-full"
          >
            <TabContent
              title="Le Réacteur"
              imageSrc1="/reacteurGroup.png"
              imageAlt1="workedExperience_reacteurGroup"
              imageSrc2="/logo-le-reacteur-2.png"
              imageAlt2="workedExperience_reacteurLogo"
              date="Mar - July 2021"
              externalLink="External Link"
              listItems={[
                "Convert a design to a website or mobile app",
                "Create servers, APIs and secure data",
                "Manage complex database systems",
                "Use advanced geolocation tools",
                "Authenticate users, manage online payment",
                "Create a content upload system on a server",
                "Automate tasks (scraping with Puppeteer)",
                "Deploy the creations to a host",
              ]}
            />
          </TabsContent>
        </Tabs>
      </MaxWidthWrapper>
    </section>
  );
};

export default WorkExperience;
