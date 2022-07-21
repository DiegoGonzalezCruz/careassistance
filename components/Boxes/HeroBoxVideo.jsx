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
    <div className="w-screen md:h-[80vh] relative bg-primary ">
      <motion.header
        animate="visible"
        initial="hidden"
        variants={buttonsVariants}
        className="relative flex items-center justify-center h-full md:overflow-hidden w-full "
      >
        <div className="text-white flex flex-col z-20 w-full h-full relative ">
          <motion.div
            variants={buttonsVariants}
            className="text-white flex flex-col z-20 relative h-full w-screen  bg-primary/50 items-center justify-center "
          >
            <div className="items-start  flex flex-col  w-3/4 gap-2 ">
              <motion.p variants={buttonsVariants} className="my-0  ">
                {prevText}
              </motion.p>

              <motion.h1 variants={buttonsVariants} className="  ">
                {first} <br /> <span className="text-accent ">{accent}</span>
              </motion.h1>

              <motion.p
                variants={buttonsVariants}
                className="font-thin w-1/2  "
              >
                {sub}
              </motion.p>

              {buttonText && (
                <motion.button
                  variants={buttonsVariants}
                  whileHover={'hover'}
                  className="my-2 h-10 btn-accent text-white font-normal  w-48 rounded-full"
                >
                  {buttonText}
                </motion.button>
              )}
            </div>
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
