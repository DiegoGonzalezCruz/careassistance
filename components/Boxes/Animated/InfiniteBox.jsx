import Image from 'next/image'
import React from 'react'
// TODO : https://codesandbox.io/s/framer-motion-fun-scroll-forked-xbbkb

export const InfiniteBox = () => {
  return (
    <div className="w-screen h-[80vh] main overflow-auto">
      <div className="w-screen h-full flex flex-row wrap">
        <div className="relative w-screen h-full flex flex-row overflow-scroll ">
          <div className="relative h-full w-full ">
            <Image
              src={'/img/nosotros/nosotros1.svg'}
              layout="fill"
              objectFit="contain"
              alt="nosotros"
            />
          </div>
          <div className="relative h-full w-full ">
            <Image
              src={'/img/nosotros/nosotros2.svg'}
              layout="fill"
              objectFit="contain"
              alt="nosotros"
            />
          </div>
          <div className="relative h-full w-full ">
            <Image
              src={'/img/nosotros/nosotros3.svg'}
              layout="fill"
              objectFit="contain"
              alt="nosotros"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
