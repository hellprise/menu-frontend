import React, { FC, PropsWithChildren } from "react";
import clsx from "clsx";

export const Wrapper: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return (
    <section
      className={clsx(
        "container flex flex-col items-center px-3 min-[1440px]:px-0",
        className,
      )}
    >
      {children}
    </section>
  );
};
