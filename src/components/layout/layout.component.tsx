import React, { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";

import { Header, Footer } from "@/components";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useRouter();

  const footerBg = pathname === "/" ? "bg-primary" : "bg-secondary";
  return (
    <>
      <Header />
      {children}
      <Footer background={footerBg} />
    </>
  );
};
