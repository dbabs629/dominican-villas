import Image from "next/image";
import Link from "next/link";

export default function SunsetOasisSection() {
  return (
    <section className="relative mt-40 flex w-full flex-col sm:my-80">
      <div className="h-[550px] w-full md:h-[675px] lg:h-[900px]">
        <span className="absolute h-1/2 w-full animate-pulse rounded-xl bg-gray-300 sm:h-full" />
        <Image
          className="h-auto max-w-full object-contain object-top sm:object-cover sm:object-center"
          src="/images/sunset-oasis/sunset-oasis-img-3.jpg"
          fill={true}
          alt="something 2"
          placeholder="blur"
          blurDataURL="/images/sunset-oasis/sunset-oasis-img-3.jpg"
        />
      </div>
      <div className="s:bottom-0 absolute bottom-20 flex w-full flex-col space-y-4 bg-blue-400 p-6 text-sm text-white sm:-bottom-48 sm:right-20 sm:w-2/3 sm:rounded-lg sm:p-8 md:w-[500px] md:text-lg">
        <h5 className="font-bold">Sunset Oasis</h5>
        <p className="md:text-justify">
          Get ready to experience the ultimate luxury family vacation in the
          heart of Sousa, Dominican Republic! Our two brand new vacation homes
          are the definition of paradise, offering everything you need for an
          unforgettable getaway!
        </p>
        <Link className="underline" href="/mamas-paradise">
          View Sunset Oasis
        </Link>
      </div>
    </section>
  );
}
