import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import { useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'

export const AnimatedBox1 = ({ text }) => {
  const { scrollY } = useViewportScroll()

  const size = useWindowSize()

  const [enter, setEnter] = useState(size.height)
  // const [forwardX, setForwardX] = useState(size.height)

  console.log(size)
  const forwardX = useTransform(
    scrollY,
    [size.height * 0.7, size.height * 1.4],
    ['150%', '-150%']
  )

  const control = useAnimation()

  const animationBox = {
    // visible: { x: forwardX, color: rainbowColors }
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  // const onViewportEnter = () => {
  //   console.log(scrollY.current, 'onviewportenter')
  //   setEnter(scrollY.current)
  //   setForwardX(enter + scrollY.current)
  //   control.start('visible')
  // }
  // const onViewportLeave = () => {
  //   // console.log(value)
  //   console.log(scrollY.current, 'onviewportleave')
  //   setEnter(scrollY.current)
  //   setForwardX(enter + scrollY.current)

  //   control.start('hidden')
  // }

  return (
    <div className="overflow-scroll h-[100vh] w-screen bg-primary flex flex-col items-center justify-center ">
      <div className="sticky-wrapper flex flex-col items-center justify-center content-center ">
        <motion.p
          // ref={ref}
          className=" text-7xl text-white font-black"
          // initial="hidden"
          // animate={control}
          whileInView={'visible'}
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
