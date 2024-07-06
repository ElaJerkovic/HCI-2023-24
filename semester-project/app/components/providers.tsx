"use client";
import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart"

//import { Toaster } from "./ui/toaster"
//import TailwindIndicator from "./TailwindIndicator"
import ThemeProvider from "./ThemeProviders"

interface Props {
  children: React.ReactNode
}

function Providers({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://webshop-tearringsdesigns.vercel.app/shop"
      cancelUrl="https://webshop-tearringsdesigns.vercel.app/shop"
      currency="EUR"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}

export default Providers