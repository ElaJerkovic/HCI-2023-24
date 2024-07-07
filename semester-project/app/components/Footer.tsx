/*import React from "react";
import Logo from "./Logo";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white font-lato p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0">
          <Logo dark/> 
          <div className="mt-4">
            <h3 className="text-lg font-bold font-lato text-white mb-2">Services</h3>
            <ul className="font-lato text-white">
              <li>Web shop</li>
              <li>Custom jewelry</li>
              <li>Gift ideas</li>
              <li>Tips and tricks</li>
            </ul>
          </div>
        </div>
        <div className="mb-4 lg:mb-0">
          <h3 className="text-lg font-bold text-white font-lato mb-2">Sitemap</h3>
          <ul className="font-lato text-white ">
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>About</li>
            <li>Reviews</li>
            <li>Contact Us</li>
            <li>Profile</li>
          </ul>
        </div>
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white font-latomb-2">Contact Us</h3>
            <ul className="font-lato text-white">
              <li>Address</li>
              <li>Split, Croatia, 21000</li>
            </ul>
            <ul className="font-lato text-white">
              <li className="flex items-center">
                <Icons.phone className="w-4" /> +385 00 000 0000
              </li>
              <li className="flex items-center">
                <Icons.envelope className="w-4" /> tearrings@gmail.com
              </li>
              <li className="flex items-center my-2"><Icons.instagram className="w-6" /> username</li>
              <li className="flex items-center my-2"><Icons.facebook className="w-6" /> username</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;*/
//import Logo from "@/components/Logo";
//import Icons from "@/components/Icons";

import Icons from "./Icons";
import Logo from "./Logo";

type TitleProps = {
  children: string;
};

type ListProps = {
  title: string;
  items: string[];
};

const FooterListTitle = ({ children }: TitleProps) => (
  <div className="font-roboto-condensed font-bold text-2xl whitespace-nowrap text-brand-pink-50 mb-1 lg:mb-5">
    {children}
  </div>
);

const FooterList = ({ title, items }: ListProps) => {
  return (
    <div>
      <FooterListTitle>{title}</FooterListTitle>
      <ul className="font-roboto text-white">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => (
  <div className="bg-zinc-800 ">
    <div className="flex flex-col py-10 items-center gap-10 self-stretch md:max-lg:px-10">
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center md:items-start self-stretch">

        <div className="flex flex-wrap justify-center gap-32">
          <FooterList
            title="Services"
            items={[
              "Web shop",
              "Custom jewelry",
              "Gift ideas",
              "Tips and tricks"
            ]}
          />
          <FooterList
            title="Sitemap"
            items={[
              "Home",
              "Shop",
              "Blog",
              "About",
              "Contact Us",
            ]}
          />
          <div>
            <FooterListTitle>Contact Us</FooterListTitle>
            <ul className="font-roboto text-zinc-100 mb-4">
              <li>Adresa </li>
              <li>21000, Split, Croatia</li>
            </ul>
            <ul className="font-roboto text-zinc-100 mb-4">
              <li className="flex gap-2 items-center">
                <Icons.phone className="w-4" /> +385 000 0000
              </li>
              <li className="flex gap-2 items-center">
                <Icons.envelope2 className="w-4"/>
                tearrings@gmail.com
              </li>
            </ul>
            <div className="flex gap-2">
              <Icons.facebook className="w-6" />
              <Icons.instagram className="w-6" />
            </div>
          </div>
        </div>
      </div>
      <p className="font-roboto text-zinc-100 text-base sm:text-lg">
        Copyright @ 2023 FESB. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;