import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { buttonsVariants, overlayVariants } from '../../styles/animations'

export const HeroBoxContacto = ({
  prevText,
  text,
  accent,
  sub,
  image = ''
}) => {
  return (
    <div className="w-screen md:h-[40vh] relative ">
      <header className="py-10 relative flex flex-row items-center justify-center h-full w-full bg-primary ">
        <div className="text-white flex flex-col z-20 w-2/3 h-full relative ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={overlayVariants}
            className=" text-white flex flex-col z-20 relative mx-auto my-auto md:px-10  items-start gap-2"
          >
            <h1 className="text-white font-Comfortaa font-thin text-xl">
              {prevText} <br />
              <span className="text-accent text-4xl">{accent}</span>
              <br />
              {text}
            </h1>
            <p variants={overlayVariants} className=" text-white w-full ">
              {sub}
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={overlayVariants}
          initial="hidden"
          whileInView="visible"
          className="absolute right-0 -bottom-1/3 h-96 w-96  object-none translate-y-1/4 rounded-xl"
        >
          <Image
            src={image}
            layout="fill"
            objectFit="contain"
            alt={accent}
            className="rounded-xl object-cover w-full h-auto"
          />
        </motion.div>
      </header>
    </div>
  )
}
