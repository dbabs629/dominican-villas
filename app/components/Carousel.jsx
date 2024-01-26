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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = async (e) => {
    if (!touchEnd) {
    } else {
      if (touchEnd > touchStart && touchEnd > touchStart + 100) {
        currentImgNum <= 1
          ? setCurrentImgNum(numOfImgs)
          : setCurrentImgNum(currentImgNum - 1);
      } else if (touchEnd < touchStart && touchEnd < touchStart - 100) {
        currentImgNum + 1 > numOfImgs
          ? setCurrentImgNum(1)
          : setCurrentImgNum(currentImgNum + 1);
      } else {
        setTouchEnd(null);
        setTouchStart(null);
      }
    }
    setTouchEnd(null);
    setTouchStart(null);
  };

  return (
    <div className="relative flex h-96 max-w-full flex-row lg:h-[675px] xl:h-[750px] 2xl:h-[900px]">
      {!loaded && (
        <div className="absolute z-20 h-full w-full animate-pulse bg-gray-300"></div>
      )}
      <button
        className="absolute left-0 z-10 hidden h-full bg-gray-900 px-6 text-white opacity-40 hover:opacity-80 active:opacity-60 md:block lg:px-8"
        onClick={() =>
          currentImgNum <= 1
            ? setCurrentImgNum(numOfImgs)
            : setCurrentImgNum(currentImgNum - 1)
        }
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-3xl text-white" />
      </button>
      <div className="relative h-auto w-full">
        <Image
          className="h-auto max-w-full object-cover hover:cursor-pointer"
          src={`${imgPath}${currentImgNum}.jpg`}
          fill={true}
          sizes="100vw"
          alt="something 2"
          onClick={() => setDisplayModal(false)}
          onLoad={() => setLoaded(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </div>
      <button
        className="absolute right-0 z-10 hidden h-full bg-gray-900 px-6 text-white opacity-40 hover:opacity-80 active:opacity-60 md:block lg:px-8"
        onClick={() =>
          currentImgNum + 1 > numOfImgs
            ? setCurrentImgNum(1)
            : setCurrentImgNum(currentImgNum + 1)
        }
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-3xl text-white"
        />
      </button>
    </div>
  );
}
