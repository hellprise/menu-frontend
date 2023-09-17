import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";

type headingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IHeadingProps {
  tag?: headingType;
  className?: string;
}

export const Heading: FC<PropsWithChildren<IHeadingProps>> = ({
  className,
  children,
  tag = "h1",
}) => {
  const Tag = tag;

  return (
    <Tag
      className={clsx("text-center font-climate text-gray-800", className, {
        "text-2xl md:text-5xl": tag === "h1",
        "text-2xl": tag === "h2",
        "text-xl": tag === "h3",
        "text-lg": tag === "h4",
        "text-base": tag === "h5",
        "text-sm": tag === "h6",
      })}
    >
      {children}
    </Tag>
  );
};
