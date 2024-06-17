import React from "react";
import { ArrowTriangle, SETriangle } from "./StyledIcon";
import { cn } from "@/lib/utils";
type TriangleLogoProps = { className?: string };
export const TriangleLogo = ({ className }: TriangleLogoProps) => {
  return (
    <div
      className={cn(
        "z-[-1] w-48 h-48 rounded-full bg-transparent ml-36 transform md:translate-x-[7%] md:-translate-y-[7%] lg:translate-x-[32%] lg:-translate-y-[7%]",
        className
      )}>
      <div className="flex justify-end items-start  bg-cyan-300">
        <ArrowTriangle
          className={cn(
            " w-[200px] h-[200px] absolute opacity-10 lg:opacity-6 transform origin-left rotate-90 translate-x-[31%] translate-y-[71%] lg:translate-y-[71%] lg:rotate-[-90deg]"
          )}
          //   style={{ width: '200px', height: '200px' }}
        />
        <SETriangle
          className={cn("absolute  opacity-10 lg:opacity-4 shadow-md")}
          style={{ width: "275px", height: "275px" }}
        />
      </div>
      <ArrowTriangle
        className={cn(
          "bg-red-700 w-[70px] h-[70px] absolute self-end opacity-20  lg:opacity-8 transform origin-left rotate-180 -translate-x-[13%] -translate-y-[228%] "
        )}
        // style={{ width: '70px', height: '70px' }}
      />
    </div>
  );
};
