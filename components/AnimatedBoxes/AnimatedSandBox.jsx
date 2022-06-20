import { useEffect, useRef, useState } from 'react'

import {
  motion,
  useAnimation,
  useElementScroll,
  transform,
  useMotionValue,
  useSpring,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import { useWindowSize } from '../hooks/useWindowSize'

export const AnimatedSandBox = ({ text }) => {
  // const ref = useRef()
  // const { scrollYProgress } = useElementScroll(ref)

  // useEffect(() => {
  //   scrollYProgress.onChange((latest) => {
  //     console.log(latest)
  //   })
  // }, [])

  // return (
  //   <div ref={ref} className="debug1 overflow-scroll h-[200vh]">
  //     <motion.div style={{ scaleY: scrollYProgress }}>
  //       {Array(100)
  //         .fill()
  //         .map((_, i) => (
  //           <p key={i}>{i}</p>
  //         ))}
  //     </motion.div>
  //   </div>
  // )
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const opacity = useMotionValue(1)

  useEffect(() => {
    function updateOpacity() {
      const maxXY = Math.max(x.get(), y.get())
      const newOpacity = transform(maxXY, [0, 100], [1, 0.1])
      opacity.set(newOpacity)
    }

    const unsubscribeX = x.onChange(updateOpacity)
    const unsubscribeY = y.onChange(updateOpacity)

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [])

  return (
    <motion.div
      drag
      style={{ x, opacity, backgroundColor: 'red', width: 100, height: 100 }}
    />
  )
}
