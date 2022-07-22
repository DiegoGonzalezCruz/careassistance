import Image from 'next/image'
import React from 'react'

export const TestimoniosBox = ({ name, title, text, img }) => {
  return (
    <div className="w-full bg-base-100 ">
      <div className=" flex flex-col items-start gap-2">
        <h3 className=" text-base font-bold">{name}</h3>
        <div className="flex flex-row  items-center justify-center gap-2">
          <div className="relative h-24 w-24 self-start ">
            <Image
              src="/img/clientes/quotes.png"
              layout="fill"
              objectFit="contain"
              objectPosition={'top'}
            />
          </div>
          <p className="text-left">{text.replace(/<[^>]*>?/gm, '')}</p>
        </div>
        {img && (
          <div className="relative w-32 h-32">
            <Image
              src={img}
              layout="fill"
              objectFit="contain"
              alt="testimonios"
            />
          </div>
        )}
        {title && <p className="text-base font-bold text-primary">{title}</p>}
      </div>
    </div>
  )
}
