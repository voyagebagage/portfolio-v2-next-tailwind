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
      <MaxWidthWrapper className="shadow-xl pt-2 pb-10 mt-30 mb-20 flex flex-col ">
        <XStack className="justify-center items-end">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold relative"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={animation}>
            <Highlight
              query={["01.", "worked ..."]}
              className="bg-teal-100 text-teal-900 px-2 py-1 rounded-full">
              01. Where I have worked ...
            </Highlight>
          </motion.h2>
        </XStack>

        <Tabs defaultValue="ninja-partner" className="flex justify-center">
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
            <TabContent
              title="Full Stack Developer"
              imageSrc1="/ninjaGroupMod.png"
              imageAlt1="workedExperience_ninjaPartnerGroup"
              imageSrc2="/ninjaLogoSquare.png"
              imageAlt2="workedExperience_ninjaPartnerLogo"
              date="Oct 2021 - Feb 2022 / Oct 2022 - Dec 2022"
              externalLink="External Link"
              listItems={[
                "Re-organising data base, back office, Airtable script(JS)",
                "Fetch data from Reply.io/Woodpecker APIs to Airtable",
                "Data base analysis",
                "Gamification Dashboard to reward the team, and collect data, client, campaign. Built with Appsync GraphQL, React, and Node.js",
              ]}
            />
          </TabsContent>
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Projects */}
          <TabsContent value="projects">
            <TabContent
              title="Projects"
              imageSrc1="/gh.png"
              imageAlt1="workedExperience_ghGroup"
              imageSrc2="/qr.png"
              imageAlt2="workedExperience_qrLogo"
              date="Oct 2021 - Feb 2022 / Oct 2022 - Dec 2022"
              externalLink="External Link"
              listItems={[
                "Re-organising data base, back office, Airtable script(JS)",
                "Fetch data from Reply.io/Woodpecker APIs to Airtable",
                "Data base analysis",
                "Gamification Dashboard to reward the team, and collect data, client, campaign. Built with Appsync GraphQL, React, and Node.js",
              ]}
            />
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
