import Layout from '../components/Layout'

export default function page() {
  return (
    <Layout>
      <main>
        <h1>Calendar</h1>
        <div>
          <iframe
            className='w-full'
            src='https://calendar.google.com/calendar/embed?height=1000&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=YjQxOTMzZWIyYjBkOTAxNTFhZWM1NDAzZTBkMGY1YzBjNWEwMjljMjJiZDFmZTZiNWUxYWUwMTExMjc3MWQwNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%6691c6'
            width='1999'
            height='1000'
            frameborder='0'
            loading='lazy'
            title='Calendar'
          />
        </div>
      </main>
    </Layout>
  )
}
