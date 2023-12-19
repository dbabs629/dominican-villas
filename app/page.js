import Layout from './components/Layout'
import HeroSection from './components/home/HeroSection'
import MamasParadiseSection from './components/home/MamasParadiseSection'
import SunsetOasisSection from './components/home/SunsetOasisSection'

export default function Home() {
  return (
      <Layout>
        <main>
          <div>
            <h1>Dominican Vacation Homes</h1>
            <p>Check out our two beautiful vacation homes!</p>
          </div>
          <HeroSection />
          <MamasParadiseSection />
          <SunsetOasisSection />
        </main>
      </Layout>
  )
}
