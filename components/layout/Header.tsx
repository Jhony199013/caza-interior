"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useState, useEffect } from "react";

import MobileMenu from "@/app/(main)/components/MobileMenu";
import logo from "@/public/Logo/logo_cz.png";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Услуги", href: "/services" },
  { label: "Этапы", href: "/steps" },
  { label: "Обо мне", href: "/about" },
  { label: "Отзывы", href: "/reviews" },
  { label: "Стоимость", href: "/pricing" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full text-[#EAEAEA] transition-all duration-300 ${
        isScrolled ? "bg-[#0E0E0F]/80 backdrop-blur-sm" : "bg-[#0E0E0F]"
      }`}
    >
      <div
        className={`relative flex h-20 w-full items-center px-4 md:px-8 ${montserrat.className}`}
      >
        <div className="flex flex-1 justify-start">
          <nav className="hidden gap-4 text-sm font-semibold tracking-wide text-[#EAEAEA] xl:flex xl:text-base xl:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#EAEAEA] transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={logo}
            alt="hot walls логотип"
            className="h-auto w-[60px]"
            priority
          />
        </div>
        <div className="flex flex-1 justify-end">
          <div className="hidden xl:flex">
            <Link
              href="/contact"
              className="rounded-full bg-[#C7AFA2] px-6 py-2 text-base font-semibold text-[#0E0E0F] transition-colors hover:bg-[#E1C9BC]"
            >
              Написать нам
            </Link>
          </div>
          <div className="xl:hidden">
            <MobileMenu items={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

