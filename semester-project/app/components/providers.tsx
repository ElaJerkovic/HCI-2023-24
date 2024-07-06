"use client"

import { CartProvider } from "use-shopping-cart"

import { Toaster } from "./ui/toaster"
import TailwindIndicator from "./TailwindIndicator"
import ThemeProvider from "./ThemeProviders"

interface Props {
  children: React.ReactNode
}

function Providers({ children }: Props) {
  return <CartProvider
  currency="EUR"
  shouldPersist
  cartMode="checkout-session"
  stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
    >
      <Toaster/>
        {children}
      <TailwindIndicator/>
    </CartProvider>
}

export default Providers