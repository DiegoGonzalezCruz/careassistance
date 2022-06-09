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
    <div className="bg-primary flex">
      <div
        className={`hero-content flex w-full items-center justify-center ${
          imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <div className="relative h-56 w-56">
          <Image
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
            layout="fill"
            objectFit="cover"
            alt={title}
          />
        </div>
        <div className="w-full text-white">
          <h2 className=" font-bold">{title}</h2>
          <p className="py-6">{text}</p>
          {/* {button && <button className="btn btn-primary">{'button'}</button>} */}
        </div>
      </div>
    </div>
  )
}
