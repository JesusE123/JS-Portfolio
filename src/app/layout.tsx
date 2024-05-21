import * as React from "react";
import "./globals.css";

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
    <html lang="es" className={`${gruppo.className} bg-[url('/bg.jpeg')] bg-cover text-white`}>
      <body>
        {children}
      </body>
    </html>
  );
}
