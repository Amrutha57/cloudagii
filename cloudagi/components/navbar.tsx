"use client";

import { useScroll } from "@/hooks/use-scroll";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/button";
import { cn } from "@/components/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuiz } from "@/context/quiz-context";

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
];

export function Header() {
  const scrolled = useScroll(10);
  const pathname = usePathname();
  const { openQuiz } = useQuiz();

  // Detect pages with white background (individual blog posts)
  const isLightPage = pathname.startsWith("/blog") && pathname !== "/blog";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-full transition-all duration-300",
        {
          "bg-dark-bg/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-blue-500/10": scrolled && !isLightPage,
          "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg": scrolled && isLightPage,
          "bg-dark-bg/50 backdrop-blur-sm border-b border-white/5": !scrolled && !isLightPage,
          "bg-white/50 backdrop-blur-sm border-b border-gray-100": !scrolled && isLightPage,
        }
      )}
    >
      <nav className="flex items-center justify-between px-6 h-16 max-w-6xl mx-auto">
        {/* Logo */}
        <Link className="flex items-center gap-2 group" href="/">
          <Logo
            variant={isLightPage ? "dark" : "light"}
            className="h-6 transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={i}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group",
                  isLightPage
                    ? (isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900")
                    : (isActive ? "text-white" : "text-gray-400 hover:text-white")
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            );
          })}

          <button
            onClick={openQuiz}
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 font-semibold rounded-full px-6 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 border-none cursor-pointer"
            )}
          >
            Book Your Session
          </button>
        </div>

        <MobileNav isDarkTheme={!isLightPage} />
      </nav>
    </header>
  );
}
