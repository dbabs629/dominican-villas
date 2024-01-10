import Image from 'next/image'
import Link from 'next/link'
import sunsetoasis from '../../public/images/sunset-oasis/sunset-oasis-img-2.jpg'

export default function SunsetOasisSection() {
  return (
    <section className='relative flex flex-col w-full my-40'>
      <div className='w-full'>
        <Image
          className='h-auto max-w-full'
          src={sunsetoasis}
          width='1024'
          height='758'
          alt='something 2'
          placeholder='blur'
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
