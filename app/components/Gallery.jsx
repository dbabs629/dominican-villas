import Image from 'next/image'

export default function Gallery({ numOfImgs, imgPath, currentImgNum, setCurrentImgNum }) {
  let imgListLength = Array.from({ length: numOfImgs }, (_, i) => i + 1)

  return (
    <div className='grid w-full max-w-full grid-cols-10 mx-auto'>
      {imgListLength.map((imgNum) =>
        currentImgNum === imgNum ? (
          <div className='box-border relative h-24 max-w-full'>
            <Image
              key={imgNum}
              className='border-2 border-blue-400 cursor-pointer '
              src={`${imgPath}${imgNum}.jpg`}
              fill={true}
              alt='something 2'
              onClick={() => setCurrentImgNum(imgNum)}
            />
          </div>
        ) : (
          <div className='box-border relative h-24 max-w-full'>
            <Image
              key={imgNum}
              className='border-white cursor-pointer opacity-80'
              src={`${imgPath}${imgNum}.jpg`}
              fill={true}
              alt='something 2'
              onClick={() => setCurrentImgNum(imgNum)}
            />
          </div>
        )
      )}
    </div>
  )
}
