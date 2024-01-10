import Image from 'next/image'

export default function Gallery({ numOfImgs, imgPath, currentImgNum, setCurrentImgNum }) {
  let imgListLength = Array.from({ length: numOfImgs }, (_, i) => i + 1)

  return (
    <div className='grid w-full max-w-full grid-cols-10'>
      {imgListLength.map((imgNum) =>
        currentImgNum === imgNum ? (
          <Image
            key={imgNum}
            className='h-auto max-w-full max-h-full border-2 border-blue-400 cursor-pointer'
            src={`${imgPath}${imgNum}.jpg`}
            width='200'
            height='200'
            alt='something 2'
            onClick={() => setCurrentImgNum(imgNum)}
          />
        ) : (
          <Image
            key={imgNum}
            className='h-auto max-w-full max-h-full cursor-pointer'
            src={`${imgPath}${imgNum}.jpg`}
            width='200'
            height='200'
            alt='something 2'
            onClick={() => setCurrentImgNum(imgNum)}
          />
        )
      )}
    </div>
  )
}
