import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useElementViewportPosition } from '../hooks/useElementViewPortPosition'

export const BoxWhiteBGImage = () => {
  const ref = useRef(null)

  const {
    position: [xValue, yValue]
  } = useElementViewportPosition(ref)

  const { scrollYProgress } = useViewportScroll()
  const sizeTransformation = useTransform(
    scrollYProgress,
    [xValue, yValue * 0.95],
    [100, 1]
  )

  const boxVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh'
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  // scrollY.onChange((v) => console.log(v))

  return (
    <div className="">
      <section ref={ref}>
        <div
          className="container bg-white max-w-full debug1"
          style={{ height: '600vh' }}
        >
          <div className="sticky-wrapper sticky top-0 h-[100vh] w-full flex flex-col items-start justify-center overflow-hidden">
            <motion.div
              initial={false}
              variants={boxVariants}
              // style={{ scale: forwardY }}
              className="overflow-hidden flex flex-row items-center justify-center  h-full"
            >
              <motion.div
                variants={boxVariants}
                className="w-1/2 flex items-center justify-center h-full px-10"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  beatae id consequuntur, alias necessitatibus laudantium fuga
                  vitae ea aut nesciunt aperiam eligendi. Quos eius rem quia eum
                  quibusdam impedit placeat.
                </p>
              </motion.div>

              <motion.div
                style={{ scale: sizeTransformation }}
                variants={boxVariants}
                className="relative w-1/2 h-96 overflow-hidden "
              >
                <Image
                  src={'/img/animations/building.svg'}
                  layout="fill"
                  alt="proposito"
                  className="overflow-hidden"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>

    // **** DELETE
  )
}
