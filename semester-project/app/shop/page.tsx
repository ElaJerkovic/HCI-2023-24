import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { fontSans } from "@/app/lib/fonts"
import { SanityProduct } from "@/app/config/inventory"
import { siteConfig } from "@/app/config/site"
import { cn } from "@/app/lib/utils"
import ProductFilters from "@/app/components/ProductFilters"
import ProductGrid from "@/app/components/ProductGrid"
import ProductSort from "@/app/components/ProductSort"
import { seedSanityData } from "../lib/seed"
import { StringFieldProps } from "sanity"


interface Props {
  searchParams: {
    date?: string
    price?: string
    color?: string
    category?: string
    metal?: string
  }
}

 async function Page({searchParams}: Props) {
  const { date = "desc", price, color, category, metal } = searchParams
  const priceOrder = price
   ? `| order(price ${price})`
   : ""
  const dateOrder = date
   ? `| order(_createdAt ${date})`
   : ""

  const order = `${priceOrder}${dateOrder}`

  const productFilter = `_type == "product" && !(_id in path("drafts.**"))`
  const colorFilter = color ? `&& "${color}" in colors` : ""
  const metalFilter = metal ? `&& "${metal}" in metals` : ""
  const categoryFilter = category ? `&& "${category}" in categories` : ""
  const filter = `*[${productFilter}${colorFilter}${metalFilter}${categoryFilter}]`

  const products = await client.fetch<SanityProduct[]>(
    groq `${filter} ${order}{
      _id,
      _createdAt,
      name,
      sku,
      images,
      currency,
      price,
      description,
      "slug": slug.current
    }`
    )
  console.log(products)
  console.log(products.length)
  return (
    <div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-bold text-zinc-800 tracking-normal">SHOP</h1>
        <p className="mx-auto mt-4 max-w-3xl text-zinc-600 text-base">{siteConfig.description}</p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold text-zinc-800 tracking-tight sm:text-2xl">
              {products.length} result{products.length  === 1 ? "" : "s"}
            </h1>
            <ProductSort/>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className={cn("grid grid-cols-1 gap-x-8 gap-y-10 ",
             products.length > 0
              ? "lg:grid-cols-4" 
              : "lg:grid-cols-[1fr_3fr]"
              )}>
              <div className="hidden lg:block">{/* Product filters */}
                <ProductFilters/>
              </div>
              {/* Product grid */}
              <ProductGrid products={products}/>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Page;