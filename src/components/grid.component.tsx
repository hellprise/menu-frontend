import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

import { BgElement } from "@/components";

import { Grid as GridType } from "@/types";

interface IGridProps {
  data: GridType;
  className?: string;
}

export const Grid: FC<IGridProps> = ({ data, className }) => {
  return (
    <section
      className={clsx(
        "grid w-full flex-none justify-center gap-5 grayscale md:h-[600px] md:auto-rows-fr md:grid-cols-[repeat(5,minmax(20px,1fr))] md:grid-rows-[repeat(3,minmax(0,1fr))]",
        className,
      )}
    >
      <BgElement className="-bottom-44 -right-0 hidden h-[305px] rotate-[65deg] md:block lg:-right-0 lg:bottom-[77px] xl:-right-5 min-[1512px]:-right-36" />
      <BgElement className="-bottom-44 -right-0 hidden h-[305px] rotate-[115deg] md:block lg:-right-0 lg:bottom-[77px] xl:-right-5 min-[1512px]:-right-36" />

      <div className="relative z-[1] flex h-full flex-col items-start justify-end gap-y-10 rounded-bl-[60px] rounded-br-[60px] rounded-tl-[60px] bg-orange px-6 py-8 md:col-[auto_/_span_3] md:row-[auto_/_span_2] md:p-14">
        <svg className=" h-px w-full md:h-auto">
          <line x1="0" y1="0" x2="100" y2="0" stroke="black" strokeWidth="1" />
        </svg>

        <span className="text-right text-black md:text-xl md:leading-[1.4em]">
          {data.Text}
        </span>
      </div>

      <div className="relative z-[1] h-80 overflow-hidden rounded-bl-[200px] rounded-tr-[200px] md:col-[auto_/_span_2] md:row-[auto_/_span_2] md:h-auto">
        <section className="absolute inset-0">
          <div className="contents">
            <Image
              className="h-full w-full object-cover object-center"
              src={data.images.data[0].attributes.url}
              fill
              alt="the first grid image"
            />
          </div>
        </section>
      </div>

      <div className="relative h-80 overflow-hidden rounded-br-[200px] rounded-tl-[200px] rounded-tr-[200px] md:col-[auto_/_span_2] md:h-full">
        <section className="absolute inset-0">
          <div className="contents">
            <Image
              className="h-full w-full object-cover object-center"
              src={data.images.data[1].attributes.url}
              fill
              alt="the first grid image"
            />
          </div>
        </section>
      </div>

      <div className="relative z-[1] flex h-full w-full items-center justify-center rounded-[200px] bg-orange p-5 md:col-[auto_/_span_3]">
        <section className="relative aspect-[1_/_1] h-20 w-20">
          <div
            className="h-full w-full bg-black"
            style={{ clipPath: "url(#curve-pBaYbXGyr-88sn5i)" }}
          >
            <svg className="w-full">
              <clipPath
                id="curve-pBaYbXGyr-88sn5i"
                clipPathUnits="objectBoundingBox"
                transform="scale(0.005)"
              >
                <path d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z"></path>
              </clipPath>
            </svg>
          </div>
        </section>
      </div>
    </section>
  );
};
