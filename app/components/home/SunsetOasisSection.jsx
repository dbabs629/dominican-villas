import Image from 'next/image'
import Link from 'next/link'

export default function SunsetOasisSection() {
  return (
    <section>
      <div>
        <Image
          className='w-20'
          src='/images/sunset-oasis/sunset-oasis-img-02.jpg'
          width='1024'
          height='758'
          alt='something 2'
        />
      </div>
      <div>
        <h5>Sunset Oasis</h5>
        <p>
          Get ready to experience the ultimate luxury family vacation in the
          heart of Sousa, Dominican Republic! Our two brand new vacation homes
          are the definition of paradise, offering everything you need for an
          unforgettable getaway!
        </p>
      </div>
      <div>
        <Link href='/sunset-oasis'>View Sunset Oasis</Link>
      </div>
    </section>
  )
}
