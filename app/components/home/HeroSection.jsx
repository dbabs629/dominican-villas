import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className='border-2'>
      <div className='flex p-4 border-2 max-w-[2546px]'>
        <div className='w-1/2 px-8 py-10 border border-red-500'>
          <Image
            className='w-1/2 border border-green-500'
            src='/images/mamas-paradise/mamas-paradise-img-02.jpg'
            width='5528'
            height='4150'
            alt='something'
          />
          <Image
            className='w-1/2 border border-green-500'
            src='/images/sunset-oasis/sunset-oasis-img-01.jpg'
            width='1012'
            height='768'
            alt='something 2'
          />
        </div>
        <div className='w-1/2 px-8 py-10 border border-blue-500'>
          <h5 className='border border-orange-500'>
            Calling All Adventure Seekers And Beach Lovers!
          </h5>
          <p className='border border-orange-500'>
            Get ready to experience the ultimate luxury family vacation in the
            heart of Sousa, Dominican Republic! Our two brand new vacation homes
            are the definition of paradise, offering everything you need for an
            unforgettable getaway! Located just 15 minutes away from the
            airport, convenience is at your fingertips and guess what? You are
            only steps away from the pristine ocean, thrilling waterparks,
            stunning beaches and grocery stores!
          </p>
          <p className='border border-orange-500'>
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
  )
}
