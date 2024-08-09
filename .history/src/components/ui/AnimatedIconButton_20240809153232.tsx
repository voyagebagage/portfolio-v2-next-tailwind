import React from "react";
import { color, motion } from "framer-motion";
import Link from "next/link";

interface IconButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const AnimatedIconButton: React.FC<IconButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
}) => (
  <motion.button
    whileHover={{ scale: 1.2, y: -4, color: "transparent" }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className={`w-10 h-10 rounded-full flex items-center justify-center bg-transparent hover:bg-primary text-primary hover:text-primary-foreground transition-colors ${className}`}>
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
