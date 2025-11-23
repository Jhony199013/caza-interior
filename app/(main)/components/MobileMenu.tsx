"use client";

import { useState } from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  items: NavItem[];
};

const MobileMenu = ({ items }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-[#2E2E31] px-4 py-2 text-sm font-semibold text-[#EAEAEA] transition hover:border-[#C7AFA2] hover:text-[#C7AFA2]"
        aria-label="Открыть меню"
      >
        Меню
      </button>
      {open ? (
        <div className="fixed inset-0 z-[60] bg-[rgba(14,14,15,0.95)] backdrop-blur-sm">
          <div className="flex h-full flex-col items-center justify-center gap-6 text-2xl font-semibold text-[#EAEAEA]">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-[#C7AFA2]"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full border border-[#C7AFA2] bg-[#C7AFA2] px-6 py-2 text-base text-[#0E0E0F] transition hover:bg-[#E1C9BC]"
            >
              Закрыть
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;

