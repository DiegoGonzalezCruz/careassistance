import Image from 'next/image'
import React from 'react'

export const HeroBoxVideo = ({
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
    <div className="w-screen md:h-[60vh] relative ">
      <header className="relative flex items-center justify-center h-full md:overflow-hidden w-full ">
        <div className="text-white flex flex-col z-20 w-full h-full relative ">
          <div className="text-white flex flex-col z-20 relative  py-4 h-full w-screen  bg-primary/50 items-center justify-center">
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
          <div className="absolute  h-full w-full">
            <video
              autoPlay
              loop
              muted
              className="z-10 object-cover min-h-full min-w-full w-full"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </header>
    </div>
  )
}
