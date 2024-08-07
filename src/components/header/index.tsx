"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [sticky, setSticky] = useState<boolean>(false);
  const [navbarOpen, setnavbarOpen] = useState<boolean>(false);

  function handleStickyNavbar() {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  }

  function handleNavbarToggle() {
    setnavbarOpen(!navbarOpen);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <div>
      <header
        className={`top-0 left-0 flex w-full items-center bg-transparent  ${
          sticky
            ? "!fixed !z-[999] !bg-white !bg-opacity-80 shadow-sticky backdrop:blur-sm !transition dark:!bg-primary dark:bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                className={`text-[30px] font-extrabold cursor-pointer block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                }`}
                href={"/"}
              >
                Chatter
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={handleNavbarToggle}
                  id="navbar-toggler"
                  aria-label="mobile Mneu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : ""
                    }`}
                  />

                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : ""
                    }`}
                  />

                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : ""
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white border-body-color/50 py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg: !bg-transparent lg:p-0 lg:opacity-100
                  
                  ${
                    navbarOpen
                      ? "visible top-full opacity-100"
                      : "opacity-0 invisible top-[120%]"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12"></ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
