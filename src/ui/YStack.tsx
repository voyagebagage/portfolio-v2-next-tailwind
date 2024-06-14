import { cn } from "@/lib/utils";
import React from "react";

interface YStackProps {
  className?: string;
  children: React.ReactNode;
}

const YStack: React.FC<YStackProps> = ({ className, children }) => {
  return <div className={cn("flex", "flex-col", className)}>{children}</div>;
};

export default YStack;
