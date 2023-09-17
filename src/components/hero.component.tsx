import clsx from "clsx";
import React, { FC, useEffect, useState } from "react";

interface IHeroProps {
  heading: string;
  className?: string;
}

export const Hero: FC<IHeroProps> = ({ heading, className }) => {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    setDrawn(true);
  }, []);

  return (
    <section>
      <div className={clsx("relative lg:px-14 lg:py-5", className)}>
        <h1 className="font-climate text-[44px] uppercase leading-none md:text-8xl lg:text-[126px]">
          {heading}
        </h1>

        <svg
          width="1000"
          height="185"
          className="absolute -left-[11px] -top-[9px] right-0 hidden lg:block xl:left-0"
        >
          <rect
            x="10"
            y="10"
            width="980"
            height="170"
            fill="transparent"
            stroke="black"
            strokeWidth="1"
            rx={60}
            style={{
              strokeDasharray: drawn ? 2300 : 0,
              strokeDashoffset: drawn ? 0 : 2300,
              transition: "stroke-dashoffset 2s linear",
            }}
          />
        </svg>
      </div>
    </section>
  );
};
