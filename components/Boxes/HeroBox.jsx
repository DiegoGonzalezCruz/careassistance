import Image from 'next/image'
import React from 'react'

export const HeroBox = ({
  prevText,
  first,
  accent,
  sub,
  video = '',
  image = '',
  buttonText = '',
  buttonHref = ''
}) => {
  return (
    <div className="w-screen h-full relative ">
      <header className=" relative flex flex-row items-center justify-center h-96 md:overflow-hidden w-full bg-primary/50">
        <div className="text-white  flex flex-col z-20 w-full h-full relative ">
          <div className="text-white flex flex-col z-20 w-1/2 relative mx-auto my-auto">
            <p className="my-0 text-center text-sm">{prevText}</p>
            <h1 className="text-4xl text-center my-2 w-1/2 mx-auto">
              {first} <span className="text-accent ">{accent}</span>
            </h1>
            <p className="font-thin text-center text-sm my-2 w-3/4 mx-auto">
              {sub}
            </p>
            {buttonText && (
              <button className="text-center mx-auto my-2 h-10 btn-accent text-white font-normal text-xs w-48 rounded-full">
                {buttonText}
              </button>
            )}
          </div>
        </div>

        <div className="relative h-56 w-1/2 ">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt={accent}
          />
        </div>
      </header>
    </div>
  )
}
