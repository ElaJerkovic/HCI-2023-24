import { ReactNode, MouseEvent } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "../lib/utils";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  zinc?: boolean;
  className?: string;
  iconClassName?: string;
};

const Button = ({
  children,
  className,
  iconClassName,
  onClick,
  zinc,
}: ButtonProps) => {
  const buttonClasses = cn(
    "transition duration-300 ease-in-out",
    "group flex items-center gap-2 text-lg max-w-min whitespace-nowrap",
    "px-6 py-3 rounded-md font-lato font-medium",
    {
      "bg-zinc-600 hover:bg-brand-mint-100 hover:text-zinc-700 text-white font-lato text: uppercase":
        zinc,
    },
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span>{children}</span>{" "}
      <ChevronRightIcon
        className={cn(
          "w-3 h-3 stroke-[3] transition-transform duration-300 ease-in-out transform group-hover:translate-x-1",
          iconClassName
        )}
      />
    </button>
  );
};

export default Button;