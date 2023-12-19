import Image from 'next/image'
import Link from 'next/link'

export default function MamasParadiseSection() {
  return (
    <section>
      <div>
        <Image
          className='w-20'
          src='/images/mamas-paradise/mamas-paradise-img-01.jpg'
          width='4559'
          height='2577'
          alt='something 2'
        />
      </div>
      <div>
        <h5>Mama's Paradise</h5>
        <p>
          Get ready to experience the ultimate luxury family vacation in the
          heart of Sousa, Dominican Republic! Our two brand new vacation homes
          are the definition of paradise, offering everything you need for an
          unforgettable getaway!
        </p>
      </div>
      <div>
        <Link href='/mamas-paradise'>View Mama's Paradise</Link>
      </div>
    </section>
  )
}
