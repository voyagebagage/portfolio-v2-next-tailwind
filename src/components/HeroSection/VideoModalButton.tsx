import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Ensure you have a utility to combine class names
import Image from "next/image";
import { log } from "console";

type VideoModalButtonProp = {
  isHovered: string;
  setIsHovered: (isHovered: string) => void;
};

export default function VideoModalButton({
  isHovered,
  setIsHovered,
}: VideoModalButtonProp) {
  console.log("isHovered  " + isHovered.toLocaleUpperCase());

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            onMouseEnter={() => {
              if (isHovered === "on-image") {
                setIsHovered("on-button");
              } else {
                setIsHovered("on-button");
                // console.log("isHovered" + isHovered);
              }
            }}
            onMouseLeave={() => {
              if (isHovered !== "on-image" || "on-button") setIsHovered("off");
              // console.log("isHovered" + isHovered);
            }}
            className={cn(
              "group absolute top-[75%] transform translate-y-[270%] transition-all duration-500 ease-in-out -z-[10] pl-10 group-hover:right-[45px] right-[230px] hover:text-[#2F373C]",
              {
                "right-[45px] block":
                  isHovered !== "on-button" || "on-image&button",
                "right-[230px]": isHovered === "off",
              }
            )}
            style={{ border: "2px solid red" }}>
            introducing video
          </Button>
        </DialogTrigger>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
        <DialogContent className="fixed inset-1/4 bg-white rounded-lg p-4 shadow-lg">
          <DialogTitle>video to introduce myself</DialogTitle>
          <DialogClose asChild>
            <button className="absolute top-2 right-2">X</button>
          </DialogClose>
          <div className="w-full aspect-w-16 aspect-h-9">
            <Image
              src="/404.jpg"
              alt="404"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex justify-end mt-4">
            <button className="btn btn-blue mr-3">Next</button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
