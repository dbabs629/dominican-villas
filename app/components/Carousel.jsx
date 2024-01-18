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

  let delay = (time) => {
    return new Promise((res) => {
      setTimeout(res, time);
    });
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = async (e) => {
    if (touchEnd > touchStart) {
      currentImgNum <= 1
        ? setCurrentImgNum(numOfImgs)
        : setCurrentImgNum(currentImgNum - 1);
    } else if (touchEnd < touchStart) {
      currentImgNum + 1 > numOfImgs
        ? setCurrentImgNum(1)
        : setCurrentImgNum(currentImgNum + 1);
    } else {
      console.log(e.targetTouches[0].clientX);
    }
    e.target.disabled = true;
    await delay(300);
    e.target.disabled = false;
  };

  return (
    <div className="relative flex h-96 max-w-full flex-row lg:h-[675px]">
      {!loaded && (
        <div className="absolute z-20 h-full w-full animate-pulse bg-gray-300"></div>
      )}
      <button
        className="absolute left-0 z-10 hidden h-full bg-blue-400 px-6 text-white opacity-40 hover:opacity-80 md:block lg:px-8"
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
          priority={true}
          fill={true}
          sizes="100%"
          quality={100}
          alt="something 2"
          onClick={() => setDisplayModal(false)}
          onLoad={() => setLoaded(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </div>
      <button
        className="absolute right-0 z-10 hidden h-full bg-blue-400 px-6 text-white opacity-40 hover:opacity-80 md:block lg:px-8"
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
