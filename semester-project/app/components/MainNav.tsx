"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Page } from "../components/Navbar";
import { cn } from "../lib/utils";

const MainNav = ({ pages }: { pages: Page[] }) => {
  const pathname = usePathname();

  return (
    <div>
      <nav className=" hidden lg:flex items-center justify-center p-4">
        <ul className="flex gap-2">
          {pages.map(({ href, title }) => (
            <li key={href}>
              <Link href={href}>
                <span
                  className={cn(
                    "uppercase whitespace-nowrap font-lato font-bold text-base px-5 py-3 rounded-2xl text-brand-zinc-50 hover:bg-zinc-100",
                    {
                      "bg-brand-pink-50 pointer-events-none":
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
    </div>
  );
};

export default MainNav;