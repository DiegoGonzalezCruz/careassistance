import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export const BoxWithImageRight = ({
  image,
  title,
  text,
  imagePosition,
  button = ''
}) => {
  const iconVariants = {
    hover: {
      scale: 0.95,
      duration: 1,
      x: 50
    }
    // initial: {
    //   x: 0
    // }
  }

  return (
    <div className="bg-primary flex overflow-hidden min-h-[50vh] w-screen">
      <div className="flex flex-col md:flex-row-reverse w-full items-center justify-center">
        <motion.div
          // transition={{ ease: 'easeOut', duration: 2 }}
          whileHover="hover"
          variants={iconVariants}
          className="relative h-56 lg:h-full w-full rounded-2xl translate-x-10"
        >
          <Image
            src={image}
            className="max-w-sm shadow-2xl rounded-2xl "
            layout="fill"
            objectFit="cover"
            alt={title}
          />
        </motion.div>
        <div className=" text-white w-full h-full ml-5 px-5 flex flex-col items-center justify-center">
          <h2 className="font-bold">{title}</h2>
          <p className="py-6">{text}</p>
          {/* {button && <button className="btn btn-primary">{'button'}</button>} */}
        </div>
      </div>
    </div>
  )
}
