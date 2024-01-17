import Image from "next/image";
import Link from "next/link";

export default function MamasParadiseSection() {
  return (
    <section className="relative mt-40 flex w-full flex-col sm:my-80">
      <div className="h-[550px] w-full md:h-[675px] lg:h-[900px]">
        <span className="absolute h-full w-full animate-pulse rounded-xl bg-gray-300" />
        <Image
          className="h-auto max-w-full object-contain object-top sm:object-cover sm:object-center"
          src="/images/mamas-paradise/mamas-paradise-img-4.jpg"
          fill={true}
          alt="something 2"
          placeholder="blur"
          blurDataURL="/images/mamas-paradise/mamas-paradise-img-4.jpg"
        />
      </div>
      <div className="absolute bottom-0 flex w-full flex-col space-y-4 bg-blue-400 p-6 text-white xs:-bottom-10 sm:-bottom-48 sm:left-20 sm:w-2/3 sm:rounded-lg sm:p-8 sm:text-lg md:w-[500px]">
        <h5 className="font-bold">Mama's Paradise</h5>
        <p className="md:text-justify">
          Get ready to experience the ultimate luxury family vacation in the
          heart of Sousa, Dominican Republic! Our two brand new vacation homes
          are the definition of paradise, offering everything you need for an
          unforgettable getaway!
        </p>
        <Link className="underline" href="/mamas-paradise">
          View Mama's Paradise
        </Link>
      </div>
    </section>
  );
}
