import Image, { StaticImageData } from "next/image";
import heroImg from "@/public/hero/pexels-cottonbro-studio-9430463.jpg"
import Button from "../components/Button";
import Link from "next/link";
import { client, urlFor } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";


async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto bg-brand-mint-50 max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 mt-16">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 ml-4 text-4xl font-bold text-zinc-800 sm:text-5xl md:mb-8 md:text-6xl">
            Handcrafted Polymer Clay Jewelry
          </h1>
          <p className="max-w-md ml-4 leading-relaxed text-zinc-600 xl:text-lg">
            We sell only the most exclusive and high quality products for you.
          </p>
          <Link href="/shop">
            <Button
              zinc
              className="text-base xl:text-md xl:px-8 mt-8 ml-4"
              iconClassName="xl:w-3 xl:h-3"
            >
              Visit shop
            </Button>
          </Link>
        </div>
        
        <div className="mb-12 mt-5 flex w-full md:mb-16 lg:w-2/3">
        
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
           {data && data.image1 && ( 
           <Link href="/shop">
              <Image
                src={urlFor(data.image1).url()}
                alt="Great Photo"
                className="h-full w-full object-cover object-center"
                priority
                width={500}
                height={500}
              />
            </Link>)}
          </div>
          

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          {data && data.image2 && (
          <Link href="/shop">
            <Image
              src={urlFor(data.image2).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </Link>
          )}
          </div>
        </div>
      
      </div>  

      {/* <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/shop"
            className="flex w-1/2 items-center justify-center text-zinc-500 transition duration-100 hover:bg-zinc-100 active:bg-zinc-200"
          >
            Earrings
          </Link>
          <Link
            href="/shop"
            className="flex w-1/2 items-center justify-center text-zinc-500 transition duration-100 hover:bg-brand-pink-50 active:bg-zinc-200"
          >
            Rings
          </Link>
        </div>
      </div> */}
    </section>
  );
}
/*
type HeroImageObject = {
  image: StaticImageData;
};

const images: HeroImageObject[] = [
  { image: heroImg,  },
];

const HeroSection = () => (
    <section className="flex w-screen" >
      
      <div>
        {images.map((imageObj, index) => (
          <div key={index} className="relative h-80 md:h-80 w-screen mt-10">
            <Image
              src={imageObj.image}
              alt={`Hero image ${index + 1}`}
              fill
              style={{
                objectFit: "cover",
              }}
            />
            <div className="absolute inset-0  bg-white opacity-75 w-2/3 h-3/4 mx-auto my-auto"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center gap-5 max-w-xl z-10">
                    
                    <h1 className="hidden md:block text-2xl self-center text-center font-lato font-semibold text-zinc-800 uppercase tracking-wide">
                      Elevate Your Style with Handcrafted Polymer Clay Jewelry!
                    </h1>
                    <h1 className="md:hidden text-xl self-center text-center font-lato font-semibold text-zinc-800 uppercase tracking-wide">
                       Handcrafted 
                    </h1>
                    <h1 className="md:hidden text-xl self-center text-center font-lato font-semibold text-zinc-800 uppercase tracking-wide">
                       Polymer Clay 
                    </h1>
                    <h1 className="md:hidden text-xl self-center text-center font-lato font-semibold text-zinc-800 uppercase tracking-wide">
                       Jewelry!
                    </h1>
                    <div className="flex gap-5 mt-4 self-center lg:self-center">
                    <Link href="/shop">
                      <Button
                        zinc
                        className="text-base xl:text-md xl:px-8"
                        iconClassName="xl:w-3 xl:h-3"
                      >
                        Visit shop
                      </Button>
                    </Link>
                      
                      
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default HeroSection;
  
*/