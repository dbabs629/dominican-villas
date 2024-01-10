import PageHeading from './components/PageHeading'
import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import MamasParadiseSection from './components/MamasParadiseSection'
import SunsetOasisSection from './components/SunsetOasisSection'
import SectionHeading from './components/SectionHeading'
import Image from 'next/image'
import sousaimg1 from '../public/images/sousa-img-1.PNG'
import sousaimg2 from '../public/images/sousa-img-2.PNG'

export default function Home() {
  return (
    <Layout>
      <main>
        <div>
          <PageHeading title='Dominican Vacation Homes' />
          <p className='pt-2 text-lg text-center text-blue-900'>Check out our two beautiful vacation homes!</p>
        </div>
        <HeroSection />
        <MamasParadiseSection />
        <SunsetOasisSection />
        <div>
          <SectionHeading title='Sousa, Dominican Republic' />
          <div>
            <Image
              className='object-cover h-auto max-w-full rounded-xl'
              src={sousaimg1}
              width='1875'
              height='622'
              alt='something 2'
            />
            <Image
              className='object-cover h-auto max-w-full rounded-xl'
              src={sousaimg2}
              width='746'
              height='596'
              alt='something 2'
            />
            <p></p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
