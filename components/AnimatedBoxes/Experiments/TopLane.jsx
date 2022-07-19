import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const TopLane = ({
  inhouseMovementX,
  inhouseMovementY,
  objectScaling,
  opacityRange,
  imagesTop,
  opacityRangeInverted,
  canalesMovementX,
  canalesMovementY
}) => {
  return (
    <div className="iconLine flex flex-row justify-around w-1/3">
      {/* Inhouse */}
      <div className="relative">
        <motion.div
          className="flex flex-col items-center w-24 relative "
          id="inhouse"
          style={{
            translateX: inhouseMovementX,
            translateY: inhouseMovementY,
            scale: objectScaling,
            // rotate: rotationMovement,
            opacity: opacityRange
          }}
        >
          <div className="relative h-24 w-24">
            <Image src={imagesTop[0].src} layout="fill" className="" alt="" />
          </div>
          <p className="text-white text-center ">{imagesTop[0].text}</p>
        </motion.div>

        <motion.div
          style={{
            translateX: inhouseMovementX,
            translateY: inhouseMovementY,
            scale: objectScaling,
            // rotate: rotationMovement,
            opacity: opacityRangeInverted
          }}
          className="absolute -top-1 h-24 w-24 bg-accent rounded-full "
        ></motion.div>
      </div>

      {/* Canales */}
      <div className="relative">
        <motion.div
          className="flex flex-col items-center w-24  "
          id="canales"
          style={{
            translateX: canalesMovementX,
            translateY: canalesMovementY,
            scale: objectScaling,
            // rotate: rotationMovement,
            opacity: opacityRange
          }}
        >
          <div className="relative h-24 w-24">
            <Image src={imagesTop[1].src} layout="fill" alt="" />
          </div>
          <p className="text-white text-center">{imagesTop[1].text}</p>
        </motion.div>
        <motion.div
          style={{
            translateX: canalesMovementX,
            translateY: canalesMovementY,
            scale: objectScaling,
            // rotate: rotationMovement,
            opacity: opacityRangeInverted
          }}
          className="absolute -top-1 h-24 w-24 bg-[#00EEFF] rounded-full "
        ></motion.div>
      </div>
    </div>
  )
}
