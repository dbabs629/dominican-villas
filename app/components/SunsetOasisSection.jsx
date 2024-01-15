import Image from 'next/image'
import Link from 'next/link'

export default function SunsetOasisSection() {
  return (
    <section className='relative flex flex-col w-full my-40'>
      <div className='max-w-full h-[675px]'>
        <span className='absolute w-full h-full bg-gray-300 animate-pulse rounded-xl' />
        <Image
          className='h-auto max-w-full'
          src='/images/sunset-oasis/sunset-oasis-img-2.jpg'
          fill={true}
          style={{ objectFit: 'cover' }}
          alt='something 2'
          placeholder='blur'
          blurDataURL='/images/sunset-oasis/sunset-oasis-img-2.jpg'
        />
      </div>
      <div className='absolute flex flex-col w-1/4 p-8 space-y-4 text-lg text-white bg-blue-400 rounded-lg right-20 -bottom-20'>
        <h5 className='font-bold'>Sunset Oasis</h5>
        <p className='font-semibold text-justify'>
          Get ready to experience the ultimate luxury family vacation in the heart of Sousa, Dominican Republic! Our two
          brand new vacation homes are the definition of paradise, offering everything you need for an unforgettable
          getaway!
        </p>
        <Link className='font-semibold underline' href='/mamas-paradise'>
          View Sunset Oasis
        </Link>
      </div>
    </section>
  )
}
