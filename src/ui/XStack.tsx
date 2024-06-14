import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface XStackProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const XStack: React.FC<XStackProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn("flex flex-row", className)} {...props}>
      {children}
    </div>
  );
};

export default XStack;
