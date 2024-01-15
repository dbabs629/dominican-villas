import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
export default function Carousel({ numOfImgs, imgPath, currentImgNum, setCurrentImgNum, setDisplayModal }) {
  return (
    <div className='flex flex-row h-[675px]'>
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
          style={{ objectFit: 'cover' }}
          alt='something 2'
          onClick={() => setDisplayModal(false)}
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
