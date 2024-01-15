import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className='py-24'>
      <div className='flex justify-center w-3/5 p-20 mx-auto space-x-20 border shadow rounded-xl'>
        <div className='relative flex flex-col w-1/2'>
          <span className='absolute w-full h-full bg-gray-300 animate-pulse rounded-xl' />
          <Image
            className='max-w-full rounded-xl'
            src='/images/mamas-paradise/mamas-paradise-smaller.jpg'
            placeholder='blur'
            blurDataURL='/images/mamas-paradise/mamas-paradise-img-2.jpg'
            fill={true}
            style={{ objectFit: 'cover' }}
            alt='something'
          />
          <span className='absolute w-full h-full bg-gray-300 animate-pulse rounded-xl' />
          <Image
            className='max-w-full rounded-xl'
            src='/images/sunset-oasis/sunset-oasis-img-2.jpg'
            placeholder='blur'
            blurDataURL='/images/sunset-oasis/sunset-oasis-img-2.jpg'
            fill={true}
            style={{ objectFit: 'cover' }}
            alt='something 2'
          />
        </div>
        <div className='flex flex-col w-2/5 space-y-10 text-blue-900'>
          <h5 className='text-xl font-semibold'>Calling All Adventure Seekers And Beach Lovers!</h5>
          <p className='text-lg text-justify'>
            Get ready to experience the ultimate luxury family vacation in the heart of Sousa, Dominican Republic! Our
            two brand new vacation homes are the definition of paradise, offering everything you need for an
            unforgettable getaway! Located just 15 minutes away from the airport, convenience is at your fingertips and
            guess what? You are only steps away from the pristine ocean, thrilling waterparks, stunning beaches and
            grocery stores!
          </p>
          <p className='text-lg text-justify'>
            Escape to paradise in the ocean view villa (sleeps 6) or the bungalow villa (sleeps 10). Unwind in the cozy
            living room, enjoy culinary luxury in the fully equipped kitchen and step into an amazing outdoor oasis. The
            private swimming pool becomes your personal heaven, inviting you to bask in the sun and create unforgettable
            moments. Whether it's family or a romantic escape, the villas promise comfort and luxury for your ultimate
            vacation experience!
          </p>
        </div>
      </div>
    </section>
  )
}
