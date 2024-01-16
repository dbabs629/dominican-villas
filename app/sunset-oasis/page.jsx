"use client";
import { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Gallery from "../components/Gallery";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";
import ImageModal from "../components/ImageModal";

export default function page() {
  const [currentImgNum, setCurrentImgNum] = useState(1);
  const [displayModal, setDisplayModal] = useState(true);

  return (
    <Layout>
      <ImageModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        imgPath="/images/sunset-oasis/sunset-oasis-img-"
        currentImgNum={currentImgNum}
      />
      <main className="mx-auto w-full xl:w-11/12">
        <div>
          <PageHeading title="Sunset Oasis" />
          <Carousel
            numOfImgs={33}
            imgPath="/images/sunset-oasis/sunset-oasis-img-"
            currentImgNum={currentImgNum}
            setCurrentImgNum={setCurrentImgNum}
            setDisplayModal={setDisplayModal}
          />
          <Gallery
            numOfImgs={33}
            imgPath="/images/sunset-oasis/sunset-oasis-img-"
            currentImgNum={currentImgNum}
            setCurrentImgNum={setCurrentImgNum}
          />
        </div>
        <section className="mx-auto my-10 w-11/12 text-sm sm:w-2/3 sm:text-base">
          <article className="my-10 space-y-10">
            <SectionHeading title="About" />
            <p>
              This villa will sleep up to 6 people with the primary bedroom
              having a king-size bed, the 2 other bedrooms have 2 queen-size
              beds. Infant play pen also available if required, one bedroom is
              on the main floor with the other 2 bedrooms upstairs with balcony,
              all bedrooms have their own air conditioner/ ceiling fan and their
              own full bathroom with a hairdryer. There is a safe in one
              bedroom, Wi-Fi, an iron with iron board, vacuum, and all cleaning
              supplies. All bedrooms are equipped with bed sheets, pillows,
              dressers, closet with hangers and a smart TV. There's a full
              kitchen with stove, fridge, microwave, pots, pans, glassware,
              dishes, cups, silverware, and a booster seat for baby if required.
              It has a dining room table, full living room with a smart TV,
              there are child and adults board games along with infant toys and
              infant walker. Outdoor furniture, BBQ, private chlorine pool,
              outdoor washroom, outdoor laundry room with washer and dryer
              (detergent and dryer sheets included), lounge chairs by the pool,
              life jackets for infants and young kids, pool floats and toys and
              a backup generator so you will never run out of power.
            </p>
          </article>
          <article className="my-10 space-y-10">
            <SectionHeading title="Location Information" />
            <Image
              className="z-10 w-full rounded-xl"
              src="/images/siednji-leon-PO3mXAkAI4c-unsplash.jpg"
              width="5184"
              height="3456"
              alt="something"
            />
            <p>
              These two villas have everything you will ever need on your
              vacation. It is located 15 minutes away from the airport, a 5
              minute drive to the town of Sosua where you will find all your
              necessary needs: 3 beaches, grocery stores, banks, a hospital,
              shopping and over 100 restaurants. Take. 15 minute drive to the
              town of Cabarete and enjoy a nice dinner on the beach, watch the
              cruise ships and be amazed with the incredible views of the
              sunset. After dinner, enhance yourself with the nightlife of music
              and dancing. Then come back to Mama's Paradise Villa for a
              cocktail or two and relax by the private pool and unwind.
            </p>
          </article>
        </section>
      </main>
    </Layout>
  );
}
