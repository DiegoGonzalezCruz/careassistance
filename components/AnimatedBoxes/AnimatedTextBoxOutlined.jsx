import { useRef } from 'react'

import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { useElementViewportPosition } from '../hooks/useElementViewPortPosition'
import { slideAnimation } from '../../styles/animations'

export const AnimatedTextBoxOutlined = ({ text, from, bg }) => {
  console.log(bg, 'bg')
  const ref = useRef(null)
  const { position } = useElementViewportPosition(ref)
  const textAppearsFrom =
    from === 'right' ? ['-100vw', '150vw'] : ['100vw', '-150vw']

  const bgColor = bg === 'primary' ? 'bg-primary' : 'bg-white'

  const textColor = bg === 'primary' ? 'text-white' : 'text-primary'

  const { scrollYProgress } = useViewportScroll()
  const xVar = useTransform(scrollYProgress, position, textAppearsFrom)

  return (
    <div className="">
      <section ref={ref}>
        <div
          className={`container  max-w-full ${bgColor} `}
          style={{ height: '400vh' }}
        >
          <div className="sticky-wrapper sticky top-0 h-[100vh] w-full flex flex-col items-start justify-center overflow-hidden ">
            <motion.div
              className={`carousel text-[100px] ${textColor} uppercase h-1/3 flex items-center justify-center  w-[150vw] `}
              style={{ x: xVar }}
              {...slideAnimation}
            >
              {' '}
              <span className=" border-black"> {text}</span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
