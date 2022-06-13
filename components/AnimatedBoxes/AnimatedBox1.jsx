import { useEffect } from 'react'

import {
  motion,
  useAnimation,
  useMotionValue,
  useViewportScroll
} from 'framer-motion'

const boxVariant = {
  visible: {
    scale: 1.2,
    transition: {
      duration: 1,
      delay: 1,
      type: 'spring'
    }
  },
  hidden: { opacity: 1, scale: 0 }
}

export const AnimatedBox1 = ({ text }) => {
  // const { scrollY, scrollYProgress } = useViewportScroll()

  // useEffect(() => {
  //   if (inView) {
  //     control.start('visible')
  //   } else {
  //     control.start('hidden')
  //   }
  // }, [control, inView])

  const y = useMotionValue(0)

  return (
    <div className="bg-primary text-white h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        // ref={ref}
        variants={boxVariant}
        className="flex items-center justify-center"
        initial="hidden"
        // animate={control}
        whileInView="visible"
        // style={{ scaleX: scrollYProgress }}
      >
        <h3 className="text-white text-7xl">{text}</h3>
      </motion.div>
    </div>
  )
}
