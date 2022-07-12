import { useEffect, useRef, useState } from 'react'

import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { throttle } from 'throttle-debounce'
import { useElementViewPortPosition } from '../hooks/useElementViewPortPosition'
import { slideAnimation } from '../../styles/animations'

export const AnimatedTextBox = ({ text, from }) => {
  const ref = useRef(null)
  const { position } = useElementViewPortPosition(ref)
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
          <div className="sticky-wrapper sticky top-0 h-[100vh] w-full flex flex-col items-start justify-center overflow-hidden bg-[url('/img/home/familia.svg')] bg-no-repeat">
            <motion.div
              className=" text-[100px] text-primary uppercase h-1/3 flex items-center justify-center w-max "
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
