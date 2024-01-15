import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
export default function Carousel({ numOfImgs, imgPath, currentImgNum, setCurrentImgNum, setDisplayModal }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className='relative flex flex-row max-w-full h-[675px]'>
      {!loaded && <div className='absolute z-20 w-full h-full bg-gray-300 animate-pulse'></div>}
      <button
        className='h-full px-8 text-white bg-blue-300 hover:bg-blue-400'
        onClick={() => (currentImgNum <= 1 ? setCurrentImgNum(numOfImgs) : setCurrentImgNum(currentImgNum - 1))}>
        <FontAwesomeIcon icon={faChevronLeft} className='text-2xl text-white' />
      </button>
      <div className='relative w-full h-auto'>
        <Image
          className='h-auto max-w-full'
          src={`${imgPath}${currentImgNum}.jpg`}
          fill={true}
          placeholder='blur'
          blurDataURL={`${imgPath}${currentImgNum}.jpg`}
          style={{ objectFit: 'cover' }}
          alt='something 2'
          onClick={() => setDisplayModal(false)}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <button
        className='h-full px-8 text-white bg-blue-300 hover:bg-blue-400'
        onClick={() => (currentImgNum + 1 > numOfImgs ? setCurrentImgNum(1) : setCurrentImgNum(currentImgNum + 1))}>
        <FontAwesomeIcon icon={faChevronRight} className='text-2xl text-white' />
      </button>
    </div>
  )
}
