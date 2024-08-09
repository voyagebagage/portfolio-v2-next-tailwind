import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface IconButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
  }

const AnimatedIconButton : React.FC<IconButtonProps> = ({ children, href, onClick, className = "" }) => (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded-full flex items-center justify-center bg-transparent hover:bg-gray-700 transition-colors ${className}`}
    >
      {href ? (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
  );

export default AnimatedIconButton;
