"use client";
import { useState } from "react";

import Logo from "../components/Logo";
import MainNav from "../components/MainNav";
import Hamburger from "../components/Hamburger";
import MobileNav from "../components/MobileNav";

export type Page = {
  href: string;
  title: string;
};


const pages: Page[] = [
  { href: "/", title: "Home" },
  { href: "/shop", title: "Shop" },
  { href: "/about", title: "About" },
  { href: "/blog", title: "Blog" },
  { href: "/reviews", title: "Reviews" },
  { href: "/contact", title: "Contact" },
  { href: "/profile", title: "Profile" }
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-screen flex flex-col items-center justify-between fixed top-0 bg-white z-50">
      <div className="mt-5 mb-4"><Logo /></div>
      <div className="flex items-center justify-center w-full">
        <MainNav pages={pages} />
        <Hamburger open={open} clickHandler={setOpen} />
        <MobileNav open={open} clickHandler={setOpen} pages={pages} />
      </div>
    </div>
  );
};

export default NavBar;
/* import Link from 'next/link';

const pages = {
  Home: "/",
  Shop: "/shop",
  About: "/about",
  Blog: "/blog",
  Reviews: "/reviews",
  Contact: "/contact",
  Profile: "/profile"
};
const Navbar = () => {
  return (
    <div>
      <p className='text-zinc-700 font-lato font-bold text-center text-2xl tracking-wider mt-5 mb-4'>
        <span className=' text-brand-pink-100 tracking-wider'>T</span>EARRINGS
      </p>

      <nav className="bg-white p-4">
        <ul className="flex space-x-10 items-center">
          <li>
            <Link href="/" className="text-white hover:bg-mint-100 p-4 hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-white hover:underline">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/gifts" className="text-white hover:underline">
              Gift ideas
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/signin" className="text-white hover:underline">
              Sign In
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-20 items-center justify-center">
          {Object.entries(pages).map(([name, path]) => (
            <li key={name}>
              <Link href={path} className=" text-zinc-700 uppercase font-lato font-bold tracking-wider hover:bg-brand-pink-50">{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar; */