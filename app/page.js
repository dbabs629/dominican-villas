import Image from "next/image";
import PageHeading from "./components/PageHeading";
import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import MamasParadiseSection from "./components/MamasParadiseSection";
import SunsetOasisSection from "./components/SunsetOasisSection";

export default function Home() {
  return (
    <Layout>
      <main>
        <div>
          <PageHeading title="Dominican Villas" />
        </div>
        <HeroSection />
        <MamasParadiseSection />
        <SunsetOasisSection />
        <div className="relative mx-auto my-40 flex h-[550px] w-full flex-col lg:h-[760px] lg:w-11/12 2xl:w-2/3">
          <div className=" w-full lg:rounded-xl">
            <span className="absolute bottom-0 h-1/2 w-full animate-pulse bg-gray-300 sm:h-full lg:rounded-xl" />
            <Image
              className="h-full max-w-full object-contain sm:object-cover sm:object-center lg:rounded-xl"
              src="/images/sousa-img-1.PNG"
              quality={100}
              fill={true}
              sizes="100vw"
              alt="Sousa Google Maps Image"
            />
          </div>
          <div className="absolute bottom-0 z-10 w-full space-y-4 bg-blue-400 p-6 text-sm text-white sm:-top-10 sm:bottom-auto sm:w-[450px] sm:rounded-lg sm:object-center sm:p-8 md:w-[500px] md:text-lg lg:left-12 2xl:w-[600px] 2xl:text-2xl">
            <h5 className="font-bold">Sousa, Dominican Republic</h5>
            <p className="md:text-justify">
              Sosua is everything you want a beach town to be. Clear waters teem
              with coral, perfect for snorkeling and diving. Above sea level
              you'll find multicolored sands lined with beach shacks.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
