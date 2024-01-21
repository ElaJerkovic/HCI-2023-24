"use client"

import Link from "next/link"
import { Edit, ShoppingBag } from "lucide-react"
//import { useShoppingCart } from "use-shopping-cart"

import {Button} from "../components/ui/button"
import { Input } from "../components/ui/input"
import MainNav from "../components/MainNav"
import Logo from "./Logo"
import { usePathname } from "next/navigation"


function SiteHeader() {
    const pathname = usePathname()

    if (pathname.startsWith('/studio')) return null
    
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
      <div className="mt-5 mb-4">
        <Link href="/">
          <Logo />
        </Link>
          
      </div>
        <form className="hidden items-center lg:inline-flex">
          <Input
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Search products..."
            className="h-9 lg:w-[300px]"
          />
        </form>
        <div className="flex items-center space-x-1">
          <Link href="/cart">
            <Button>
              <ShoppingBag className="h-5 w-5 relative bg-transparent z-20" />
              <span className="ml-2 text-sm font-bold text-zinc-800">0</span>
              {/* <span className="hidden sm:block ml-2 text-sm font-bold text-zinc-800">Cart</span> */}
            </Button>
          </Link> 
          {process.env.NODE_ENV === 'development' && (
            <Link href='/studio'>
                <Button>
                    <Edit/>
                </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default SiteHeader