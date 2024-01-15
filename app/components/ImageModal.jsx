import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function ImageModal({ displayModal, setDisplayModal, imgPath, currentImgNum }) {
  const handleClick = () => {
    setDisplayModal(true)
    window.scrollTo(0, 0)
  }
  return (
    <>
      {!displayModal && (
        <div className={`fixed top-0 z-40 w-full h-screen bg-gray-900 opacity-95 overscroll-none`}>
          <button className='static float-right w-20 h-auto mt-2 text-white cursor-pointer' onClick={handleClick}>
            <FontAwesomeIcon icon={faXmark} className='static text-5xl' />
          </button>
          <Image
            className='p-10 mt-4'
            src={`${imgPath}${currentImgNum}.jpg`}
            alt='image'
            fill={true}
            style={{ objectFit: 'contain' }}
            onClick={handleClick}
          />
        </div>
      )}
    </>
  )
}
