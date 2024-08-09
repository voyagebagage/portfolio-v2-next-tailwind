"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronUp, ThumbsUp, MessageCircle, Phone } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AnimatedIconButton from "../ui/AnimatedIconButton";

const SocialLinks = () => {
  const [positionFromTop, setPositionFromTop] = useState(false);
  const [likeButton, setLikeButton] = useState(false);

  const handleClick = () => setLikeButton(!likeButton);

  useEffect(() => {
    const handleScroll = () => {
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
    <div className="fixed bottom-0 right-0 z-20 hidden md:flex flex-col items-center space-y-4 px-4 lg:px-11">
      {positionFromTop && (
        <>
          <AnchorLink href="#home">
            <AnimatedIconButton
              variant="ghost"
              size="sm"
              className="bg-teal-500 text-white opacity-50 hover:opacity-100 hover:bg-teal-600">
              <ChevronUp className="h-4 w-4" />
            </AnimatedIconButton>
          </AnchorLink>
          <div className="border-t border-current w-4" />
        </>
      )}
      <AnimatedIconButton
        variant="ghost"
        size="sm"
        onClick={handleClick}
        className="rounded-full">
        <ThumbsUp className={`h-5 w-5 ${likeButton ? "fill-current" : ""}`} />
      </AnimatedIconButton>
      <div className="border-t border-current w-4" />
      <Link
        href="https://t.me/oliFantazor"
        target="_blank"
        rel="noopener noreferrer">
        <AnimatedIconButton variant="ghost" size="sm" className="rounded-full">
          <MessageCircle className="h-5 w-5" />
        </AnimatedIconButton>
      </Link>
      <div className="border-t border-current w-4" />
      <Link
        href="https://wa.me/33769654361?message=urlencodedtext I have a 10k job for you."
        target="_blank"
        rel="noopener noreferrer">
        <AnimatedIconButton variant="ghost" size="sm" className="rounded-full">
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
        <AnimatedIconButton variant="ghost" size="sm" className="rounded-full">
          @email
        </AnimatedIconButton>
      </Link>
      <div className="border-t border-current h-28" />
    </div>
  );
};

export default SocialLinks;
