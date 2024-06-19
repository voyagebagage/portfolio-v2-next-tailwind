"use client";
// import { Circle, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowTriangle, SETriangle } from "./StyledIcon";
import YStack from "./YStack";
// import { ArrowTriangle, SETriangle } from ,"../../StyledIcons";

export const TriangleLogoSmall = () => (
  <YStack className="relative items-end m-0">
    <ArrowTriangle className="absolute w-10 h-10 opacity-40 transform -translate-x-[30%] translate-y-[35%] -rotate-90" />
    <SETriangle className="w-16 h-16 opacity-10 m-0 transform translate-x-1/5 translate-y-4/5 " />
  </YStack>
);
