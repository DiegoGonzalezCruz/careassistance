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

export const AnimatedBox1 = ({ text, vh }) => {
  const [entry, setEntry] = useState(0)
  const [exit, setExit] = useState(0)

  const ref = useRef(null)

  const { scrollY, scrollYProgress } = useViewportScroll()
  const control = useAnimation()

  const forwardX = useTransform(scrollY, [entry, exit], ['-150%', '150%'])

  const animationBox = {
    // visible: { x: forwardX, color: rainbowColors }
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  const onViewportEnter = () => {
    // console.log(value)
    console.log(scrollY.current, 'onviewportenter')
    // setEntry(scrollY.current)
  }
  const onViewportLeave = () => {
    // console.log(value)
    console.log(scrollY.current, 'onviewportleave')
    // setExit(scrollY.current)
  }

  return (
    <div className="h-[100vh] w-screen bg-primary overflow-hidden flex flex-col items-center justify-center debug1">
      <div className="sticky-wrapper flex flex-col items-center justify-center  content-center">
        <motion.p
          // ref={ref}
          className="motion-paragraph text-7xl text-white font-black"
          // initial="hidden"
          whileInView="visible"
          onViewportEnter={onViewportEnter}
          onViewportLeave={onViewportLeave}
          // variants={animationBox}
          style={{ x: forwardX }}
        >
          {text}
        </motion.p>
      </div>
    </div>
  )
}
