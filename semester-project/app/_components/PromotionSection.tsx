import Image, { StaticImageData } from "next/image";
import Button from "../components/Button";
import imagePromotion from "@/public/hero/pexels-cottonbro-studio-9430463.jpg";
import Link from "next/link";



type PromotionImageObject = {
  image: StaticImageData;
};

const images: PromotionImageObject[] = [
  {
    image: imagePromotion,
  },
];

const PromotionSection = () => (
    <div className="bg-white py-12">
      <div className="lg:container flex flex-col items-center">
        <h2 className="text-3xl font-bold font-lato text-rose-400 mb-6">
          Special Offer: 20% Off All Earrings
        </h2>
        <div className="relative w-full lg:w-1/1 h-64">
          <Image
            src={imagePromotion}
            alt="Earrings Promotion"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center font-lato text-white">
            <p className="text-xl mb-4 font-lato">Limited Time Offer</p>
            
            <Link href="/shop">
              <Button className="bg-brand-pink-500 font-lato hover:bg-rose-400">
                Shop Earrings Now
              </Button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
export default PromotionSection;