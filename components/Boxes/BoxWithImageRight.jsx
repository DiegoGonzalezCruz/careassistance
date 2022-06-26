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
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween'
      }
    },
    offscreen: {
      opacity: 0,
      x: -100
    }
  }

  return (
    <div className="bg-primary flex overflow-hidden min-h-[100vh] w-screen">
      <div className="flex flex-col md:flex-row-reverse w-full items-center justify-center">
        <motion.div
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.1 }}
          initial="offscreen"
          variants={iconVariants}
          className="relative h-56 lg:h-full w-full  translate-x-10 flex items-center "
        >
          <div className="w-full h-1/2 rounded-l-2xl relative overflow-hidden">
            <Image
              src={image}
              className="max-w-sm shadow-2xl "
              layout="fill"
              objectFit="cover"
              alt={title}
            />
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants}
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.1 }}
          initial="offscreen"
          className=" text-white w-full h-full ml-5 px-5 flex flex-col items-center justify-center"
        >
          <h2 className="font-bold">{title}</h2>
          <p className="py-6">{text}</p>
          {/* {button && <button className="btn btn-primary">{'button'}</button>} */}
        </motion.div>
      </div>
    </div>
  )
}
