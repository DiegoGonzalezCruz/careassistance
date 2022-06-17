import { useEffect, useRef, useState } from 'react'

import {
  motion,
  useAnimation,
  useElementScroll,
  useMotionValue,
  useSpring,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import { useWindowSize } from '../hooks/useWindowSize'

export const AnimatedBox1 = ({ text }) => {
  const { scrollY } = useViewportScroll()

  const size = useWindowSize()

  const [enter, setEnter] = useState(0)
  const [leave, setLeave] = useState(0)

  console.log(enter, 'enter')
  console.log(leave, 'leave')

  useEffect(() => {
    setEnter((size.height / 3) * 2)
    setLeave(size.height)
  }, [size.height])

  const forwardX = useTransform(scrollY, [enter, leave], ['150%', '-150%'])

  const control = useAnimation()

  const animationBox = {
    // visible: { x: forwardX, color: rainbowColors }
    visible: {
      // x: forwardX
      // opacity: 1,
      // transition: {
      //   delay: 0.5,
      //   type: 'tween'
      // }
    },
    hidden: {}
  }

  const onViewportEnter = () => {
    // console.log(value)
    // console.log(scrollY.current, 'onviewportenter')
    setEnter(enter + scrollY.current)
    control.start('visible')
  }
  const onViewportLeave = () => {
    // console.log(value)
    // console.log(scrollY.current, 'onviewportleave')
    setLeave(leave + scrollY.current)
    control.start('hidden')
  }

  return (
    <div className="overflow-scroll h-[100vh] w-screen bg-primary flex flex-col items-center justify-center ">
      <div className="sticky-wrapper flex flex-col items-center justify-center content-center ">
        <motion.p
          // ref={ref}
          className=" text-7xl text-white font-black"
          initial="hidden"
          animate={control}
          onViewportEnter={onViewportEnter}
          onViewportLeave={onViewportLeave}
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
