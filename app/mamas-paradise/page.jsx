'use client'
import { useState } from 'react'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import Carousel from '../components/Carousel'
import PageHeading from '../components/PageHeading'
import SectionHeading from '../components/SectionHeading'
import Image from 'next/image'

export default function page() {
  const [currentImgNum, setCurrentImgNum] = useState(1)

  return (
    <Layout>
      <main>
        <div>
          <PageHeading title={`Mama's Paradise`} />
          <Carousel
            numOfImgs={29}
            imgPath='/images/mamas-paradise/mamas-paradise-img-'
            currentImgNum={currentImgNum}
            setCurrentImgNum={setCurrentImgNum}
          />
          <Gallery
            numOfImgs={29}
            imgPath='/images/mamas-paradise/mamas-paradise-img-'
            currentImgNum={currentImgNum}
            setCurrentImgNum={setCurrentImgNum}
          />
        </div>
        <div>
          <SectionHeading title='About' />
          <p>
            This villa will sleep up to 10 people with 2 bedrooms having king-size beds, the third bedroom has 2
            queen-size beds and 2 single-size beds with a play pen for a baby to play or sleep in. All bedrooms have
            their own air conditioner/ ceiling fan and their own full bathroom with a hairdryer. There is a safe in one
            bedroom, Wi-Fi, an iron with iron board, vacuum, and all cleaning supplies. All bedrooms are equipped with
            bed sheets, pillows, dressers, closet with hangers and a smart TV. There's a full kitchen with stove,
            fridge, microwave, pots, pans, glassware, dishes, cups, silverware, and a booster seat for baby. It has a
            dining room table, full living room with a smart TV, there are child and adults board games along with
            infant toys and infant walker. Outdoor furniture, BBQ, private chlorine pool, outdoor washroom, outdoor
            laundry room with washer and dryer (detergent and dryer sheets included), lounge chairs by the pool, life
            jackets for infants and young kids, pool floats and toys and a backup generator so you will never run out of
            power.
          </p>
        </div>
        <div>
          <SectionHeading title='Location Information' />
          <Image
            className='z-10 w-full rounded-xl'
            src='/images/siednji-leon-PO3mXAkAI4c-unsplash.jpg'
            width='5184'
            height='3456'
            alt='something'></Image>
          <p>
            These two villas have everything you will ever need on your vacation. It is located 15 minutes away from the
            airport, a 5 minute drive to the town of Sosua where you will find all your necessary needs: 3 beaches,
            grocery stores, banks, a hospital, shopping and over 100 restaurants. Take. 15 minute drive to the town of
            Cabarete and enjoy a nice dinner on the beach, watch the cruise ships and be amazed with the incredible
            views of the sunset. After dinner, enhance yourself with the nightlife of music and dancing. Then come back
            to Mama's Paradise Villa for a cocktail or two and relax by the private pool and unwind.
          </p>
        </div>
      </main>
    </Layout>
  )
}
