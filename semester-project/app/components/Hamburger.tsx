import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { cn } from "../lib/utils";
import { Dispatch, SetStateAction } from "react";

export type HamburgerProps = {
  open: boolean;
  clickHandler: Dispatch<SetStateAction<boolean>>;
};

const Hamburger = ({ open, clickHandler }: HamburgerProps) => {
  return (
    <div
      className="lg:hidden rounded-full hover:bg-zinc-200 text-zinc-800 hover:cursor-pointer p-2 z-50"
      onClick={() => clickHandler(!open)}
    >
      {open ? (
        <XMarkIcon
          className={cn("text-brand-zinc-800 rounded-full hover:bg-zinc-200 w-8 h-8 absolute top-2 right-2")}
        />
      ) : (
        <Bars3Icon
          className={cn("text-brand-zinc-800 w-8 h-8", { hidden: open })}
        />
      )}
    </div>
  );
};

export default Hamburger;
