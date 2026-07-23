"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { navLinks } from "@/data/nav";
import { personal } from "@/data/personal";

export function Nav() {
  const [activeHref, setActiveHref] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8"
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-lg font-bold text-navy"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-sm font-bold text-white"
          >
            {personal.initials}
          </span>
          <span className="hidden sm:inline">{personal.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={activeHref === link.href ? "true" : undefined}
                className={`text-sm font-medium transition-colors hover:text-blue ${
                  activeHref === link.href ? "text-blue" : "text-charcoal/80"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={personal.resumeHref}
            download
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-navy/10 bg-cream px-6 pb-6 md:hidden"
        >
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md px-3 py-3 text-base font-medium ${
                    activeHref === link.href
                      ? "bg-navy/5 text-blue"
                      : "text-charcoal/80"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={personal.resumeHref}
            download
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>
      ) : null}
    </header>
  );
}
