import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import useElementViewPortPosition from '../../Hooks/useElementViewPortPosition'
// TODO : https://codesandbox.io/s/framer-motion-fun-scroll-forked-xbbkb

export const InfiniteBox = () => {
  const ref = useRef(null)
  const {
    position: [start, end]
  } = useElementViewPortPosition(ref)
  const range = [start - start * 0.1, (start + end) / 2, end - end * 0.02]
  const movementX = ['0vw', '-200vw', '-350vw']

  const { scrollYProgress } = useViewportScroll()

  const xMove = useTransform(scrollYProgress, range, movementX)

  return (
    <div className="w-screen -z-10 ">
      <section ref={ref}>
        <div className="container max-w-full h-[350vh] bg-white ">
          <div className=" sticky-wrapper sticky top-0 w-screen h-screen flex flex-col items-start justify-center ">
            <motion.div
              className="relative h-full w-[500vw] "
              style={{ translateX: xMove }}
            >
              <Image
                src={'/img/nosotros/vector.svg'}
                layout="fill"
                objectFit="cover"
                objectPosition={0}
                alt="nosotros"
                className="overflow-scroll"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
