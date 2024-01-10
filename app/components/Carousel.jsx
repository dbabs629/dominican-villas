import Image from 'next/image'

export default function Carousel({ numOfImgs, imgPath, currentImgNum, setCurrentImgNum }) {
  return (
    <div className='relative flex flex-row w-full max-h-[600px] min-h-[675px]'>
      <button
        className='absolute z-10 h-full text-white bg-gray-700 opacity-50 px-7 hover:opacity-90'
        onClick={() => (currentImgNum <= 1 ? setCurrentImgNum(numOfImgs) : setCurrentImgNum(currentImgNum - 1))}>
        Prev
      </button>
      <div className=''>
        <Image
          className='z-0 object-cover w-full h-full max-w-full'
          src={`${imgPath}${currentImgNum}.jpg`}
          fill={true}
          alt='something 2'
        />
      </div>
      <button
        className='absolute right-0 z-10 h-full text-white bg-gray-700 opacity-50 px-7 hover:opacity-90'
        onClick={() => (currentImgNum + 1 > numOfImgs ? setCurrentImgNum(1) : setCurrentImgNum(currentImgNum + 1))}>
        Next
      </button>
    </div>
  )
}
