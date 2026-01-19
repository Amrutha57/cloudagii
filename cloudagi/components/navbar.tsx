"use client";

import { useScroll } from "@/hooks/use-scroll";
import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/button";
import { cn } from "@/components/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import Link from "next/link";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out bg-dark-bg/80 backdrop-blur-sm",
        {
          "border-dark-border bg-dark-bg/95 backdrop-blur-md md:top-2 md:max-w-3xl md:shadow-glow-blue":
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
        <Link className="rounded-md p-2 hover:bg-accent" href="/">
          <Logo className="h-4.5" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={buttonVariants({ variant: "ghost" })}
            >
              {link.label}
            </Link>
          ))}

          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>

        <MobileNav />
      </nav>
    </header>
  );
}
