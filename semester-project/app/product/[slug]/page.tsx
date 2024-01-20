import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/sanity/lib/client";
import Button from "../../components/Button";
import { Star, Truck } from "lucide-react";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          price_id
      }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function ProductPge({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl mt-24 mb-24 px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-700 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-base font-bold text-zinc-700 md:text-2xl">
                  ${data.price}
                </span>
              </div>

            </div>

            <div className="mb-6 flex items-center gap-2 text-zinc-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            <div className="flex gap-2.5">
                <Button
                    zinc
                    className="text-base xl:text-md xl:px-8 mt-8 ml-4"
                    iconClassName="xl:w-3 xl:h-3">
                    Add to bag
                </Button>
             
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}