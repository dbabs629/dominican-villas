import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      <div className="mx-auto mt-20 flex h-auto w-full flex-col items-center justify-center bg-blue-400 pb-8 sm:w-11/12 sm:rounded-xl sm:p-8 lg:w-11/12 lg:flex-row lg:items-start lg:p-16 2xl:w-2/3">
        <div className="m-0 mb-4 flex h-[700px] w-full flex-col items-center space-x-0 space-y-4 p-0 md:h-[300px] md:flex-row md:space-x-4 md:space-y-0 lg:h-[700px] lg:flex-col lg:space-x-0 xl:h-[900px]">
          <div className="relative h-full w-full sm:w-4/5 lg:-left-24 lg:-top-20 lg:my-0 lg:w-full">
            <span className="absolute z-10 h-full w-full animate-pulse rounded-xl bg-gray-300" />
            <Image
              className="z-20 h-full max-w-full object-cover sm:rounded-xl"
              src="/images/mamas-paradise/mamas-paradise-img-1.jpg"
              priority={true}
              fill={true}
              sizes="100%"
              alt="something"
            />
          </div>
          <div className="relative h-full w-full sm:w-4/5 lg:-left-10 lg:-top-24 lg:my-0 lg:w-full">
            <span className="absolute z-10 h-full w-full animate-pulse rounded-xl bg-gray-300" />
            <Image
              className="z-10 h-full max-w-full object-cover sm:rounded-xl"
              src="/images/sunset-oasis/sunset-oasis-img-1.jpg"
              priority={true}
              fill={true}
              sizes="100%"
              alt="something 2"
            />
          </div>
        </div>
        <div className="flex w-4/5 flex-col space-y-10 text-white md:w-full lg:w-2/3">
          <h5 className="text-xl font-semibold">
            Calling All Adventure Seekers And Beach Lovers!
          </h5>
          <p className="text-justify text-lg">
            Get ready to experience the ultimate luxury family vacation in the
            heart of Sousa, Dominican Republic! Our two brand new vacation homes
            are the definition of paradise, offering everything you need for an
            unforgettable getaway! Located just 15 minutes away from the
            airport, convenience is at your fingertips and guess what? You are
            only steps away from the pristine ocean, thrilling waterparks,
            stunning beaches and grocery stores!
          </p>
          <p className="text-justify text-lg">
            Escape to paradise in the ocean view villa (sleeps 6) or the
            bungalow villa (sleeps 10). Unwind in the cozy living room, enjoy
            culinary luxury in the fully equipped kitchen and step into an
            amazing outdoor oasis. The private swimming pool becomes your
            personal heaven, inviting you to bask in the sun and create
            unforgettable moments. Whether it's family or a romantic escape, the
            villas promise comfort and luxury for your ultimate vacation
            experience!
          </p>
        </div>
      </div>
    </section>
  );
}
