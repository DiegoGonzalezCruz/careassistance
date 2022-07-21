import { useRef } from 'react'

import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { slideAnimation } from '../../styles/animations'
import useElementViewPortPosition from '../Hooks/useElementViewPortPosition'

export const AnimatedTextBoxOutlined = ({ text, from, bg }) => {
  const ref = useRef(null)
  const {
    position: [start, end]
  } = useElementViewPortPosition(ref)

  const textAppearsFrom =
    from === 'right' ? ['-100vw', '150vw'] : ['100vw', '-150vw']

  const bgColor = bg === 'primary' ? 'bg-primary' : 'bg-white'

  const textColor = bg === 'primary' ? 'text-white' : 'text-primary'

  const { scrollYProgress } = useViewportScroll()
  // const xVar = useTransform(scrollYProgress, position, textAppearsFrom)
  const xVar = useTransform(
    scrollYProgress,
    [start, end + end * 0.1],
    ['50vw', '-400vw']
  )

  return (
    <div className="w-screen">
      <section ref={ref}>
        <div
          className={`container  max-w-full ${bgColor} `}
          style={{ height: '200vh' }}
        >
          <div className="sticky-wrapper sticky top-0 h-[100vh] w-full flex flex-col items-start justify-center overflow-hidden ">
            <motion.div
              className={` text-[150px] ${textColor}  uppercase h-1/3 flex items-center justify-center w-max `}
              style={{ x: xVar }}
              {...slideAnimation}
            >
              {' '}
              <span className="stroke-red-500 "> {text}</span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
