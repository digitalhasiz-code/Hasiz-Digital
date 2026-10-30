import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  height?: number;
}

export default function Logo({ variant = "dark", className = "", height = 36 }: LogoProps) {
  const isDark = variant === "dark";
  const logoSrc = isDark ? "/images/brand/logo-dark.png" : "/images/brand/logo-light.png";
  // Aspect ratio is 814 / 229 ≈ 3.55
  const width = Math.round(height * 3.55);

  return (
    <Link 
      href="/" 
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="HASIZ — Digital Engineering Studio Home"
    >
      <Image
        src={logoSrc}
        alt="HASIZ Digital Engineering Studio"
        width={width}
        height={height}
        priority
        className="h-8 sm:h-9 w-auto object-contain"
      />
    </Link>
  );
}
