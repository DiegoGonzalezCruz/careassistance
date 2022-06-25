import { useEffect, useRef, useState } from 'react'

import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { throttle } from 'throttle-debounce'
import { useElementViewportPosition } from '../hooks/useElementViewPortPosition'
import { slideAnimation } from '../../styles/animations'

export const AnimatedTextBox2 = ({ text, from }) => {
  const ref = useRef(null)
  const { position } = useElementViewportPosition(ref)
  const textAppearsFrom =
    from === 'right' ? ['-100vw', '150vw'] : ['100vw', '-150vw']

  const { scrollYProgress } = useViewportScroll()
  const xVar = useTransform(scrollYProgress, position, textAppearsFrom)

  return (
    <div className="">
      <section ref={ref}>
        <div
          className="container bg-white max-w-full "
          style={{ height: '400vh' }}
        >
          <div className="sticky-wrapper sticky top-0 h-[100vh] w-full flex flex-col items-start justify-center overflow-hidden ">
            <motion.div
              className="carousel text-[100px] text-primary uppercase h-1/3 flex items-center justify-center  w-[150vw] "
              style={{ x: xVar }}
              {...slideAnimation}
            >
              {text}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
