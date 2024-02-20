import { type FC } from "react";

import NextImage, { type ImageProps } from "next/image";

import { classNames } from "@utils/index";

const ResponsiveImage: FC<ImageProps & { imageClassName?: string }> = ({
  className,
  imageClassName,
  ...props
}) => {
  return (
    <div className={classNames("relative", className)}>
      <NextImage
        quality={100}
        {...props}
        className={classNames("object-contain", imageClassName)}
        fill
      />
    </div>
  );
};

export default ResponsiveImage;
