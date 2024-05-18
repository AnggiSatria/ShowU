"use client";

import React from "react";

export default function ComponentBackground({ children }) {
  return (
    <section
      className={`mx-0 bg-cover bg-no-repeat bg-none md:bg-[url('/space-background.jpg')] w-[100%] h-[120%] bg-left-bottom p-5 md:p-0  top-0 left-0 bottom-0 right-0 absolute flex flex-col items-start md:items-center md:justify-center justify-start -z-10`}
    >
      {children}
    </section>
  );
}
