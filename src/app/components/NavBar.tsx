"use client";
import React, { useState } from "react";
import Button from "./Button";
import { IoClose, IoMenu } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
interface navItemProps {
  name: string;
  href: string;
}
const navItems: navItemProps[] = [
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Use Cases",
    href: "/usecases",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About Us",
    href: "/aboutus",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <section
        className={twMerge(
          "h-16 w-full border-b border-b-white/10 bg-transparent backdrop-blur-md fixed top-0 left-0 z-50 flex justify-center",
          isOpen && "border-none"
        )}
      >
        <div className="flex items-center justify-between max-w-screen-lg w-full px-8 md:px-4 mx-auto">
          <div className="flex gap-3 items-center">
            <div className="border-4 size-5 border-main-0 rounded-full" />
            <div className="font-semibold text-lg">Overll</div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
          {/* Desktop */}
          <nav className="hidden md:flex gap-5 items-center text-white/50 text-sm font-normal">
            {navItems.map((item, i) => (
              <a key={i} className="hover:text-white/100" href={item.href}>
                {item.name}
              </a>
            ))}
            <Button bgColor="primary">Get Started</Button>
          </nav>
        </div>
      </section>

      {/* Mobile */}
      {isOpen && (
        <nav className="md:hidden fixed top-16 left-0 w-full bg-tranparent border-b border-b-white/20 backdrop-blur-md flex flex-col gap-4 py-4 text-center z-50">
          {navItems.map((item, i) => (
            <a
              key={i}
              className="text-white/70 hover:text-white text-lg py-2"
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button bgColor="primary" className="mx-auto">
            Get Started
          </Button>
        </nav>
      )}

      {/* To avoid fixed navbar */}
      {/* <div className="mt-14"></div> */}
    </div>
  );
};

export default NavBar;
