"use client";

import { urlFor } from "@/sanity/lib/client";

import { useShoppingCart } from "use-shopping-cart";
import Button from "./Button";


export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
    return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
      className="bg-zinc-600 hover:bg-brand-pink-50 hover:text-zinc-700 text-white font-lato text: uppercase"
        >
      Add To Cart
    </Button>
  );
}