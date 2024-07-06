"use client"

import { useRouter } from "next/navigation"
import { Filter } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet"
import ProductFilters from "@/app/components/ProductFilters"
import { Value } from "@radix-ui/react-select"

const sortOptions = [
  { name: "Newest", value: "shop/?date=desc" },
  { name: "Price, low to high", value: "/shop?price=asc" },
  { name: "Price, high to low", value: "/shop?price=desc" },
]

function ProductSort() {
  const router = useRouter()
  return (
    <div className="flex items-center text-zinc-600 ">
      <Select onValueChange={value => router.replace(value)}> 
        <SelectTrigger className="sm:w-[180px] text-zinc-600 ">
          <SelectValue placeholder="Sort By " />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map(option => (
            <SelectItem key={option.name} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Sheet>
        <SheetContent className="w-[300px] text-zinc-800">
          <SheetHeader>
            <SheetTitle>Filter by Color</SheetTitle>
            <SheetDescription>
              Narrow your product search using the options below.
            </SheetDescription>
          </SheetHeader>
          <ProductFilters />
        </SheetContent>
        <SheetTrigger className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
          <span className="sr-only">Filters</span>
          <Filter className="h-5 w-5" aria-hidden="true" />
        </SheetTrigger>
      </Sheet>
    </div>
  )
}
export default ProductSort