import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import { useWindowSize } from '../Hooks/useWindowSize'

export const AnimatedBox3 = ({ text }) => {
  const { scrollY } = useViewportScroll()

  const size = useWindowSize()
  // console.log(size)
  const forwardX = useTransform(
    scrollY,
    [size.height * 0.7, size.height * 1.4],
    ['150%', '-150%']
  )

  const control = useAnimation()

  const animationBox = {
    // visible: { x: forwardX, color: rainbowColors }
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3
      }
    },
    hidden: { opacity: 0 }
  }

  const onViewportEnter = () => {
    // console.log(value)
    // console.log(scrollY.current, 'onviewportenter')
    // setEnter(scrollY.current)
    control.start('visible')
  }
  const onViewportLeave = () => {
    // console.log(value)
    // console.log(scrollY.current, 'onviewportleave')
    // setLeave(scrollY.current)
    control.start('hidden')
  }

  return (
    <div className="overflow-scroll h-[100vh] w-screen bg-primary flex flex-col items-center justify-center ">
      <div className=" w-2/3 sticky-wrapper flex flex-col items-center justify-center content-center text-center">
        <motion.p
          // ref={ref}
          className=" text-5xl text-white font-black"
          initial="hidden"
          animate={control}
          onViewportEnter={onViewportEnter}
          onViewportLeave={onViewportLeave}
          variants={animationBox}
          // custom={forwardX}
          // style={{ x: forwardX }}
        >
          {text}
        </motion.p>
      </div>
    </div>
  )
}
