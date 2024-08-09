"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";

type AnimatedIconButtonProps = ButtonProps &
  MotionProps & {
    children: React.ReactNode;
  };

const MotionButton = motion(Button);

const AnimatedIconButton: React.FC<AnimatedIconButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <MotionButton
      variant="ghost"
      size="icon"
      className={`
        rounded-full 
        opacity-90 
        bg-transparent
        hover:bg-gray-200 
        hover:text-gray-800 
        dark:hover:bg-gray-800 
        dark:hover:text-gray-200
        transition-colors
        ${className}
      `}
      whileHover={{
        scale: 1.2,
        y: -4,
        opacity: 1,
        color: "transparent",
      }}
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}>
      {children}
    </MotionButton>
  );
};

export default AnimatedIconButton;
