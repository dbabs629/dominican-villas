import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Carousel({
  numOfImgs,
  imgPath,
  currentImgNum,
  setCurrentImgNum,
  setDisplayModal,
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative flex h-96 max-w-full flex-row lg:h-[675px]">
      {!loaded && (
        <div className="absolute z-20 h-full w-full animate-pulse bg-gray-300"></div>
      )}
      <button
        className="absolute left-0 z-10 hidden h-full bg-blue-400 px-6 text-white opacity-50 hover:opacity-100 md:block lg:px-8 lg:hover:bg-blue-400"
        onClick={() =>
          currentImgNum <= 1
            ? setCurrentImgNum(numOfImgs)
            : setCurrentImgNum(currentImgNum - 1)
        }
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-2xl text-white" />
      </button>
      <div className="relative h-auto w-full">
        <Image
          className="h-auto max-w-full object-cover"
          src={`${imgPath}${currentImgNum}.jpg`}
          fill={true}
          placeholder="blur"
          blurDataURL={`${imgPath}${currentImgNum}.jpg`}
          alt="something 2"
          onClick={() => setDisplayModal(false)}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <button
        className="absolute right-0 hidden h-full bg-blue-400 px-6 text-white opacity-50 hover:opacity-100 md:block lg:px-8 lg:hover:opacity-100"
        onClick={() =>
          currentImgNum + 1 > numOfImgs
            ? setCurrentImgNum(1)
            : setCurrentImgNum(currentImgNum + 1)
        }
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-2xl text-white"
        />
      </button>
    </div>
  );
}
