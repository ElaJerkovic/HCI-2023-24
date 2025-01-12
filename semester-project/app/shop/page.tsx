"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { siteConfig } from "@/app/config/site";
import { cn } from "@/app/lib/utils";
import ProductFilters from "@/app/components/ProductFilters";
import ProductGrid from "@/app/components/ProductGrid";
import ProductSort from "@/app/components/ProductSort";

const fetchData = async (filters: string, params: any) => {
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
  return await client.fetch(query, params);
};

export default function Page({ searchParams }: { searchParams: Record<string, string> }) {
  const { date = "desc", price, color } = searchParams;

  const [productsFiltered, setProductsFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      let filters = "";
      let params: any = { order: "" };

      if (price) params.order += `| order(price ${price}) `;
      if (date) params.order += `| order(_createdAt ${date}) `;
      if (color) {
        params.color = color;
        filters += ` && "${color}" in colors`;
      }

      const data = await fetchData(filters, params);
      setProductsFiltered(data);
      setIsLoading(false);
    };

    fetchProducts();
  }, [date, price, color]);

  return (
    <div className="min-h-screen">
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-bold text-zinc-800 tracking-normal">SHOP</h1>
        <p className="mx-auto mt-4 max-w-3xl text-zinc-600 text-base">{siteConfig.description}</p>
      </div>
      <main className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4 pt-24">
          <h1 className="text-xl font-bold text-zinc-800 tracking-tight sm:text-2xl">
            {isLoading ? "Loading..." : `${productsFiltered.length} result${productsFiltered.length === 1 ? "" : "s"}`}
          </h1>
          <ProductSort />
        </div>
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">Products</h2>
          <div className={cn("grid grid-cols-1 gap-x-8 gap-y-10 ", productsFiltered.length > 0 ? "lg:grid-cols-4" : "lg:grid-cols-[1fr_3fr]")}>
            <div className="hidden lg:block">
              <ProductFilters />
            </div>
            {!isLoading && <ProductGrid products={productsFiltered} />}
          </div>
        </section>
      </main>
    </div>
  );
}
