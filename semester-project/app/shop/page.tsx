import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { fontSans } from "@/app/lib/fonts";

import { siteConfig } from "@/app/config/site";
import { cn } from "@/app/lib/utils";
import ProductFilters from "@/app/components/ProductFilters";
import ProductGrid from "@/app/components/ProductGrid";
import ProductSort from "@/app/components/ProductSort";
import { seedSanityData } from "../lib/seed";
import { StringFieldProps } from "sanity";

interface Props {
  searchParams: {
    date?: string;
    price?: string;
    color?: string;
    category?: string;
    metal?: string;
  };
}

async function getData(filters: string, params: any) {
  const query = groq`
    *[_type == "product" ${filters}] {
      _id,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url
    } ${params.order}
  `;

  const data = await client.fetch(query, params);
  return data;
}

async function Page({ searchParams }: Props) {
  const { date = "desc", price, color } = searchParams;

  let filters = "";
  let params: any = { order: "" };

  if (price) {
    params.order += `| order(price ${price}) `;
  }

  if (date) {
    params.order += `| order(_createdAt ${date}) `;
  }

  if (color) {
    params.color = color;
    filters += ` && "${color}" in colors`;
  }

  const products_filtered = await getData(filters, params);

  console.log(products_filtered);

  return (
    <div className="min-h-screen">
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-bold text-zinc-800 tracking-normal">SHOP</h1>
        <p className="mx-auto mt-4 max-w-3xl text-zinc-600 text-base">{siteConfig.description}</p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4 pt-24">
            <h1 className="text-xl font-bold text-zinc-800 tracking-tight sm:text-2xl">
              {products_filtered.length} result{products_filtered.length === 1 ? "" : "s"}
            </h1>
            <ProductSort />
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div
              className={cn(
                "grid grid-cols-1 gap-x-8 gap-y-10 ",
                products_filtered.length > 0 ? "lg:grid-cols-4" : "lg:grid-cols-[1fr_3fr]"
              )}
            >
              <div className="hidden lg:block">
                {/* Product filters */}
                <ProductFilters />
              </div>
              {/* Product grid */}
              <ProductGrid products={products_filtered} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Page;