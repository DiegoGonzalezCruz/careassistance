import React from 'react'
import Image from 'next/image'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

export const BoxWhiteBGImage = () => {
  const { scrollY } = useViewportScroll()

  const boxVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh'
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  // scrollY.onChange((v) => console.log(v))
  const forwardY = useTransform(scrollY, [3500, 4300], [100, 1])

  return (
    <div className=" overflow-hidden h-[120vh] flex flex-col items-center justify-center">
      <motion.div
        initial={false}
        variants={boxVariants}
        // style={{ scale: forwardY }}
        className="overflow-hidden flex flex-row items-center justify-center h-full"
      >
        <motion.div
          variants={boxVariants}
          className="w-1/2 flex items-center justify-center h-full px-10"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae
            id consequuntur, alias necessitatibus laudantium fuga vitae ea aut
            nesciunt aperiam eligendi. Quos eius rem quia eum quibusdam impedit
            placeat.
          </p>
        </motion.div>

        <motion.div
          style={{ scale: forwardY }}
          variants={boxVariants}
          className="relative w-1/2 h-96 overflow-hidden "
        >
          <Image
            src={'/img/animations/building.svg'}
            layout="fill"
            alt="proposito"
            className="overflow-hidden"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
