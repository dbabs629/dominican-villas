import PageHeading from './components/PageHeading'
import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import MamasParadiseSection from './components/MamasParadiseSection'
import SunsetOasisSection from './components/SunsetOasisSection'

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
      </main>
    </Layout>
  )
}
