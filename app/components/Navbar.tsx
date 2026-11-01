"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "../lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-cream/95 text-ink backdrop-blur-sm"
          : "bg-gradient-to-b from-black/40 to-transparent text-white"
      }`}
    >
      <nav className="mx-auto grid h-14 max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-5 font-sans text-[11px] font-light uppercase tracking-[0.18em] md:px-8">
        <Link href="/" className="justify-self-start tracking-[0.22em]">
          {SITE.name}
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b pb-0.5 transition-opacity hover:opacity-70 ${
                    active ? "border-current" : "border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-self-end gap-5 md:col-start-3">
          <span className="hidden md:inline">
            <span className="border-b border-current">fr</span>
            <span className="opacity-60"> / en</span>
          </span>
          <button
            type="button"
            className="md:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-5 px-5 pb-8 pt-2 font-sans text-[11px] font-light uppercase tracking-[0.18em] md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
