import Image from 'next/image'
import React from 'react'

export const BoxWithImageRight = ({
  image,
  title,
  text,
  imagePosition,
  button = ''
}) => {
  return (
    <div className="bg-primary flex overflow-hidden min-h-[50vh] w-screen  items-center ">
      <div className=" flex flex-col md:flex-row-reverse h-full items-center justify-center gap-2">
        <div className={`relative h-56 w-full rounded-2xl translate-x-10`}>
          <Image
            src={image}
            className="max-w-sm shadow-2xl rounded-2xl "
            layout="fill"
            objectFit="cover"
            alt={title}
          />
        </div>
        <div className=" text-white w-full h-full px-5 flex flex-col items-center justify-center">
          <h2 className="font-bold">{title}</h2>
          <p className="py-6">{text}</p>
          {/* {button && <button className="btn btn-primary">{'button'}</button>} */}
        </div>
      </div>
    </div>
  )
}
