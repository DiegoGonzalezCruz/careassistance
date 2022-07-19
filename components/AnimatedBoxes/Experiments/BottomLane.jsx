import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export const BottomLane = ({
  seguimientoMovementX,
  seguimientoMovementY,
  objectScaling,
  opacityRange,
  opacityRangeInverted,
  imagesBottom,
  uxMovementX,
  uxMovementY
}) => {
  return (
    <div className="flex flex-row justify-around w-1/3 ">
      <div className=" relative">
        <motion.div
          className=" flex flex-col items-center w-24   relative"
          style={{
            translateX: seguimientoMovementX,
            translateY: seguimientoMovementY,
            scale: objectScaling,
            opacity: opacityRange
          }}
        >
          <div className="relative h-24 w-24 de">
            <Image src={imagesBottom[0].src} layout="fill" alt="" />
          </div>
          <p className="text-white text-center">{imagesBottom[0].text}</p>
        </motion.div>
        <motion.div
          style={{
            translateX: seguimientoMovementX,
            translateY: seguimientoMovementY,
            scale: objectScaling,
            // rotate: rotationMovement,
            opacity: opacityRangeInverted
          }}
          className=" absolute top-0 h-24 w-24 rounded-full bg-[#F2DCFF]"
        ></motion.div>
      </div>

      {/* Division */}
      <div className="relative">
        <motion.div
          className="flex flex-col items-center w-24 "
          style={{
            translateX: uxMovementX,
            translateY: uxMovementY,
            scale: objectScaling,
            // rotate: rotationMovement,
            opacity: opacityRange
          }}
        >
          <div className="relative h-24 w-24">
            <Image src={imagesBottom[1].src} layout="fill" alt="" />
          </div>
          <p className="text-white text-center">{imagesBottom[1].text}</p>
        </motion.div>
        <motion.div
          style={{
            translateX: uxMovementX,
            translateY: uxMovementY,
            scale: objectScaling,
            // rotate: rotationMovement,
            opacity: opacityRangeInverted
          }}
          className=" absolute -top-1 h-24 w-24 rounded-full bg-[#D1FF9C]"
        ></motion.div>
      </div>
    </div>
  )
}
