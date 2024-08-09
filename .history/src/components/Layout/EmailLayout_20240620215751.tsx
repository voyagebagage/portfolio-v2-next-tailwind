"use client";
import React, { useEffect, useState } from "react";
// import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
// import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
// import { ChevronUpIcon } from "@heroicons/react/solid";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Ensure you have a utility to combine class names
import { ThumbsUp } from "lucide-react";

const EmailDisplay = () => {
  const [positionFromTop, setPositionFromTop] = useState(false);
  const [likeButton, setLikeButton] = useState(false);

  const handleClick = () => setLikeButton(!likeButton);

  useEffect(() => {
    const handleScroll = () => {
      setPositionFromTop(window.scrollY >= 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 right-0 z-20 flex flex-col items-end justify-end w-1/12 h-full p-4 lg:w-1/4 lg:p-8 bg-transparent lg:bg-gray-800">
      {positionFromTop && (
        <>
          <AnchorLink href="#home" className="mb-4">
            <Button className="flex items-center justify-center w-10 h-10 p-2 bg-teal-600 rounded-full opacity-50 hover:opacity-100">
              <ThumbsUp className="w-5 h-5" />
            </Button>
          </AnchorLink>
          <div className="w-4 border-b border-gray-500 mb-4"></div>
        </>
      )}
      <Button
        onClick={handleClick}
        className="flex items-center justify-center w-10 h-10 p-2 mb-4 bg-gray-700 rounded-full">
        {/* {likeButton ? (
          <AiTwotoneLike className="w-5 h-5" />
        ) : (
          <AiOutlineLike className="w-5 h-5" />
        )} */}
      </Button>
      <div className="w-4 border-b border-gray-500 mb-4"></div>
      <a
        href="https://t.me/oliFantazor"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4">
        <Button className="flex items-center justify-center w-10 h-10 p-2 bg-gray-700 rounded-full">
          {/* <FaTelegramPlane className="w-5 h-5" /> */}
        </Button>
      </a>
      <div className="w-4 border-b border-gray-500 mb-4"></div>
      <a
        href="https://wa.me/33769654361?message=urlencodedtext I have a 10k job for you."
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4">
        <Button className="flex items-center justify-center w-10 h-10 p-2 bg-gray-700 rounded-full">
          {/* <FaWhatsapp className="w-5 h-5" /> */}
        </Button>
      </a>
      <div className="w-4 border-b border-gray-500 mb-4"></div>
      <a href="mailto:idevandyou@gmail.com" className="mb-4">
        <p className="text-sm writing-mode-vertical-lr mt-3">@email</p>
      </a>
      <div className="h-28 border-l border-gray-500"></div>
    </div>
  );
};

export default EmailDisplay;
