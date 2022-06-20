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
  const { scrollY } = useViewportScroll()
  const ref = useRef(null)
  // const { scrollY } = useElementScroll(ref)

  // scrollY.onChange((val) => console.log(val))

  const size = useWindowSize()

  const forwardX = useTransform(scrollY, [2200, 2500], ['200%', '-200%'])

  const [enter, setEnter] = useState(size.height * 1)
  const [leave, setLeave] = useState(size.height * 1)

  const control = useAnimation()

  const animationBox = {
    // visible: { x: forwardX, color: rainbowColors }
    visible: {
      opacity: 1
      // transition: {
      //   delay: 0.5,
      //   type: 'tween'
      // }
    },
    hidden: {
      opacity: 0
    }
  }

  const onViewportEnter = () => {
    // console.log(value)
    // console.log(scrollY.current, 'onviewportenter')
    setEnter(scrollY.current)

    // control.start('visible')
  }
  const onViewportLeave = () => {
    // console.log(value)
    // console.log(scrollY.current, 'onviewportleave')
    setLeave(scrollY.current)
    control.start('hidden')
  }

  return (
    <div className="overflow-scroll h-[100vh] w-screen bg-primary flex flex-col items-center justify-center ">
      <div className="sticky-wrapper flex flex-col items-center justify-center content-center ">
        <motion.p
          // ref={ref}
          className=" text-7xl text-white font-black"
          initial="hidden"
          animate="visible"
          // onViewportEnter={onViewportEnter}
          // onViewportLeave={onViewportLeave}
          variants={animationBox}
          // custom={forwardX}
          style={{ x: forwardX }}
        >
          {text}
        </motion.p>
      </div>
    </div>
  )
}
