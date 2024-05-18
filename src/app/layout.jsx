"use client";
import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/server/lib/providers/Providers";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import Auth from "./(app)/_components/navigation/auth";
import NoAuth from "./(app)/_components/navigation/noauth";
import { IconLayoutDashboard } from "@tabler/icons-react";
import { IconBriefcase } from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";
import ComponentBackground from "./component-background";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const token = Cookies.get("token");

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {" "}
          {token ? (
            <Suspense fallback={<p>Loading...</p>}>
              <Auth />
            </Suspense>
          ) : (
            <Suspense fallback={<p>Loading...</p>}>
              <NoAuth />
            </Suspense>
          )}
          <section className="md:hidden block bg-white fixed z-10 bottom-0 w-full shadow-lg drop-shadow-lg py-4 px-8">
            <div className="flex flex-row justify-between items-center gap-x-0">
              <IconLayoutDashboard className="w-5 h-5" />
              <IconBriefcase className="w-5 h-5 text-[#FF7526]" />
              <IconSearch className="w-5 h-5" />
              <IconUserCircle className="w-5 h-5" />
            </div>
          </section>
          <section>
            <ComponentBackground children={children} />
          </section>
        </Providers>
      </body>
    </html>
  );
}
