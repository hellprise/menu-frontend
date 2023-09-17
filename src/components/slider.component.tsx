/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const slides = [
  "slide-1.webp",
  "slide-1.webp",
  "slide-1.webp",
  "slide-1.webp",
  "slide-1.webp",
];

const DELAY = 2500;

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const timeoutRef = useRef<null | NodeJS.Timeout>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  //create function to get a random number between 40 and 9999
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
        ),
      DELAY,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="mx-auto my-0 max-w-[460px] overflow-hidden py-14">
      <section
        className="whitespace-nowrap transition-all duration-1000 ease-in-out"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <section
            className="inline-block rounded-[40px] odd:bg-black even:bg-[#a47148]"
            key={index}
          >
            <div
              className={clsx(
                "relative flex aspect-[1_/_1] h-[460px] w-[460px] flex-none flex-row flex-nowrap content-center items-center justify-center overflow-hidden p-10 will-change-transform",
                {
                  "rounded-[40px]": index === 0,
                  "rounded-bl-[40px] rounded-br-[200px] rounded-tl-[200px] rounded-tr-[40px]":
                    index === 1,
                  "rounded-bl-[200px] rounded-br-[200px] rounded-tl-[40px] rounded-tr-[200px]":
                    index === 2,
                },
              )}
            >
              <section
                className={clsx(
                  "relative aspect-[1_/_1] h-[380px] w-px flex-[1_0_0px] overflow-hidden rounded-[40px] mix-blend-luminosity grayscale will-change-transform",
                  {
                    "rounded-[40px]": index === 0,
                    "rounded-bl-[40px] rounded-br-[200px] rounded-tl-[200px] rounded-tr-[40px]":
                      index === 1,
                    "rounded-bl-[200px] rounded-br-[200px] rounded-tl-[40px] rounded-tr-[200px]":
                      index === 2,
                  },
                )}
              >
                <div className="absolute bottom-0 left-0 right-0 top-0">
                  <section className="pointer-events-none contents">
                    <img
                      className="pointer-events-none block h-full w-full select-none object-cover object-center"
                      src={`/${slide}`}
                      alt={`slide ${index + 1}`}
                    />
                  </section>
                </div>
              </section>
            </div>
          </section>
        ))}
      </section>

      <div className="text-center">
        {slides.map((_, idx) => (
          <div
            onClick={() => {
              setIndex(idx);
            }}
            key={idx}
            className={clsx(
              "mx-2 mt-4 inline-block h-5 w-5 cursor-pointer rounded-full transition-all duration-300 ease-in-out",
              {
                "bg-black": index === idx,
                "bg-gray-300": index !== idx,
              },
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};
