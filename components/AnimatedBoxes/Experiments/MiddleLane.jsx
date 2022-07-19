import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const MiddleLane = ({
  tecnologiaMovementX,
  tecnologiaMovementY,
  objectScaling,
  opacityRange,
  imagesCenter,
  opacityRangeInverted
}) => {
  return (
    <>
      <div className="flex flex-row justify-around w-1/3 relative">
        <motion.div
          style={{
            translateX: tecnologiaMovementX,
            translateY: tecnologiaMovementY,
            scale: objectScaling,
            // rotate: rotationMovement,
            opacity: opacityRange
          }}
          id="tecnologia"
          className="flex flex-col items-center w-24 "
        >
          <div className="relative h-24 w-24">
            <Image src={imagesCenter[0].src} layout="fill" alt="" />
          </div>
          <p className="text-white text-center">{imagesCenter[0].text}</p>
        </motion.div>

        <motion.div
          style={{
            translateX: tecnologiaMovementX,
            translateY: tecnologiaMovementY,
            scale: objectScaling,
            // rotate: rotationMovement,
            opacity: opacityRangeInverted
          }}
          className="absolute h-24 w-24 bg-[#00FFC2] rounded-full"
        ></motion.div>
      </div>
    </>
  )
}
