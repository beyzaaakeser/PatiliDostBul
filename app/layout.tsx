import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer/Footer";



export const metadata: Metadata = {
  title: "Bugün Tüylü Dostunu Bul!",
  description: "Evcil Hayvan Kurtar, Evcil Hayvan Sahiplen, Patili Dostunu Bul, Evcil Hayvan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
