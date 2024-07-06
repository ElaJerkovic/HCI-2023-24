import Icons from "../components/Icons";

const FeaturesSection = () => (
    <section className="flex justify-center lg:container w-full my-4">
      <div className="flex flex-col md:flex-row justify-evenly w-full mx-6">
        <div className="text-center lg:w-64 md:w-64 mb-8 md:mb-0">
          <ul className="flex flex-col items-center">
            <li className="self-center mb-2"><Icons.TruckIcon className="w-12" /></li>
            <li className="font-semibold text-zinc-800 font-lato self-center">FREE SHIPPING</li>
            <li className="font-lato text-zinc-800 self-center">On Orders Over 30€</li>
          </ul>
        </div>
        <div className="text-center lg:w-64 md:w-64 mb-8 md:mb-0">
          <ul className="flex flex-col items-center">
            <li className="self-center mb-2"><Icons.envelope className="w-12" /></li>
            <li className="font-semibold font-lato text-zinc-800 self-center">REFUNDS</li>
            <li className="font-lato text-zinc-800 self-center">Within 30 Days</li>
          </ul>
        </div>
        <div className="text-center lg:w-64 md:w-64">
          <ul className="flex flex-col items-center">
            <li className="self-center mb-2"><Icons.MoneyIcon className="w-12" /></li>
            <li className="font-semibold font-lato text-zinc-800 self-center">CONSTANT SUPPORT</li>
            <li className="font-lato text-zinc-800 self-center">24 Hours A Day 7 Days A Week</li>
          </ul>
        </div>
      </div>
    </section>
  );
  
  export default FeaturesSection;
  
