import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

import {
  motion,
  useAnimation,
  useElementScroll,
  useMotionValue,
  useSpring,
  useTransform,
  useViewportScroll
} from 'framer-motion'

export const AnimatedBox1 = ({ text }) => {
  const { scrollY, scrollYProgress } = useViewportScroll()
  const control = useAnimation()
  const [ref, inView] = useInView()

  const rainbowColors = useTransform(scrollY, [400, 1000], ['#fff', '#6265F3'])
  const forwardX = useTransform(scrollY, [400, 1000], ['150%', '-150%'])

  // useEffect(() => {
  //   if (inView) {
  //     control.start('visible')
  //   }
  // }, [control, inView])

  return (
    <div className="h-[100vh] w-screen bg-primary overflow-hidden flex flex-col items-center justify-center">
      <div className="sticky-wrapper flex flex-col items-center justify-center  content-center">
        <motion.p
          // ref={ref}
          className="motion-paragraph text-7xl text-white font-black"
          style={{ x: forwardX, color: rainbowColors }}
          // animate={control
        >
          Sanos, motivados y Felices
        </motion.p>
      </div>
    </div>
  )
}
