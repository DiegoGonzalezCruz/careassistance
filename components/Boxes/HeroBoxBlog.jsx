import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { buttonsVariants, overlayVariants } from '../../styles/animations'

export const HeroBoxBlog = ({ prevText, text, accent, sub, image = '' }) => {
  return (
    <div className="w-screen md:h-[40vh] relative  bg-secondary">
      <header className=" flex flex-row items-center justify-center h-full w-full ">
        <div className="text-white flex flex-col w-1/2 h-full    ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={overlayVariants}
            className=" text-white flex flex-col z-20  mx-auto my-auto md:px-10 gap-2"
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
          className="absolute right-0 h-96 w-96 rounded-xl -bottom-1/4 "
        >
          <Image src={image} layout="fill" objectFit="contain" alt={accent} />
        </motion.div>
      </header>
    </div>
  )
}
