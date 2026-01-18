"use client";

import { useEffect, useState } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/button";
import { cn } from "../components/lib/utils";
import { MobileNav } from "@/components/mobile-nav";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const scrolled = useScroll(10);
  const [dark, setDark] = useState(false);

  // 🔥 APPLY THEME TO HTML
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
        {
          "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow":
            scrolled,
        }
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
          {
            "md:px-2": scrolled,
          }
        )}
      >
        {/* Logo */}
        <a className="rounded-md p-2 hover:bg-accent" href="/">
          <Logo className="h-4.5" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={buttonVariants({ variant: "ghost" })}
            >
              {link.label}
            </a>
          ))}

          {/* ✅ WORKING TOGGLE */}
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-9 px-0 text-lg"
            )}
            aria-label="Toggle theme"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>

        <MobileNav />
      </nav>
    </header>
  );
}
