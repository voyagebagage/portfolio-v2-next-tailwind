import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface IconButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

const AnimatedIconButton: React.FC<IconButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  isActive = false,
}) => (
  <motion.button
    whileHover={{ scale: 1.2, y: -4 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className={`
      w-10 h-10 rounded-full flex items-center justify-center
      bg-transparent
      text-modeDarkText dark:text-modeDarkText
      hover:bg-modeDarkText hover:text-modeDarkBg
      dark:hover:bg-modeDarkText dark:hover:text-modeDarkBg
      transition-colors duration-200
      ${isActive ? "bg-modeDarkText text-modeDarkBg" : ""}
      ${className}
    `}>
    {href ? (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    ) : (
      children
    )}
  </motion.button>
);

export default AnimatedIconButton;
