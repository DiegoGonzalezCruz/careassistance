import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useElementViewPortPosition } from '../hooks/useElementViewPortPosition'

export const BoxRotatingElements = () => {
  const ref = useRef(null)
  const { position } = useElementViewPortPosition(ref)

  const { scrollYProgress } = useViewportScroll()

  const movement = useTransform(scrollYProgress, position, [100, 1])

  const boxVariant = {
    hidden: {
      opacity: 0
      //  x: '-100%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren'
        //  delay: 0.2
      }
    }
  }

  return (
    <div className="">
      <section ref={ref}>
        <div
          className="container bg-primary max-w-full"
          style={{ height: '400vh' }}
        >
          <div className="sticky-wrapper sticky top-0 h-[100vh] w-full flex flex-col items-start justify-center overflow-hidden">
            <motion.div className=" w-full h-full mx-auto flex flex-col justify-between text-center text-white">
              <motion.div className=" flex flex-row justify-around  ">
                <motion.div className=" w-1/3 flex flex-col items-center">
                  <div className="relative h-36 w-36" style={{ x: movement }}>
                    <Image
                      src={'/img/canales/tl.png'}
                      layout="fill"
                      className="w-full h-full"
                      alt="vector"
                    />
                  </div>
                  <p>Profesionales Propios</p>
                </motion.div>
                <motion.div className="w-1/3 flex  flex-col items-center ">
                  <div className="relative h-36 w-36">
                    <Image
                      src={'/img/canales/tr.png'}
                      layout="fill"
                      className="w-full h-full"
                      alt="vector"
                    />
                  </div>
                  <p>
                    Canales exclusivos <br /> Omnicanal
                  </p>
                </motion.div>
              </motion.div>
              <motion.div className=" self-center  flex flex-row">
                <motion.div className="  flex flex-col items-center">
                  <div className="relative h-36 w-36">
                    <Image
                      src={'/img/canales/bl.png'}
                      layout="fill"
                      className="w-full h-full"
                      alt="vector"
                    />
                  </div>
                  <p>Tecnología</p>
                </motion.div>
              </motion.div>
              <motion.div className="flex flex-row justify-around">
                <motion.div className=" w-1/3 flex flex-col items-center">
                  <div className="relative h-36 w-36">
                    <Image
                      src={'/img/canales/bl.png'}
                      layout="fill"
                      className="w-full h-full"
                      alt="vector"
                    />
                  </div>
                  <p>Seguimiento Permanente</p>
                </motion.div>
                <motion.div className="w-1/3  flex flex-col items-center ">
                  <div className="relative h-36 w-36 ">
                    <Image
                      src={'/img/canales/br.png'}
                      layout="fill"
                      className="w-full h-full"
                      alt="vector"
                    />
                  </div>
                  <p>Experiencia de usuario (ux)</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
