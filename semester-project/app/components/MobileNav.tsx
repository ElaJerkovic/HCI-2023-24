"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { Page } from "../components/Navbar";
import { HamburgerProps } from "../components/Hamburger";

type MobileNavProps = HamburgerProps & {
  pages: Page[];
};

const MobileNav = ({ pages, open, clickHandler }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex lg:hidden items-center justify-center p-20 w-screen absolute top-0 right-0 z-20 bg-white opacity-95",
        { hidden: !open }
      )}
      onClick={() => clickHandler(!open)}
    >
      <ul className="flex w-screen flex-col gap-8 items-center">
        {pages.map(({ href, title }) => (
          <li key={href}>
            <Link href={href}>
              <span
                className={cn(
                  "uppercase whitespace-nowrap rounded-2xl font-lato font-semibold text-base px-5 py-3 text-zinc-800 hover:bg-zinc-100",
                  {
                    "bg-zinc-200 text-brand-zinc-100 pointer-events-none":
                      pathname === href,
                  }
                )}
              >
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;