"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle color theme"
      }
      className={`group relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-navy transition-colors hover:text-teal dark:text-cream dark:hover:text-teal ${className}`}
    >
      {!mounted ? (
        <span className="block h-5 w-5" aria-hidden="true" />
      ) : isDark ? (
        <Sun className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
      )}
      <svg
        viewBox="0 0 24 8"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute bottom-0.5 left-1/2 h-1.5 w-5 -translate-x-1/2 text-coral"
        fill="none"
      >
        <path
          d="M1,4 C5,1 9,6 13,3 C16,1 19,5 23,3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength="1"
          className="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] duration-300 ease-out group-hover:[stroke-dashoffset:0]"
        />
      </svg>
    </button>
  );
}
