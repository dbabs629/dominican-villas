import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function ImageModal({
  displayModal,
  setDisplayModal,
  imgPath,
  currentImgNum,
}) {
  const handleClick = () => {
    setDisplayModal(true);
    window.scrollTo(0, 0);
  };
  useEffect(() => {}, [displayModal, setDisplayModal, imgPath, currentImgNum]);

  return (
    <>
      {!displayModal && (
        <div
          className={`fixed top-0 z-40 h-screen w-full overscroll-none bg-gray-900 opacity-95`}
        >
          <button
            className="static float-right mt-2 h-auto w-20 cursor-pointer text-white"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faXmark} className="static text-5xl" />
          </button>
          <Image
            className="m-auto max-h-[95%] object-contain p-4"
            src={`${imgPath}${currentImgNum}.jpg`}
            alt={`Carousel Image of Dominican Villa ${imgPath}${currentImgNum}.jpg`}
            quality={90}
            fill={true}
            sizes="100vw"
            loading="eager"
            onClick={handleClick}
          />
        </div>
      )}
    </>
  );
}
