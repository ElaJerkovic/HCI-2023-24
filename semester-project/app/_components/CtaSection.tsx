import Image, { StaticImageData } from "next/image";
import Button from "../components/Button";
import imageCta from "@/public/cta/earrings.jpg";
import imageCta2 from "@/public/hero/pexels-cottonbro-studio-9430463.jpg";
import Link from "next/link";


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

export default CtaSection;