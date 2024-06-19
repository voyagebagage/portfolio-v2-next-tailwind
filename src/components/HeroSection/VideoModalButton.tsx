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

type VideoModalButtonProp = {
  isHovered: boolean;
};

export default function VideoModalButton({ isHovered }: VideoModalButtonProp) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className={cn(
              "absolute top-[75%] transform -translate-y-[15%] transition-all duration-500 ease-in-out -z-[10] pl-10 hover:text-[#2F373C]",
              {
                "right-[-130px]": isHovered,
                "right-[51px]": !isHovered,
              }
            )}>
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
