/* import Link from "next/link";
import error from "@/public/error/243512-P3UB87-565.jpg"
import Image, { StaticImageData } from "next/image";
import Button from "./components/Button";

type ErrorImageObject = {
    image: StaticImageData;
};

const images: ErrorImageObject[] = [
    {
        image: error,
    },
];

function notFound() {
    return (
        <main className="text-center mt-36">

            <h2 className="text-3xl text-brand-pink-100 mb-5">There was a problem.</h2>
            <p>We could not find a page you were looking for</p>
            <p>Go back to the <Link href="/" className="text-brand-pink-100">Homepage</Link></p>
            <Image
                src={error}
                className=" rounded-lg"
            />
        </main>
        <section className=" flex justify-center items-center gap-10 w-screen mt-40 mb-8">
            <div className="flex flex-col justify-start gap-5 max-w-xl m-auto lg:m-0">
                <h1 className=" text-5xl text-center lg:text-left xl:text-6xl font-extrabold text-brand-purple-900 whitespace-break-spaces">
                    There was a problem.
                </h1>
                <p className="font-roboto text-base text-center lg:text-left xl:text-lg whitespace-break-spaces">
                    We could not find a page you were looking for
                </p>

                <div className="flex gap-5 mt-4 self-center lg:self-start">
                    <Link href="/">
                        <Button className="mt-3 text-gray-800 hover:bg-rose-400 hover:text-white font-lato">
                            Go back to the Homepage
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="hidden lg:block flex-shrink-0">
                <Image
                    src={error}
                    alt="Error Image"
                    className="w-72 h-72 object-cover rounded-t-lg"
                />
            </div>
        </section>
    )
}

export default notFound; */
import Image, { StaticImageData } from "next/image";
import heroImg from "@/public/hero/pexels-cottonbro-studio-9430463.jpg"
import Link from "next/link";
import { client, urlFor } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Button from "./components/Button";
import { shimmer, toBase64 } from "./lib/image";



async function getData() {
  const query = "*[_type == 'errorImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto bg-white max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 mt-16">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/2 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 mt-4 ml-16 text-6xl font-bold text-zinc-800 sm:text-5xl md:mb-8 md:text-6xl">
            Oops! 
          </h1>
          <p className="max-w-md ml-16 leading-relaxed text-zinc-600 xl:text-lg">
            We could not find a page you were looking for!
          </p>
          <Link href="/">
            <Button
              zinc
              className="text-base xl:text-md xl:px-8 mt-8 ml-16"
              iconClassName="xl:w-3 xl:h-3"
            >
              Return to Homepage
            </Button>
          </Link>
        </div>
        
        <div className="mb-12 mt-8 flex w-full md:mb-16 lg:w-1/2">
        
          <div className="relative top-12 z-10 rounded-lg md:top-16 lg:ml-0">
           {data && data.image1 && ( 
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64, ${toBase64(shimmer(255, 280))}`}
                src={urlFor(data.image2).url()}
                alt=""
                className="h-full w-full object-cover object-center"
                width={500}
                height={500}
              />
            )}
          </div>
          
        </div>
      
      </div>  
    </section>
  );
}