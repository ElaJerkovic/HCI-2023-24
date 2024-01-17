import React from "react";
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

export default Footer;
