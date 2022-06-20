import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { overlayVariants } from '../../styles/animations'

export const HeroBox = ({
  prevText,
  first,
  accent,
  sub,
  image = '',
  buttonText = '',
  buttonHref = ''
}) => {
  return (
    <div className="w-screen md:h-[60vh] relative">
      <header className="py-10 relative flex flex-row items-center justify-center h-full w-full bg-primary/50">
        <div className="text-white flex flex-col z-20 w-full h-full relative ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={overlayVariants}
            className=" text-white flex flex-col z-20 relative mx-auto my-auto md:px-20"
          >
            <motion.p variants={overlayVariants} className="my-0 text-center  ">
              {prevText}
            </motion.p>
            <motion.h1
              variants={overlayVariants}
              className=" text-center my-2  mx-auto "
            >
              {first} <span className="text-accent ">{accent}</span>
            </motion.h1>
            <motion.p
              variants={overlayVariants}
              className="font-thin text-center text-sm my-2 sm:w-3/4 lg:text-xl mx-auto"
            >
              {sub}
            </motion.p>
            {buttonText && (
              <motion.button
                variants={overlayVariants}
                className="text-center mx-auto my-2 h-10 lg:h-16 btn-accent text-white font-normal text-xs lg:text-xl w-48 lg:w-56 rounded-full"
              >
                {buttonText}
              </motion.button>
            )}
          </motion.div>
        </div>

        <motion.div
          variants={overlayVariants}
          initial="hidden"
          whileInView="visible"
          className="relative sm:min-h-[50vh] h-48 w-1/2 translate-y-28"
        >
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt={accent}
          />
        </motion.div>
      </header>
    </div>
  )
}
