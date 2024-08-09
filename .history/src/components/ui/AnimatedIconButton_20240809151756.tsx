import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
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
