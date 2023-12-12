import Image, { StaticImageData } from "next/image";
import Button from "../components/Button";
import imageFeatured from "@/public/cta/earrings.jpg";
import imageFeatured2 from "@/public/hero/pexels-cottonbro-studio-9430463.jpg";
import imageFeatured3 from "@/public/cta/earrings.jpg";
import imageFeatured4 from "@/public/hero/pexels-cottonbro-studio-9430463.jpg";
import Link from "next/link";


type FeaturedImageObject = {
  image: StaticImageData;
  title: string;
  description: string;
};

const images: FeaturedImageObject[] = [
  {
    image: imageFeatured,
    title: "Pink Earrings",
    description: "15€",
  },
  {
    image: imageFeatured2,
    title: "Gold Ring",
    description: "25€",
  },
  {
    image: imageFeatured3,
    title: "Blue Earrings",
    description: "15€",
  },
  {
    image: imageFeatured4,
    title: "Silver Ring",
    description: "20€",
  },
];

const FeaturedSection = () => (
  <div className="flex justify-center bg-rose-100 w-full mt-5">
     <section className="container flex flex-col gap-5  items-center">
    <div className="text-center mt-4">
      <h1 className="sm:hidden font-lato text-3xl font-semibold text-zinc-900">
      Featured Products
      </h1>
      <h1 className="hidden sm:block font-lato text-3xl font-semibold text-zinc-900">
        Featured Products
      </h1>
      
      <h4 className="hidden sm:block font-roboto text-xl font-lato text-zinc-700">
      Experience the Beauty of Polymer Clay
      </h4>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-1  mb-9 lg:grid-cols-2 lg:gap-24">
        {images.map((FeaturedImage, index) => (
        <div
          key={index}
          className="relative w-80 bg-rose-200 rounded-lg shadow-lg mt-9 flex flex-col justify-center items-center"
        >
          
          <Image
            src={FeaturedImage.image}
            alt={`Featured image ${index + 1}`}
            width={300}
            height={200}  
            className="w-full h-56 object-cover rounded-t-lg"
          />
          <div className="mt-3 text-center">
            <h2 className="text-md font-semibold font-lato text-zinc-800">
              {FeaturedImage.title}
            </h2>
            <p className="text-gray-600 font-lato">{FeaturedImage.description}</p>
          </div>
          <Link href="/shop">
            <Button className="mt-3 hover:bg-rose-400 hover:text-white font-lato">
              Shop Now
            </Button>
          </Link>
        </div>
      ))}
      </div>
      
    </section>
  </div>
);

export default FeaturedSection;