'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Carousel({ numOfImgs, imgPath, smallImgPath }) {
  const [sliderIndex, setSliderIndex] = useState(1)
  // const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {}, [sliderIndex])

  // let handleLoad = () => {
  //   setImgLoaded(true)
  // }

  return (
    <div className='relative flex flex-row w-full max-h-[600px] min-h-[675px]'>
      <button
        className='absolute z-10 h-full text-white bg-gray-700 opacity-50 px-7 hover:opacity-90'
        onClick={() => (sliderIndex <= 1 ? setSliderIndex(numOfImgs) : setSliderIndex(sliderIndex - 1))}>
        Prev
      </button>
      <div className=''>
        {/* <img loading='lazy' src={`${imgPath}${sliderIndex}.jpg`} className='object-cover w-full h-full' alt='Image' /> */}
        <Image
          className='z-0 object-cover w-full h-full max-w-full'
          src={`${imgPath}${sliderIndex}.jpg`}
          fill={true}
          alt='something 2'
        />
      </div>
      <button
        className='absolute right-0 z-10 h-full text-white bg-gray-700 opacity-50 px-7 hover:opacity-90'
        onClick={() => (sliderIndex + 1 > numOfImgs ? setSliderIndex(0) : setSliderIndex(sliderIndex + 1))}>
        Next
      </button>
    </div>
  )
}
