"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function ShoppingCartModal() {
  const initialCartState = {
  cartCount: 0,
  shouldDisplayCart: false,
  cartDetails: {},
};

  const { cartCount, shouldDisplayCart, handleCartClick , clearCart, cartDetails, totalPrice, redirectToCheckout, removeItem} = useShoppingCart()
  console.log(cartCount)
  console.log("kkkkkk")

    return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1 overflow-y-auto">
              <ul className="my-6 divide-y divide-zinc-800">
                {cartCount === 0 ? (
                  <h1 className="py-6">Your Cart is Empty</h1>
                ) : (<>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt="Product image"
                          className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">${entry.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-red-500 py-2 px-2 hover:bg-zinc-100"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>                      
                  ))}
                </>
                )}
             </ul>     
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>

              <div className="mt-6">
                <Link href="/checkout">
                  <Sheet></Sheet>
                  <Button onClick={() => handleCartClick()} className="bg-zinc-600 hover:bg-brand-pink-50 hover:text-zinc-700 text-white font-lato text: uppercase">
                    Checkout
                  </Button>
                </Link>

            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button
                  onClick={() => handleCartClick()}
                  className=" font-medium text-primary hover:text-primary/80"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}