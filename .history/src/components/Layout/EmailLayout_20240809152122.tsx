"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronUp, ThumbsUp, MessageCircle, Phone } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AnimatedIconButton from "../ui/AnimatedIconButton";

const EmailLayout = () => {
  const [positionFromTop, setPositionFromTop] = useState<boolean>(false);
  const [likeButton, setLikeButton] = useState<boolean>(false);

  const handleClick = (): void => setLikeButton(!likeButton);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY >= 700) {
        setPositionFromTop(true);
      }
      if (window.scrollY <= 550) {
        setPositionFromTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 right-0 z-20 hidden md:flex flex-col items-center space-y-4 px-4 lg:px-11 py-4 bg-gray-800 bg-opacity-50">
      {positionFromTop && (
        <>
          <AnchorLink href="#home">
            <AnimatedIconButton className="bg-teal-500 hover:bg-teal-600">
              <ChevronUp className="w-5 h-5 text-white" />
            </AnimatedIconButton>
          </AnchorLink>
          <div className="w-px h-4 bg-gray-600" />
        </>
      )}
      <AnimatedIconButton onClick={handleClick} className="rounded-full">
        <ThumbsUp className={`h-5 w-5 ${likeButton ? "fill-current" : ""}`} />
      </AnimatedIconButton>
      <div className="border-t border-current w-4" />
      <Link
        href="https://t.me/oliFantazor"
        target="_blank"
        rel="noopener noreferrer">
        <AnimatedIconButton className="rounded-full">
          <MessageCircle className="h-5 w-5" />
        </AnimatedIconButton>
      </Link>
      <div className="border-t border-current w-4" />
      <Link
        href="https://wa.me/33769654361?message=urlencodedtext I have a 10k job for you."
        target="_blank"
        rel="noopener noreferrer">
        <AnimatedIconButton className="rounded-full">
          <Phone className="h-5 w-5" />
        </AnimatedIconButton>
      </Link>
      <div className="border-t border-current w-4" />
      <Link
        href="mailto:idevandyou@gmail.com"
        style={{
          writingMode: "vertical-lr",
          marginTop: "12px",
        }}>
        <AnimatedIconButton className="rounded-full">@email</AnimatedIconButton>
      </Link>
      <div className="border-t border-current h-28" />
    </div>
  );
};

export default EmailLayout;
