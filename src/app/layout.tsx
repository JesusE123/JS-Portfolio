import "./globals.css";
import * as React from "react";

import Providers from "./Providers";
import Themechanger from "../components/ThemeSwitcher";
import { Oxanium } from "next/font/google";

const gruppo = Oxanium({ weight: "400", subsets: ["latin-ext"] });

export const metadata = {
  icons: {
    icon: "/js.jpg",
  },
  title: "JS Portfolio",
  description: "Portfolio personal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gruppo.className}>
      <body>
        <Providers>
          <div className="overflow-x-hidden">
            <Themechanger />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
