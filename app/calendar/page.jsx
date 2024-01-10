'use client'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout'

export default function page() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {}, [loading])

  return (
    <Layout>
      <main>
        <h1>Calendar</h1>
        {!loading && (
          <div className='flex items-end mx-auto h-[200px] w-[200px]'>
            <FontAwesomeIcon
              className='w-[100px] text-6xl text-yellow-500 animate-spin'
              icon={faSpinner}
              aria-hidden='true'
            />
            <p className='animate-pulse'>Loading...</p>
          </div>
        )}
        <iframe
          className='w-full'
          src='https://calendar.google.com/calendar/embed?height=1000&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=YjQxOTMzZWIyYjBkOTAxNTFhZWM1NDAzZTBkMGY1YzBjNWEwMjljMjJiZDFmZTZiNWUxYWUwMTExMjc3MWQwNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%6691c6'
          width='1999'
          height='1000'
          loading='lazy'
          title='Calendar'
          onLoad={() => {
            setLoading(true)
          }}
        />
      </main>
    </Layout>
  )
}
