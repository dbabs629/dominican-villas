import Image from "next/image";
import PageHeading from "./components/PageHeading";
import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import MamasParadiseSection from "./components/MamasParadiseSection";
import SunsetOasisSection from "./components/SunsetOasisSection";
import SectionHeading from "./components/SectionHeading";

export default function Home() {
  return (
    <Layout>
      <main>
        <div>
          <PageHeading title="Dominican Vacation Homes" />
        </div>
        <HeroSection />
        <MamasParadiseSection />
        <SunsetOasisSection />
        <div className="relative my-40 flex w-full flex-col">
          <div className="h-[400px] w-full sm:h-[500px]">
            <Image
              className="h-full max-w-full object-contain sm:object-cover"
              src="/images/sousa-img-1.PNG"
              fill={true}
              alt="something 2"
            />
            {/* <Image
              className='object-cover h-auto max-w-full rounded-xl'
              src='/images/sousa-img-2.PNG'
              width='746'
              height='596'
              alt='something 2'
            /> */}
          </div>
          <div className="absolute top-72 z-10 w-full space-y-4 bg-blue-400 p-6 text-base text-white xs:top-80 sm:-top-16 sm:left-4 sm:w-[450px] sm:rounded-lg sm:p-8 md:w-[500px] md:text-lg lg:left-12">
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
