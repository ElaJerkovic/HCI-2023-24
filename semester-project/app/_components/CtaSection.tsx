import Image, { StaticImageData } from "next/image";
import Button from "../components/Button";
import imageCta from "@/public/cta/earrings.jpg";
import imageCta2 from "@/public/hero/pexels-cottonbro-studio-9430463.jpg";
import Link from "next/link";

import { simplifiedProduct } from "../interface";
import { client, urlFor } from "@/sanity/lib/client";
import { ArrowRight } from "lucide-react";
import { shimmer, toBase64 } from "../lib/image";

async function getData() {
  const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
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

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto mt-8 max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800">
            Our Newest products
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="/shop">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-zinc-200 group-hover:opacity-75 lg:h-80">
              <Link href={`/product/${product.slug}`}>
                <Image
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64, ${toBase64(shimmer(255, 280))}`}
                  src={product.imageUrl}
                  alt="Product image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={500}
                  height={500}
                /></Link>
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-zinc-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm font-medium text-zinc-900">
                  €{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/*
type CtaImageObject = {
  image: StaticImageData;
  title: string;
  description: string;
};

const images: CtaImageObject[] = [
  {
    image: imageCta,
    title: "Earrings Collection",
    description: "Discover our exquisite earrings collection.",
  },
  {
    image: imageCta2,
    title: "Rings Collection",
    description: "Explore our latest rings designs.",
  },
];

const CtaSection = () => (
  <div className="flex justify-center bg-brand-mint-50 w-full mt-5">
    <section className="pb-8 lg:container justify-center flex flex-wrap items-center gap-10 w-full ">
      <div className="px-5 lg:px-0 flex lg:flex-col sm:flex-row gap-5 max-w-lg w-full">
        <div className="flex-1">
          <h1 className="sm:block mt-5 self-center font-lato text-3xl text-center font-semibold text-zinc-800">
            Shop By Category
          </h1>
          <h1 className="hidden sm:block font-lato text-center text-xl text-zinc-800">
            Experience the Beauty of Our Jewelry
          </h1>
          <h4 className="sm:hidden font-lato text-center text-zinc-800 text-xl">
            Experience the Beauty
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-24">
        {images.map((CtaImage, index) => (
        <div
          key={index}
          className="relative w-80 bg-white rounded-lg shadow-lg mt-9 flex flex-col justify-center items-center"
        >
          <Image
            src={CtaImage.image}
            alt={`CTA image ${index + 1}`}
            width={300}
            height={200}  
            className="w-full h-56 object-cover rounded-t-lg"
          />
          <div className="mt-3 text-center">
            <h2 className="text-md font-semibold font-lato text-zinc-800">
              {CtaImage.title}
            </h2>
            <p className="text-sm text-gray-600 font-lato">{CtaImage.description}</p>
          </div>
          <Link href="/shop">
            <Button className="mt-3 text-gray-800 hover:bg-rose-400 hover:text-white font-lato">
              Shop Now
            </Button>
          </Link>
        </div>
      ))}
      </div>
      
    </section>
  </div>
);

export default CtaSection;*/