import { useEffect, useRef, useState } from 'react'

import {
  AnimatePresence,
  motion,
  MotionProps,
  useTransform,
  useViewportScroll
} from 'framer-motion'

import { throttle } from 'throttle-debounce'
import { useElementViewportPosition } from '../../hooks/useElementViewPortPosition'
import Image from 'next/image'

const slideAnimation = {
  variants: {
    full: { opacity: 1, color: '#fff' },
    partial: { opacity: 0.5 }
  },
  initial: 'partial',
  whileInView: 'full',
  viewport: { amount: 1 }
}

const menu = [
  {
    label: 'Consulta médica Telemedicina 1',
    icon: '🧠',
    image: '/img/programas/IMG_11_TELEMEDICINA.jpg'
  },
  {
    label: 'Programa de Asistencia Emocional 1',
    icon: '🚀',
    image: '/img/programas/IMG_1_EMOCIONAL.jpg'
  },
  {
    label: 'Asistencia Emocional 1',
    icon: '⚡️',
    image: '/img/programas/IMG_21_NUTRICION.jpg'
  },
  {
    label: 'Consulta médica Telemedicina',
    icon: '📞',
    image: '/img/programas/IMG_11_TELEMEDICINA.jpg'
  },
  {
    label: 'Programa de Asistencia Emocional',
    icon: '🤮',
    image: '/img/programas/IMG_1_EMOCIONAL.jpg'
  },
  {
    label: 'Asistencia Emocional',
    icon: '🐷',
    image: '/img/programas/IMG_21_NUTRICION.jpg'
  }
]

export const AnimatedCarousel = ({}) => {
  const carouselRef = useRef()
  const innerCarouselRef = useRef()

  const {
    position: [carouselStart, carouselEnds]
  } = useElementViewportPosition(carouselRef)
  const {
    position: [start, end]
  } = useElementViewportPosition(carouselRef)

  const { scrollYProgress, scrollY } = useViewportScroll()
  const xVar = useTransform(
    scrollYProgress,
    [start + start * 0.05, carouselEnds + carouselEnds * 0.1],
    [0, -2000]
  )

  return (
    <div className=" w-screen">
      <section ref={carouselRef} className="bg-white w-full h-[400vh]">
        <div
          ref={innerCarouselRef}
          className="sticky-wrapper  sticky top-0 h-[80vh] w-full flex flex-col items-start justify-center overflow-hidden"
        >
          <div className="md:w-1/2 text-primary flex flex-col items-center justify-center py-10  mx-auto">
            <h2 className="text-primary">Nuestros programas</h2>
            <p className="my-5 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              vitae, expedita ipsam, reprehenderit voluptates odit accusantium
              fugiat provident perferendis minus explicabo ratione nisi libero
              sapiente. Perspiciatis exercitationem laborum ullam laudantium!
            </p>
          </div>
          <AnimatePresence>
            <motion.div
              drag="x"
              dragConstraints={carouselRef}
              className=" flex gap-12 h-full w-full"
              style={{ x: xVar }}
            >
              {menu.map((item, idx) => (
                <motion.div
                  {...slideAnimation}
                  key={item.label}
                  className="min-w-[300px]  flex flex-col items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      layout="fill"
                      className="w-full h-full"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
