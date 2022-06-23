import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { buttonsVariants } from '../../styles/animations'

export const HeroBoxVideo = ({
  prevText,
  first,
  accent,
  sub,
  video = '',
  image = '',
  buttonText = '',
  buttonHref = ''
}) => {
  return (
    <div className="w-screen md:h-[80vh] relative bg-primary">
      <motion.header
        animate="visible"
        initial="hidden"
        variants={buttonsVariants}
        className="relative flex items-center justify-center h-full md:overflow-hidden w-full "
      >
        <div className="text-white flex flex-col z-20 w-full h-full relative ">
          <motion.div
            variants={buttonsVariants}
            className="text-white flex flex-col z-20 relative  py-4 h-full w-screen  bg-primary/50 items-center justify-center"
          >
            <motion.p variants={buttonsVariants} className="my-0 text-center ">
              {prevText}
            </motion.p>
            <motion.h1
              variants={buttonsVariants}
              className=" text-center my-2 w-1/2 mx-auto"
            >
              {first} <span className="text-accent ">{accent}</span>
            </motion.h1>
            <motion.p
              variants={buttonsVariants}
              className="font-thin text-center  my-2 w-3/4 mx-auto"
            >
              {sub}
            </motion.p>
            {buttonText && (
              <motion.button
                variants={buttonsVariants}
                whileHover={'hover'}
                className="text-center mx-auto my-2 h-10 btn-accent text-white font-normal  w-48 rounded-full"
              >
                {buttonText}
              </motion.button>
            )}
          </motion.div>
          <div className="absolute  h-full w-full">
            <video
              autoPlay
              loop
              muted
              className="z-10 object-cover min-h-full min-w-full w-full"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.header>
    </div>
  )
}
