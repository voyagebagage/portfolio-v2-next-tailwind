import { cn } from "@/lib/utils";
import React from "react";

interface XStackProps {
  className?: string;
  children: React.ReactNode;
}

const XStack: React.FC<XStackProps> = ({ className, children }) => {
  return <div className={cn("flex", "flex-row", className)}>{children}</div>;
};

export default XStack;
