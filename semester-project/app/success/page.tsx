import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import { shimmer, toBase64 } from '../lib/image';
import successImG from '@/app/PngItem_511744.png'; // Update this with the correct path to your local image

const Hero = () => {
  return (
    <section className="mx-auto min-h-screen bg-white max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 mt-4">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mx-auto flex w-full md:mb-16 lg:w-1/2">
          <div className="relative sm:mb-200 top-12 sm-mt-0 mx-auto z-10 rounded-lg md:top-16 lg:ml-0">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64, ${toBase64(shimmer(255, 280))}`}
              src={successImG}
              alt=""
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/2 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 mt-4 mx-auto  text-6xl font-bold text-zinc-800 sm:text-4xl md:mb-8 md:text-6xl">
            Thank you!
          </h1>
          <p className="max-w-lg mx-auto  leading-relaxed text-zinc-600 xl:text-lg">
            Your order has been placed successfully. A confirmation email has been sent to you.
          </p>
          <Link href="/">
            <Button
              zinc
              className="text-base xl:text-md xl:px-8 mt-8 mx-auto "
              iconClassName="xl:w-3 xl:h-3"
            >
              Homepage
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
