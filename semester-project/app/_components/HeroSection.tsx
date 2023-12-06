import Image, { StaticImageData } from "next/image";
import heroImg from "@/public/hero/pexels-cottonbro-studio-9430463.jpg"
import Button from "../components/Button";
import Link from "next/link";

type HeroImageObject = {
  image: StaticImageData;
};

const images: HeroImageObject[] = [
  { image: heroImg,  },
];

const HeroSection = () => (
    <section className="flex w-screen mt-28" >
      
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
  
