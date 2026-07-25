"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { navLinks } from "@/data/nav";
import { personal } from "@/data/personal";
import { CTAButton } from "@/components/CTAButton";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/80 dark:border-cream/10 dark:bg-charcoal/90">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8"
      >
        <a
          href="#top"
          className="flex items-center gap-2 text-lg font-bold text-navy dark:text-cream"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-sm font-bold text-white"
          >
            {personal.initials}
          </span>
          <span className="hidden sm:inline">{personal.name}</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={activeHref === link.href ? "true" : undefined}
                className={`group relative inline-block py-1 text-sm transition-colors hover:text-navy dark:hover:text-cream ${
                  activeHref === link.href
                    ? "font-semibold text-navy dark:text-cream"
                    : "font-medium text-charcoal/80 dark:text-cream/80"
                }`}
              >
                {link.label}
                <svg
                  viewBox="0 0 60 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 h-1.5 w-full text-teal"
                  fill="none"
                >
                  <path
                    d="M2,5 C15,1 30,7 45,3 C50,2 55,4 58,3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    pathLength="1"
                    className="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] duration-300 ease-out group-hover:[stroke-dashoffset:0]"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <div className="hidden lg:block">
            <CTAButton href={personal.resumeHref} download icon={FileDown}>
              Resume
            </CTAButton>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden dark:text-cream"
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
        </div>
      </nav>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-navy/10 bg-cream px-6 pb-6 lg:hidden dark:border-cream/10 dark:bg-charcoal"
        >
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md px-3 py-3 text-base ${
                    activeHref === link.href
                      ? "bg-navy/5 font-semibold text-navy dark:bg-cream/10 dark:text-cream"
                      : "font-medium text-charcoal/80 dark:text-cream/80"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <CTAButton
              href={personal.resumeHref}
              download
              icon={FileDown}
              className="w-full"
            >
              Download Resume
            </CTAButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
