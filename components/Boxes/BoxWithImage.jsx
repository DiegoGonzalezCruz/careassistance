import Image from 'next/image'
import React from 'react'

export const BoxWithImage = ({
  image,
  title,
  text,
  imagePosition,
  button = ''
}) => {
  return (
    <div className="bg-primary flex debug1 overflow-hidden">
      <div
        className={`hero-content flex w-full items-center justify-center  ${
          imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <div
          className={`relative h-56 w-full rounded-2xl  
        ${imagePosition === 'right' ? 'translate-x-10' : '-translate-x-10'}
        `}
        >
          <Image
            src={image}
            className="max-w-sm shadow-2xl rounded-2xl "
            layout="fill"
            objectFit="cover"
            alt={title}
          />
        </div>
        <div className=" text-white w-full px-5">
          <h2 className="font-bold">{title}</h2>
          <p className="py-6">{text}</p>
          {/* {button && <button className="btn btn-primary">{'button'}</button>} */}
        </div>
      </div>
    </div>
  )
}
