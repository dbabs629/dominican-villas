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
    <div className="mx-auto grid w-full max-w-full grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
      {imgListLength.map((imgNum) =>
        currentImgNum === imgNum ? (
          <div
            key={imgNum * 1000}
            className="relative box-border h-20 max-w-full border md:h-24"
          >
            {!loaded && (
              <span
                key={imgNum * 2000}
                className="absolute z-10 h-full w-full max-w-full animate-pulse border bg-gray-300"
              />
            )}
            <Image
              key={imgNum}
              className="z-20 h-auto cursor-pointer border-2 border-blue-400 object-cover"
              src={`${imgPath}${imgNum}.jpg`}
              fill={true}
              sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.66vw, (max-width: 768px) 12.5vw, 10vw"
              alt="something 2"
              onClick={() => setCurrentImgNum(imgNum)}
            />
          </div>
        ) : (
          <div
            key={imgNum * 1000}
            className="relative box-border h-20 max-w-full border md:h-24"
          >
            {!loaded && (
              <span
                key={imgNum * 2000}
                className="absolute z-10 h-full w-full max-w-full animate-pulse border bg-gray-300"
              />
            )}
            <Image
              key={imgNum}
              className="z-20 h-auto cursor-pointer border-white object-cover opacity-80"
              src={`${imgPath}${imgNum}.jpg`}
              fill={true}
              sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.66vw, (max-width: 768px) 12.5vw, 10vw"
              alt="something 2"
              onClick={() => setCurrentImgNum(imgNum)}
              onLoad={() => imgNum === imgListLength && setLoaded(true)}
            />
          </div>
        ),
      )}
    </div>
  );
}
