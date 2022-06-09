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
    <div className="w-screen bg-primary h-full  ">
      <header className="relative flex items-center justify-center h-96 overflow-hidden w-full ">
        <div className="relative text-white w-full  md:w-1/2 px-10 flex flex-col items-start z-20 ">
          <p className="my-4">{prevText}</p>
          <h1 className="text-3xl">
            {first} <span className="text-accent">{accent}</span>
          </h1>
          <p className="font-thin">{sub}</p>
          {buttonText && (
            <button className="btn btn-accent text-white">{buttonText}</button>
          )}
        </div>
        {video && (
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 min-w-full min-h-full max-w-none"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {image && (
          <div className="relative h-56 w-1/2 ">
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              alt={accent}
            />
          </div>
        )}
      </header>
    </div>
  )
}
