import { Link } from "@tanstack/react-router";
import logo from "@/assets/vv-logo.png.asset.json";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <Link to="/" aria-label="V.V Builders — home" className="inline-flex items-center">
      <img
        src={logo.url}
        alt="V.V Builders logo"
        width={320}
        height={180}
        className={`${className} w-auto object-contain`}
      />
    </Link>
  );
}
