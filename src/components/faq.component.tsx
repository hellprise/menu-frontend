import React, { FC, useState } from "react";
import ReactMarkdown from "react-markdown";
import { BiSolidDownArrow } from "react-icons/bi";

import { Heading } from "@/components";

import { HeadWithList as FaqType } from "@/types";
import clsx from "clsx";

interface IFaqProps {
  data: FaqType;
}

export const Faq: FC<IFaqProps> = ({ data }) => {
  return (
    <section>
      <Heading tag="h1">{data.Heading}</Heading>

      <div className="mt-10 flex flex-col gap-7 md:mt-16">
        {data.ListItems.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

const Item = ({ heading, text, id }: FaqType["ListItems"][0]) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <button className="flex flex-col items-start" onClick={toggle} key={id}>
      <section className="flex w-full items-center justify-between">
        <h3 className="mb-2 text-left text-xl md:text-2xl">{heading}</h3>

        <BiSolidDownArrow
          className={clsx(
            "text-xl text-gray-800 transition-transform duration-700",
            {
              "rotate-180 transform": isOpen,
            },
          )}
        />
      </section>

      <ReactMarkdown
        className={clsx(
          "w-11/12 text-left text-white transition-all duration-300 md:w-auto md:text-lg xl:w-full",
          {
            "invisible h-0 opacity-0": !isOpen,
            "visible h-auto opacity-100": isOpen,
          },
        )}
      >
        {text}
      </ReactMarkdown>
    </button>
  );
};
