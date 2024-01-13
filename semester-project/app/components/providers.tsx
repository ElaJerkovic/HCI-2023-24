"use client"

import { CartProvider } from "use-shopping-cart"

import { Toaster } from "../components/ui/toaster"
import { TailwindIndicator } from "../components/tailwind-indicator"
import { ThemeProvider } from "../components/theme-provider"

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