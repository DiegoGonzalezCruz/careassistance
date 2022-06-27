//TODO : https://codesandbox.io/s/framer-motion-scroll-linked-animation-useviewportscroll-usetransform-and-custom-useelementviewportposition-hook-forked-btv02e

import { useEffect, useRef, useState } from 'react'

import {
  motion,
  transform,
  useAnimation,
  useElementScroll,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import { useWindowSize } from '../hooks/useWindowSize'

export const AnimatedBox2 = ({ text }) => {
  // const { scrollYProgress } = useViewportScroll()
  const ref = useRef(null)

  const rainbow = [
    '#FF0000',
    '#FF7F00',
    '#FFFF00',
    '#00FF00',
    '#0000FF',
    '#4B0082',
    '#9400D3'
  ]

  const range = Array.from(Array(rainbow.length).keys()).map(
    (v) => v / (rainbow.length - 1)
  )
  const { scrollYProgress } = useElementScroll(ref)

  // scrollYProgress.onChange((val) => console.log(val, 'scroll progress'))

  // const size = useWindowSize()

  // const forwardX = useTransform(scrollY, [2200, 2500], ['200%', '-200%'])

  const rainbowColors = useTransform(scrollYProgress, range, rainbow)
  const forwardX = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
  const backwardsX = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])

  return (
    <div ref={ref} className="h-[300vh] debug1 bg-primary">
      <div className="sticky-wrapper sticky top-0 h-[100vh] w-screen flex flex-col items-start justify-center overflow-hidden debug2">
        <motion.p
          className="motion-paragraph text-white text-7xl font-bold uppercase"
          style={{ x: forwardX, WebkitTextStrokeColor: rainbowColors }}
        >
          {text.repeat(3).trim()}
        </motion.p>
        <motion.p
          className="motion-paragraph text-white text-7xl font-bold uppercase"
          style={{ x: backwardsX, WebkitTextStrokeColor: rainbowColors }}
        >
          {text.repeat(3).trim()}
        </motion.p>
      </div>
    </div>
  )
}
