import { useEffect, useRef } from 'react'

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
  const ref = useRef(null)

  const { scrollY, scrollYProgress } = useViewportScroll()
  const control = useAnimation()

  // const forwardX = useTransform(scrollY, viewport, ['-150%', '150%'])

  const animationBox = {
    // visible: { x: forwardX, color: rainbowColors }
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  function convertPXToVW(px) {
    return px * (100 / document.documentElement.clientHeight)
  }

  // scrollY.onChange((v) => console.log(convertPXToVW(v)), 'value')

  return (
    <div className="h-[100vh] w-screen bg-primary overflow-hidden flex flex-col items-center justify-center debug1">
      <div className="sticky-wrapper flex flex-col items-center justify-center  content-center">
        <motion.p
          // ref={ref}
          className="motion-paragraph text-7xl text-white font-black"
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => console.log('onViewportEnter')}
          onViewportLeave={() => console.log('onViewportLeave')}
          variants={animationBox}
          // style={{ x: forwardX }}
        >
          {text}
        </motion.p>
      </div>
    </div>
  )
}
