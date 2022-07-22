import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export const BoxWithImageRight = ({
  image,
  title,
  text,
  imagePosition,
  button = '',
  bgColor = 'bg-primary'
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
    <div
      className={`${bgColor} flex overflow-hidden min-h-[80vh] w-screen relative`}
    >
      <div className="flex flex-col md:flex-row-reverse w-full items-center justify-center">
        <motion.div
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.1 }}
          initial="offscreen"
          variants={iconVariants}
          className="relative h-full w-full  translate-x-10 flex items-center z- "
        >
          <div className="w-full h-[60vh] rounded-l-2xl relative overflow-hidden ">
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
          className={`${
            bgColor === 'bg-primary' ? 'text-white' : 'text-black'
          } w-full h-full px-5 flex flex-col items-center justify-center `}
        >
          <div className=" w-3/4 mx-auto ">
            <h2 className="font-bold text-primary font-FiraSans">{title}</h2>
            <p className="py-6">{text}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
