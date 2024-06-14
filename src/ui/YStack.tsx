import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface YStackProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const YStack: React.FC<YStackProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn("flex", "flex-col", className)} {...props}>
      {children}
    </div>
  );
};

export default YStack;
