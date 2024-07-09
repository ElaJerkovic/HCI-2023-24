import Image from "next/image";
import { client, urlFor } from "@/sanity/lib/client";
import { shimmer, toBase64 } from "../lib/image";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
}

export default async function About() {
  const data = await getData();
  return (
    <section className="mx-auto bg-brand-mint-50 min-h-screen max-w-2xl sm:pb-6 lg:max-w-7xl lg:px-8 mt-16">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 w-full text-center flex flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-28 md:text-center lg:text-left">
          <h1 className="text-6xl font-bold text-zinc-800 sm:text-5xl md:text-6xl mb-4">
            About Us
          </h1>
          <p className="max-w-md bg-brand-mint-100 rounded-md py-4 px-4 mx-auto mt-9 lg:mx-0 leading-relaxed text-zinc-600 xl:text-lg md:text-center lg:text-left">
            We are two sisters and we started our journey making homemade jewelry out of polymer clay as a hobby. Our polymer clay pieces are lightweight, durable, and made with the utmost attention to detail. Our mission is simple: to create unique, high-quality jewelry that brings joy and a touch of whimsy to our customers’ lives. We believe in the power of handmade, and we are committed to maintaining the personal touch that makes our jewelry special. When you purchase a piece from us, you’re not just buying jewelry – you’re supporting a dream, a passion, and a small business built with love. Thank you for being a part of our journey and for allowing us to share our love for handmade jewelry with you.
          </p>
        </div>
        
        <div className="mb-12 mt-16 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            {data && data.image1 && ( 
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64, ${toBase64(shimmer(255, 280))}`}
                src={urlFor(data.image1).url()}
                alt="Great Photo"
                className="h-full w-full object-cover object-center"
                priority
                width={500}
                height={500}
              />
            )}
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            {data && data.image2 && (
              <Image
                src={urlFor(data.image2).url()}
                alt="Great Photo"
                className="h-full w-full object-cover object-center"
                width={500}
                height={500}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
