import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { XCircle } from "lucide-react"
import { formatCurrencyString } from "use-shopping-cart"

import { SanityProduct } from "@/app/config/inventory"
import { shimmer, toBase64 } from "@/app/lib/image"
import { form } from "sanity/desk"
import { client } from "@/sanity/lib/client"
import { simplifiedProduct } from "../interface"

interface Props {
  products: simplifiedProduct[]
}
async function getData() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
        _id,
          price,
        name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`;

  const data = await client.fetch(query);

  return data;
}

async function ProductGrid({products}: Props) {
  const data: simplifiedProduct[] = await getData();
  
  if (products.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {data.map((product) => (
        <Link key={product._id} href={`/products/${product.slug}`} className="group text-sm">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-4 border-brand-zinc-100 bg-zinc-100 group-hover:opacity-75">
            {product.imageUrl ? (
              <Link href={`/product/${product.slug}`}>
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64, ${toBase64(shimmer(500, 500))}`}
                src={product.imageUrl}
                alt="Product image"
                className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                width={500}
                height={500}
              /></Link>
            ) : (
              <div className="h-full w-full bg-gray-300"></div>
            )}
          </div>
          <h3 className="text-base text-zinc-700 font-semibold">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
          <p className="mt-2 font-medium text-zinc-700"> €{product.price} </p>
        </Link>
      ))}
    </div>
  )
}

export default ProductGrid