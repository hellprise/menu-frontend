import clsx from "clsx";
import React, { FC } from "react";

interface IBgElementProps {
  className?: string;
  element?: "circle" | "lines";
}

export const BgElement: FC<IBgElementProps> = ({
  className,
  element = "circle",
}) => {
  switch (element) {
    case "circle":
      return (
        <div
          className={clsx(
            "absolute z-0 w-[578px] overflow-hidden rounded-[100%] border border-black",
            className,
          )}
        >
          <section
            className={clsx(
              "absolute left-0 top-0 h-full w-full after:border after:border-black after:content-['']",
            )}
          />
        </div>
      );
    case "lines":
      return (
        <section className="absolute -left-[327px] -top-[257px] z-0 aspect-[.9966329966329966_/_1] h-[488px] w-[486px] overflow-visible opacity-30">
          <div className="absolute left-0 right-0 top-[calc(49.831649831649855%_-_1px_/_2)] h-px rotate-90 overflow-hidden bg-black" />
          <div className="absolute h-px -rotate-[30deg] overflow-hidden bg-black" />
          <div className="absolute h-px -rotate-[60deg] overflow-hidden bg-black" />
          <div className="absolute h-px rotate-[30deg] overflow-hidden bg-black" />
          <div className="absolute h-px rotate-[60deg] overflow-hidden bg-black" />
        </section>
      );
  }
};
