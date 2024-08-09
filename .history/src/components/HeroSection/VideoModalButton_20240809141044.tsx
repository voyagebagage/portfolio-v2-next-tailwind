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
  isHovered: boolean;
  setIsHovered: (isHovered: boolean) => void;
};

export default function VideoModalButton({
  isHovered,
  setIsHovered,
}: VideoModalButtonProp) {
  // console.log("isHovered  " + isHovered);

  return (
    <>
      <Dialog>
        <DialogTrigger
          asChild
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <Button
            className={cn(
              " absolute top-56 transition-all duration-500 ease-in-out -z-[10] pl-10  ",
              {
                "right-[45px]": isHovered,
                "right-[230px]": !isHovered,
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
