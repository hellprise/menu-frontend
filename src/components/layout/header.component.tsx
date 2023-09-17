import clsx from "clsx";
import Link from "next/link";
import React, {
  Dispatch,
  SetStateAction,
  use,
  useEffect,
  useState,
} from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { GrClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menus",
  },
  {
    name: "Recipes",
    href: "/recipes",
  },
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menus",
  },
  {
    name: "Recipes",
    href: "/recipes",
  },
];

export const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isLinkLoaded, setIsLinkLoaded] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const scrolledDown = prevScrollPos > currentScrollPos;

    if (currentScrollPos <= 250) {
      setVisible(true);
    } else {
      setVisible(scrolledDown);
    }

    setPrevScrollPos(currentScrollPos);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  setTimeout(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsLinkLoaded(true);
    } else {
      document.body.style.overflow = "auto";
      setIsLinkLoaded(false);
    }
  }, 500);

  return (
    <>
      <header
        className={clsx(
          "container fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-3 transition-transform duration-300 ease-in md:pt-10",
          {
            "translate-y-0": visible,
            "-translate-y-full": !visible,
          },
        )}
      >
        <Link href={"/"}>
          <h1
            className="bg-gradient-to-r from-black to-black/50 bg-clip-text font-climate text-xl uppercase md:text-2xl"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            Menu Planner
          </h1>
        </Link>

        <button onClick={toggleMenu}>
          <svg
            className={clsx("menu-button", {
              "menu-open": isOpen,
            })}
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <line className="line line1" x1="0" y1="13" x2="30" y2="13" />
            <line className="line line2" x1="0" y1="18" x2="30" y2="18" />
          </svg>
        </button>

        {/* <button onClick={toggleMenu}>
          {!isOpen ? (
            <>
              <svg
                className="md:hidden"
                viewBox="0 0 100 100"
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0"
                  y1="100"
                  x2="100"
                  y2="0"
                  stroke="black"
                  strokeWidth="7"
                />

                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="100"
                  stroke="black"
                  strokeWidth="7"
                />
              </svg>

              <svg
                className="md:hidden"
                viewBox="0 0 100 100"
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="100"
                  y1="30"
                  x2="0"
                  y2="30"
                  stroke="black"
                  strokeWidth="8"
                />

                <line
                  x1="0"
                  y1="70"
                  x2="100"
                  y2="70"
                  stroke="black"
                  strokeWidth="8"
                />
              </svg>
            </>
          ) : (
            <svg
              className="md:hidden"
              viewBox="0 0 100 100"
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="100"
                x2="100"
                y2="0"
                stroke="black"
                strokeWidth="7"
              />

              <line
                x1="0"
                y1="0"
                x2="100"
                y2="100"
                stroke="black"
                strokeWidth="7"
              />
            </svg>
          )}
        </button> */}

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link, index) => (
            <Link key={index} className="font-medium" href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>
      </header>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isLinkLoaded={isLinkLoaded}
      />
    </>
  );
};

const MobileMenu = ({
  isOpen,
  isLinkLoaded,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isLinkLoaded: boolean;
}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState<null | "top" | "bottom">(
    null,
  );

  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientY);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isTopSwipe = distance > minSwipeDistance;
    const isBottomSwipe = distance < -minSwipeDistance;

    if (isTopSwipe || isBottomSwipe) {
      setSwipeDirection(isTopSwipe ? "top" : "bottom");
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setSwipeDirection(null);
    }
  }, [isOpen, swipeDirection]);

  console.log("direction", swipeDirection);

  return (
    <section
      onClick={() => setIsOpen(false)}
      className={clsx(
        "absolute inset-0 top-[30px] z-40 bg-black/40 transition-all duration-300 ease-in-out",
        {
          "pointer-events-none opacity-0": !isOpen,
          "pointer-events-auto opacity-100": isOpen,
        },
      )}
    >
      <nav
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={clsx(
          "swipe-transition fixed bottom-0 left-0 right-0 z-50 flex h-full flex-wrap content-start items-center gap-x-6 gap-y-2 bg-white px-5 pb-20 pt-6 shadow-lg transition-all duration-300 ease-in md:hidden",
          {
            "opacity-100": isOpen,
            "max-h-none opacity-0": !isOpen,
            "max-h-[600px]": swipeDirection === "top",
            "max-h-[170px]":
              swipeDirection === "bottom" || swipeDirection === null,
          },
        )}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            style={{ transitionDelay: `${index * 300}ms` }}
            className={clsx(
              "flex justify-center text-lg font-medium transition-colors duration-300 ease-linear",
              {
                "text-black": isLinkLoaded,
                "text-white": !isLinkLoaded,
              },
            )}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </section>
  );
};
