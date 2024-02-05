import { useState } from "react";
import Image from "next/image";

export default function Gallery({
  numOfImgs,
  imgPath,
  currentImgNum,
  setCurrentImgNum,
}) {
  let imgListLength = Array.from({ length: numOfImgs }, (_, i) => i + 1);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="mx-auto grid w-full max-w-full grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {imgListLength.map((imgNum) =>
        currentImgNum === imgNum ? (
          <div
            key={imgNum * 1000}
            className="relative box-border h-16 max-w-full border xxs:h-20 s:h-28 md:h-28 lg:h-28 xl:h-32 2xl:h-36"
          >
            {!loaded && (
              <span
                key={imgNum * 2000}
                className="absolute z-10 h-full w-full max-w-full animate-pulse border bg-gray-300"
              />
            )}
            <Image
              key={imgNum * 3000}
              className="z-20 h-auto max-h-full cursor-pointer border-2 border-blue-400 object-cover active:scale-95"
              src={`${imgPath}${imgNum}.jpg`}
              fill={true}
              sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.66vw, (max-width: 1024px) 12.5vw, 10vw"
              alt={`Image of Dominican Villa ${imgPath}${currentImgNum}.jpg`}
              onClick={() => setCurrentImgNum(imgNum)}
            />
          </div>
        ) : (
          <div
            key={imgNum * 4000}
            className="relative box-border h-16 max-w-full border xxs:h-20 s:h-28 md:h-28 lg:h-28 xl:h-32 2xl:h-36"
          >
            {!loaded && (
              <span
                key={imgNum * 5000}
                className="absolute z-10 h-full w-full max-w-full animate-pulse border bg-gray-300"
              />
            )}
            <Image
              key={imgNum * 6000}
              className="z-20 h-auto max-h-full cursor-pointer border-white object-cover opacity-80 active:scale-95"
              src={`${imgPath}${imgNum}.jpg`}
              fill={true}
              sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.66vw, (max-width: 1024px) 12.5vw, 10vw"
              alt={`Image of Dominican Villa ${imgPath}${currentImgNum}.jpg`}
              onClick={() => setCurrentImgNum(imgNum)}
              onLoad={() => imgNum === imgListLength && setLoaded(true)}
            />
          </div>
        ),
      )}
    </div>
  );
}
