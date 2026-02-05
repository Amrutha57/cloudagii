import Image from "next/image";
import { cn } from "@/components/lib/utils";

export const Logo = ({ className, variant = "light" }: { className?: string; variant?: "light" | "dark" }) => (
  <div className={cn("flex items-center gap-1.5", className)}>
    <div className="relative w-12 h-12 md:w-16 md:h-16">
      <Image
        src={variant === "light" ? "/logo.png" : "/logob.png"}
        alt="CloudAGI Dolphin Logo"
        fill
        priority
        unoptimized
        className={cn(
          "object-contain",
          variant === "light"
            ? "drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            : "drop-shadow-[0_0_8px_rgba(30,58,138,0.2)]"
        )}
      />
    </div>
    <span className="text-2xl md:text-3xl font-black tracking-tighter font-outfit heading-gradient">
      CloudAGI
    </span>
  </div>
);
