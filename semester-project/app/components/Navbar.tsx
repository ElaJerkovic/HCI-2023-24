import Link from 'next/link';

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
    <nav className="bg-zinc-700 p-4">
      {/* <ul className="flex space-x-10 items-center">
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
      </ul> */}
      <ul className="flex space-x-10 items-center">
        {Object.entries(pages).map(([name, path]) => (
          <li key={name}>
            <Link href={path} className=" text-white hover:underline">{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;