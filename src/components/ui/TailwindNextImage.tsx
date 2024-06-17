import * as React from "react";
import Image, { ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface TailwindNextImageProps {
  imageBorderRadius?: string;
  imageObjectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  className?: string;
}

const TailwindNextImage = ({
  src,
  alt,
  priority,
  loading,
  sizes,
  imageObjectFit,
  imageBorderRadius,
  className,
  // height,
  // width,
  ...rest
}: NextImageProps & TailwindNextImageProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)} {...rest}>
      <Image
        src={src}
        alt={alt}
        // layout="fill"
        fill
        sizes={sizes}
        priority={priority}
        loading={loading}
        style={{ objectFit: imageObjectFit, borderRadius: imageBorderRadius }}
      />
    </div>
  );
};

interface TailwindNextImage2Props {
  imageBorderRadius?: string;
  imageObjectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  width: number;
  height: number;
}
const TailwindNextImage2 = ({
  src,
  alt,
  priority,
  loading,
  sizes,
  height,
  width,
  imageObjectFit,
  imageBorderRadius,
  ...rest
}: NextImageProps & TailwindNextImage2Props) => {
  return (
    <div className="relative overflow-hidden" {...rest}>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        loading={loading}
        style={{ objectFit: imageObjectFit, borderRadius: imageBorderRadius }}
      />
    </div>
  );
};

const BoxForNextImage = ({ ...rest }) => {
  return (
    <div className="relative overflow-hidden" {...rest}>
      {rest.children}
    </div>
  );
};

export { TailwindNextImage, TailwindNextImage2, BoxForNextImage };
