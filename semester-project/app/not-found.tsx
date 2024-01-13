import Link from "next/link";
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
        /*<main className="text-center mt-36">

            <h2 className="text-3xl text-brand-pink-100 mb-5">There was a problem.</h2>
            <p>We could not find a page you were looking for</p>
            <p>Go back to the <Link href="/" className="text-brand-pink-100">Homepage</Link></p>
            <Image
                src={error}
                className=" rounded-lg"
            />
        </main>*/
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

export default notFound;