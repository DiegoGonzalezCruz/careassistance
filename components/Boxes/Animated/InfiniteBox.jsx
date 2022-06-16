import Image from 'next/image'
import React from 'react'

export const InfiniteBox = () => {
  return (
    <div className="w-screen h-[80vh] debug2">
      <div className="w-full h-full flex flex-row debug1">
        <div className="relative h-full w-full md:my-20 debug1">
          <Image
            src={'/img/nosotros/nosotros1.svg'}
            layout="fill"
            objectFit="contain"
            alt="nosotros"
          />
        </div>
        <div className="relative h-full w-full md:my-20">
          <Image
            src={'/img/nosotros/nosotros2.svg'}
            layout="fill"
            objectFit="contain"
            alt="nosotros"
          />
        </div>
        <div className="relative h-full w-full md:my-20">
          <Image
            src={'/img/nosotros/nosotros3.svg'}
            layout="fill"
            objectFit="contain"
            alt="nosotros"
          />
        </div>
        <div className="relative h-full w-full md:my-20">
          <Image
            src={'/img/nosotros/nosotros4.svg'}
            layout="fill"
            objectFit="contain"
            alt="nosotros"
          />
        </div>
      </div>
    </div>
  )
}
