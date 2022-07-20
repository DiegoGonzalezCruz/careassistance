import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { overlayVariants } from '../../styles/animations'

export const HeroBoxProgramas = ({
  prevText,
  text,
  accent,
  sub,
  image = '',
  buttonText = '',
  buttonHref = ''
}) => {
  return (
    <div className="w-screen h-[80vh] ">
      <header className="relative flex flex-col items-center justify-center h-full w-3/4 mx-auto bg-white ">
        <div className="text-white flex flex-col z-20 w-full relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={overlayVariants}
            className=" text-white flex flex-col z-20 relative md:px-10 gap-2 "
          >
            <h1 className="text-primary font-Comfortaa font-thin text-center mt-10">
              {prevText} <br />
              <span className="text-accent text-4xl">{accent}</span>
              <br />
              {text}
            </h1>
          </motion.div>
        </div>

        <motion.div
          variants={overlayVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="onHover"
          className="relative h-full w-full"
        >
          <Image src={image} layout="fill" objectFit="contain" alt={accent} />
        </motion.div>
        <div>
          <p
            variants={overlayVariants}
            className=" text-black w-full text-center"
          >
            {sub}
          </p>
        </div>
      </header>
    </div>
  )
}
