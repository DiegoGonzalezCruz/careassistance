import Image from 'next/image'
import React from 'react'

export const TestimoniosBox = ({ name, title, text, img }) => {
  return (
    <div className="w-full bg-base-100 ">
      <div className=" flex flex-col items-start ">
        <p className="text-left">{text.replace(/<[^>]*>?/gm, '')}</p>
        {img && (
          <div className="relative w-24 h-24">
            <Image
              src={img}
              layout="fill"
              objectFit="contain"
              alt="testimonios"
            />
          </div>
        )}
        <h3 className=" text-base font-bold">{name}</h3>
        {title && <p className="text-base font-bold text-primary">{title}</p>}
      </div>
    </div>
  )
}
