import React from 'react'
import Image from 'next/image'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

export const BoxWhiteBGImage = () => {
  const { scrollY } = useViewportScroll()

  // scrollY.onChange((v) => console.log(v))
  const forwardY = useTransform(scrollY, [4500, 5200], [200, 1])

  return (
    <div className="debug1 overflow-hidden h-[120vh] flex flex-col items-center justify-center">
      <motion.div
        initial={false}
        style={{ scale: forwardY, originY: 0.5, originX: 0.7 }}
        className="overflow-hidden flex flex-row items-center justify-center"
      >
        <div className="w-1/2 flex items-center justify-center debug2 px-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae
            id consequuntur, alias necessitatibus laudantium fuga vitae ea aut
            nesciunt aperiam eligendi. Quos eius rem quia eum quibusdam impedit
            placeat.
          </p>
        </div>
        <div className="relative w-1/2 h-96 overflow-hidden debug2">
          <Image
            src={'/img/animations/building.svg'}
            layout="fill"
            alt="proposito"
            className="overflow-hidden"
          />
        </div>
      </motion.div>
    </div>
  )
}
