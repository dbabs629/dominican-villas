"use client";
import { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
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
        imgPath="/images/mamas-paradise/mamas-paradise-img-"
        currentImgNum={currentImgNum}
      />
      <main className="mx-auto w-full xl:w-11/12">
        <div>
          <PageHeading title={`Mama's Paradise`} />
          <Carousel
            numOfImgs={29}
            imgPath="/images/mamas-paradise/mamas-paradise-img-"
            currentImgNum={currentImgNum}
            setCurrentImgNum={setCurrentImgNum}
            setDisplayModal={setDisplayModal}
          />
          <Gallery
            numOfImgs={29}
            imgPath="/images/mamas-paradise/mamas-paradise-img-"
            currentImgNum={currentImgNum}
            setCurrentImgNum={setCurrentImgNum}
          />
        </div>
        <section className="mx-auto my-10 w-full max-w-[800px] text-sm sm:w-11/12 sm:text-base lg:w-2/3">
          <article className="mx-auto my-20 w-full space-y-10 pb-40 text-blue-900 sm:rounded-xl sm:border sm:p-20 sm:shadow-lg">
            <SectionHeading title="About" />
            <p className="mx-auto w-11/12 text-sm sm:w-full md:text-base">
              This 3 bedroom bungalow villa will sleep up to 10 people. 2
              bedrooms have one king-size bed and one has a safe. The third
              bedroom has 2 queen-size beds and 2 single-size beds with a play
              pen for a baby to play or sleep in. All bedrooms have their own
              air conditioner, ceiling fan and their own full bathroom with a
              hairdryer. All bedrooms are equipped with bed sheets, pillows,
              dressers, closet with hangers and a smart TV. Wi-Fi, an iron with
              iron board, vacuum, and all cleaning supplies are included. There
              is a full kitchen with stove, fridge, microwave, pots, pans,
              glassware, dishes, cups, and silverware. It has a dining room
              table, full living room with a smart TV, there are child and
              adults board games along with infant toys. Outdoor furniture, BBQ,
              private chlorine pool, outdoor washroom, outdoor laundry room with
              washer and dryer (detergent and dryer sheets included), lounge
              chairs by the pool, life jackets for infants and young kids, pool
              floats and toys and a backup generator so you will never run out
              of power. Infant playpen, walker and booster seat are included.
            </p>
          </article>
          <article className="mx-auto my-10 flex w-full flex-col items-center justify-center space-y-10 bg-blue-400 py-10 text-white shadow sm:rounded-xl sm:shadow-lg">
            <SectionHeading title="Amenities" />
            <ul className="amenities mx-auto grid h-[500px] w-full grid-cols-3 sm:w-11/12">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z" />
                </svg>
                <p>Pool</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                </svg>
                <p>Wifi</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                </svg>
                <p>Free Parking</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                </svg>
                <p>Smart TV</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" />
                </svg>
                <p>Laundry Onsite</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                </svg>
                <p>Beds(6)</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M258.6 0c-1.7 0-3.4 .1-5.1 .5C168 17 115.6 102.3 130.5 189.3c2.9 17 8.4 32.9 15.9 47.4L32 224H29.4C13.2 224 0 237.2 0 253.4c0 1.7 .1 3.4 .5 5.1C17 344 102.3 396.4 189.3 381.5c17-2.9 32.9-8.4 47.4-15.9L224 480v2.6c0 16.2 13.2 29.4 29.4 29.4c1.7 0 3.4-.1 5.1-.5C344 495 396.4 409.7 381.5 322.7c-2.9-17-8.4-32.9-15.9-47.4L480 288h2.6c16.2 0 29.4-13.2 29.4-29.4c0-1.7-.1-3.4-.5-5.1C495 168 409.7 115.6 322.7 130.5c-17 2.9-32.9 8.4-47.4 15.9L288 32V29.4C288 13.2 274.8 0 258.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
                <p>Air Conditioning</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
                </svg>
                <p>Hot Water</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48h8V196.9c-1.9 1.4-3.8 2.9-5.6 4.4C10.9 214.5 0 232.9 0 256c0 46.9 14.3 84.1 37 112.5c14.2 17.7 31.1 31.3 48.5 41.8L65.6 469.9c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3H352c10.3 0 19.9-4.9 26-13.3s7.7-19.1 4.4-28.8l-19.8-59.5c17.4-10.5 34.3-24.1 48.5-41.8c22.7-28.4 37-65.5 37-112.5c0-23.1-10.9-41.5-26.4-54.6c-1.8-1.5-3.7-3-5.6-4.4V48h8c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zM384 256.3c0 1-.3 2.6-3.8 5.6c-4.8 4.1-14 9-29.3 13.4C320.5 284 276.1 288 224 288s-96.5-4-126.9-12.8c-15.3-4.4-24.5-9.3-29.3-13.4c-3.5-3-3.8-4.6-3.8-5.6l0-.3 0-.1c0-1 0-2.5 3.8-5.8c4.8-4.1 14-9 29.3-13.4C127.5 228 171.9 224 224 224s96.5 4 126.9 12.8c15.3 4.4 24.5 9.3 29.3 13.4c3.8 3.2 3.8 4.8 3.8 5.8l0 .1 0 .3zM328.2 384l-.2 .5 0-.5h.2zM112 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
                <p>Bathrooms(4)</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M64 0C28.7 0 0 28.7 0 64V416c0 35.3 28.7 64 64 64H80l16 32h64l16-32H400l16 32h64l16-32h16c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM224 320a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-240a160 160 0 1 1 0 320 160 160 0 1 1 0-320zM480 221.3V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V221.3c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3z" />
                </svg>
                <p>Safe</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
                </svg>
                <p>Full Kitchen</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M288 96c0-17.7 14.3-32 32-32s32 14.3 32 32s14.3 32 32 32s32-14.3 32-32c0-53-43-96-96-96s-96 43-96 96V288H160V264c0-30.9-25.1-56-56-56H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c4.4 0 8 3.6 8 8v24H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H256 480c17.7 0 32-14.3 32-32s-14.3-32-32-32H400V264c0-4.4 3.6-8 8-8h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H408c-30.9 0-56 25.1-56 56v24H288V96zM480 416V384H32v32c0 53 43 96 96 96H384c53 0 96-43 96-96z" />
                </svg>
                <p>Cookware</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M64 0C47.4 0 33.5 12.8 32.1 29.3l-14 168.4c-6 72 42.5 135.2 109.9 150.6V448H80c-17.7 0-32 14.3-32 32s14.3 32 32 32h80 80c17.7 0 32-14.3 32-32s-14.3-32-32-32H192V348.4c67.4-15.4 115.9-78.6 109.9-150.6l-14-168.4C286.5 12.8 272.6 0 256 0H64zM81.9 203.1L93.4 64H226.6l11.6 139.1C242 248.8 205.9 288 160 288s-82-39.2-78.1-84.9z" />
                </svg>
                <p>Glassware</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M24 64H56 80V88v88 80 80 88 24H56 24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V360H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V200H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V112H24C10.7 112 0 101.3 0 88S10.7 64 24 64zm88 0H528V448H112V64zM640 88c0 13.3-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H584 560V424 336 256 176 88 64h24 32c13.3 0 24 10.7 24 24z" />
                </svg>
                <p>Towels</p>
              </i>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M444.2 0C397.2 49.6 384 126.5 384 192c0 158.8-27.3 247-42.7 283.9c-10 24-33.2 36.1-55.4 36.1H48c-11.5 0-22.2-6.2-27.8-16.2s-5.6-22.3 .4-32.2c9.8-17.7 15.4-38.2 20.5-57.7C52.3 362.8 64 293.5 64 192C64 86 107 0 160 0H444.2zM512 384c-53 0-96-86-96-192S459 0 512 0s96 86 96 192s-43 192-96 192zm0-128c17.7 0 32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64s14.3 64 32 64zM144 208a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm64 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
                </svg>
                <p>Toiletry</p>
              </i>
            </ul>
          </article>
          <article className="my-10 w-full space-y-10 pb-40 text-blue-900 sm:rounded-xl sm:border sm:shadow-lg md:p-20">
            <SectionHeading title="Pricing" />
            <ul className="mx-auto flex h-auto flex-col items-center space-y-8 text-center">
              <p>
                1 week stay (7 night stay)......... $275.00 Per/ Night $1,925.00
              </p>
              <p>
                2 week stay (14 night stay)......... $250.00 Per/ Night
                $3,500.00
              </p>
              <p>
                3 week stay (21 night stay)......... $225.00 Per/ Night
                $4,725.00
              </p>
              <p>
                4 week stay (28 night stay).......... $175.00 Per/ Night
                $5,250.00
              </p>
              <i className="text-center italic">
                All prices are in Canadian Currency 3 bedrooms and sleeps (8-10
                people)
              </i>
            </ul>
          </article>
          <article className="my-10 space-y-10 pb-40 text-blue-900 sm:rounded-xl sm:border sm:p-20 sm:shadow-lg">
            <div className="relative h-[550px] w-full">
              <Image
                className="z-10 w-full object-cover object-center sm:rounded-xl sm:object-contain"
                src="/images/sosua-beach-1.webp"
                fill={true}
                sizes="100vw"
                loading="lazy"
                alt="Sosúa Beach Img"
              />
            </div>
            <SectionHeading title="Location Information" />
            <p className="mx-auto w-11/12 sm:w-full">
              This 3 bedroom villa has everything you will ever need on your
              vacation. It is located just 15 minutes from the airport and a 5
              minute drive to the town of Sosúa where you will find everything
              you need. 3 Beaches, grocery stores, banks, a hospital, shopping
              and over 100 restaurants. Take a 15 minute drive to the town of
              Cabarete and enjoy a nice dinner on the beach, watch the cruise
              ships and be amazed by the incredible views of the sunset. After
              dinner, indulge yourself with the nightlife and dancing. Then come
              back to Mama's Paradise Villa for a cocktail or two and relax by
              the private pool and unwind. See Sunset Oasis Villa if you require
              additional accommodation. It is located across the street from
              Mama's Paradise.
            </p>
          </article>
        </section>
      </main>
    </Layout>
  );
}
