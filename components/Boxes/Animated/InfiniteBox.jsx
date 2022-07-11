import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
// TODO : https://codesandbox.io/s/framer-motion-fun-scroll-forked-xbbkb

export const InfiniteBox = () => {
  return (
    <div className="w-screen h-[80vh] main overflow-auto">
      <div className="w-screen h-full flex flex-row wrap ">
        <div className="relative w-screen h-full flex flex-row ">
          <div drag className="relative h-full w-full ">
            <Image
              src={'/img/nosotros/vector.svg'}
              layout="fill"
              objectFit="contain"
              objectPosition={0}
              alt="nosotros"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
