import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { Heading, Slider, Wrapper } from "@/components";

const menus = [
  {
    image: "/menu-1.webp",
    title: "Diverse Recipes",
    excerpt:
      "Explore a different cuisine every week with our unique meal plans.",
  },
  {
    image: "/menu-2.webp",
    title: "Simple Instructions",
    excerpt:
      "Get step-by-step guidance so you can create culinary masterpieces in no time.",
  },
  {
    image: "/menu-3.webp",
    title: "Smart Shopping",
    excerpt:
      "Efficiently manage your grocery shopping with our pre-populated lists.",
  },
];

export default function Menus() {
  return (
    <>
      <section className="bg-secondary pb-20 pt-24">
        <div className="container grid grid-cols-menus items-center">
          <section className="h-px w-full bg-black" />
          <h3 className="text-center text-xl font-bold">Menu Masterpiece</h3>
          <section className="h-px w-full bg-black" />
        </div>

        <Wrapper className="mt-20 text-center">
          <Heading tag="h1" className="text-[70px]">
            Savor the Flavors
          </Heading>

          <span className="mb-5 mt-5 block max-w-4xl text-xl">
            Welcome to the ultimate dining experience. It’s time to dive into a
            world of mouth-watering dishes and flavors that will leave your
            taste buds begging for more.
          </span>

          <div className="flex gap-x-5">
            <button className="rounded-xl border border-black bg-transparent px-3 py-2 font-medium text-black">
              Create Menu
            </button>

            <button className="rounded-xl bg-black px-3 py-2 font-medium text-secondary">
              View Menu
            </button>
          </div>
        </Wrapper>

        <Slider />
      </section>

      <div className="bg-amber-800">
        <Wrapper className="py-10">
          <Heading tag="h3" className="mb-5">
            Your Menus
          </Heading>

          <section className="flex w-full flex-col gap-y-4">
            {menus.map((menu, index) => (
              <div
                className="flex w-full items-center justify-between rounded-xl bg-yellow-800 p-3 pr-10"
                key={index}
              >
                <div className="flex items-center gap-x-10">
                  <Image
                    className="!h-[100px] rounded-xl object-cover object-center grayscale"
                    src={menu.image}
                    width={100}
                    height={100}
                    alt={menu.title}
                  />

                  <section className="text-white">
                    <h3 className="mb-2 text-2xl font-bold">{menu.title}</h3>
                    <p className="">{menu.excerpt}</p>
                  </section>
                </div>

                <FaArrowRight className="justify-end text-2xl text-white" />
              </div>
            ))}
          </section>
        </Wrapper>
      </div>

      <section className="bg-[#F3D5B5]">
        <Wrapper className="py-10 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:gap-20">
            <Heading tag="h1" className="!text-left">
              Dishes Prepared with Love
            </Heading>

            <span className="text-lg md:text-2xl md:leading-relaxed">
              Our chef’s selection showcases exquisite dishes made with only the
              finest ingredients. Each plate is carefully crafted to deliver an
              extraordinary culinary experience that will satisfy even the most
              discerning palates.
            </span>
          </div>

          <div className="mt-20 w-full">
            <h3 className="mb-10 text-xl font-bold">Featured Ingredients</h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center justify-between text-lg md:text-xl">
                <span className="">Chicken</span>

                <b className="italic">230g</b>
              </li>

              <li className="flex items-center justify-between text-lg md:text-xl">
                <span className="">Beef</span>

                <b className="italic">230g</b>
              </li>

              <li className="flex items-center justify-between text-lg md:text-xl">
                <span className="">Chicken</span>

                <b className="italic">230g</b>
              </li>

              <li className="flex items-center justify-between text-lg md:text-xl">
                <span className="">Beef</span>

                <b className="italic">230g</b>
              </li>

              <li className="flex items-center justify-between text-lg md:text-xl">
                <span className="">Chicken</span>

                <b className="italic">230g</b>
              </li>

              <li className="flex items-center justify-between text-lg md:text-xl">
                <span className="">Beef</span>

                <b className="italic">230g</b>
              </li>
            </ul>
          </div>

          <div className="py-10 md:py-20">
            <Heading tag="h1" className="mb-10">
              Stay Hungry, Stay Updated!
            </Heading>

            <form className="mx-auto flex max-w-sm flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-xl bg-secondary px-3 py-3 text-black outline-none placeholder:text-black"
              />

              <button className="rounded-xl bg-amber-950 py-3 font-medium text-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
