"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronUp, ThumbsUp, MessageCircle, Phone } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AnimatedIconButton from "../ui/AnimatedIconButton";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 right-0 z-20 hidden md:flex flex-col items-center space-y-4 px-4 lg:px-11 py-4">
      <AnimatePresence>
        {positionFromTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}>
            <AnchorLink href="#home">
              <AnimatedIconButton className="bg-teal-500 hover:bg-teal-600 text-white hover:text-white border-none">
                <ChevronUp className="w-5 h-5" />
              </AnimatedIconButton>
            </AnchorLink>
            <div className="w-4  bg-modeDarkText dark:bg-modeDarkText my-2" />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatedIconButton onClick={handleClick} isActive={likeButton}>
        <ThumbsUp className="w-5 h-5" />
      </AnimatedIconButton>
      <div className="w-4  bg-modeDarkText dark:bg-modeDarkText" />
      <AnimatedIconButton href="https://t.me/oliFantazor">
        <MessageCircle className="w-5 h-5" />
      </AnimatedIconButton>
      <div className="w-4  bg-modeDarkText dark:bg-modeDarkText" />
      <AnimatedIconButton href="https://wa.me/33769654361?message=urlencodedtext I have a 10k job for you.">
        <Phone className="w-5 h-5" />
      </AnimatedIconButton>
      <div className="w-4  bg-modeDarkText dark:bg-modeDarkText" />
      <Link href="mailto:idevandyou@gmail.com">
        <motion.span
          whileHover={{ y: -4 }}
          className="writing-vertical-lr mt-3 text-sm text-modeDarkText dark:text-modeDarkText">
          @email
        </motion.span>
      </Link>
      <div className="h-28 bg-modeDarkText dark:bg-modeDarkText" />
    </motion.div>
  );
};

export default EmailLayout;
