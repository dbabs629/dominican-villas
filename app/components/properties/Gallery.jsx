'use client'
import Image from 'next/image'
export default function Gallery({ numOfImgs, imgPath }) {
  let imgListLength = Array.from({ length: numOfImgs }, (_, i) => i + 1)
  console.log(imgListLength)

  return (
    <div className='grid w-full max-w-full grid-cols-10'>
      {imgListLength.map((imgNum) => (
        <Image
          key={imgNum}
          className='h-auto max-w-full max-h-full'
          src={`${imgPath}${imgNum}.jpg`}
          width='200'
          height='200'
          alt='something 2'
        />
      ))}
    </div>
  )
}
