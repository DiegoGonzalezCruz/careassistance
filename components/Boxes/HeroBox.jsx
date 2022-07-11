import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { buttonsVariants, overlayVariants } from '../../styles/animations'

export const HeroBox = ({
  prevText,
  text,
  accent,
  sub,
  image = '',
  buttonText = '',
  buttonHref = ''
}) => {
  return (
    <div className="w-screen md:h-[60vh] relative">
      <header className="py-10 relative flex flex-row items-center justify-center h-full w-full bg-white ">
        <div className="text-white flex flex-col z-20 w-full h-full relative ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={overlayVariants}
            className=" text-white flex flex-col z-20 relative mx-auto my-auto md:px-10  items-start gap-2"
          >
            <h1 className="text-primary font-Comfortaa font-thin text-xl">
              {prevText} <br />
              <span className="text-accent text-4xl">{accent}</span>
              <br />
              {text}
            </h1>
            <p variants={overlayVariants} className=" text-black w-full ">
              {sub}
            </p>

            {buttonText && (
              <motion.button
                variants={buttonsVariants}
                whileHover={'hover'}
                whileInView="visible"
                className=" my-2 h-10 lg:h-16 btn-accent text-white font-normal text-xs lg:text-xl w-48 lg:w-56 rounded-full"
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
          className="relative min-h-[50vh] h-full w-full "
        >
          <Image src={image} layout="fill" objectFit="contain" alt={accent} />
        </motion.div>
      </header>
    </div>
  )
}
