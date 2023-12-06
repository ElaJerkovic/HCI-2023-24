import { cn } from "../lib/utils";

const Logo = ({ dark = false }) => (
  <div className="flex items-center justify-between max-w-min gap-1 ">
    <span
      className={cn(
        "text-brand-pink-100 z-30 font-lato font-bold text-3xl whitespace-nowrap",
        { "text-brand-pink-100": !dark, "text-brand-pink-50": dark }
        )}
    >
      T    
    </span>
    <span
      className={cn(
        "text-brand-zinc-50 z-30 font-lato font-bold text-3xl whitespace-nowrap tracking-widest",
         { "text-brand-zinc-50": !dark, "text-white": dark }
      )}
    >
    EARRINGS    
    </span>
  </div>
);

export default Logo;