import Image from "next/image";
import Link from "next/link";

export default function MamasParadiseSection() {
  return (
    <section className="lg:max-w-2/3 relative mx-auto mt-40 flex h-[550px] w-full flex-col sm:my-80 lg:h-[760px] lg:w-11/12 2xl:w-2/3">
      <div className="w-full lg:rounded-xl">
        <span className="absolute h-1/2 w-full animate-pulse bg-gray-300 sm:h-full lg:rounded-xl" />
        <Image
          className="h-auto max-w-full object-contain object-top sm:object-cover sm:object-center lg:rounded-xl"
          src="/images/mamas-paradise/mamas-paradise-img-4.jpg"
          fill={true}
          sizes="100vw"
          alt="Image of Dominican Villa mamas-paradise-img-4.jpg"
        />
      </div>
      <div className="absolute bottom-20 flex w-full flex-col space-y-4 bg-blue-400 p-6 text-sm text-white s:bottom-0 sm:-bottom-48 sm:left-20 sm:w-2/3 sm:rounded-lg sm:p-8 md:w-[500px] md:text-lg 2xl:w-[650px] 2xl:text-2xl">
        <h5 className="font-bold">Mama's Paradise</h5>
        <p>
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
