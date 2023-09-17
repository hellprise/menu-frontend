import clsx from "clsx";
import React, { FC } from "react";

interface IFooterProps {
  background: string;
}

export const Footer: FC<IFooterProps> = ({ background }) => {
  return (
    <footer
      className={clsx(background, "border-t border-white p-10 text-center")}
    >
      <p className="text-lg font-medium text-white">
        © 2023 Menu Magic. All rights reserved.
      </p>
    </footer>
  );
};
