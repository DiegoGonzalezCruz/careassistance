import { useRef } from 'react'

import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll
} from 'framer-motion'

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

export const AnimatedCarousel = ({ programs }) => {
  console.log(programs, 'programs')

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
    [carouselStart + carouselStart * 0.05, carouselEnds],
    ['0vw', '-240vw']
  )

  return (
    <div className=" w-screen">
      <section ref={carouselRef} className="bg-white w-full h-[300vh]">
        <div
          ref={innerCarouselRef}
          className="sticky-wrapper debug1 sticky top-0 h-[80vh] w-full flex flex-col items-start justify-center overflow-hidden"
        >
          <div className="md:w-1/2 text-primary flex flex-col items-center justify-center py-10  mx-auto">
            <h2 className="text-primary">Nuestros programas</h2>
            <p className="my-5 text-center">
              Con el objetivo de brindar un servicio integral, nuestro
              ecosistema de salud y bienestar está compuesto por diversos
              programas complementarios entre si.
            </p>
          </div>
          <AnimatePresence>
            <motion.div
              drag="x"
              dragConstraints={carouselRef}
              className=" flex gap-12 h-full w-full"
              style={{ x: xVar }}
            >
              {programs &&
                programs.map((item, idx) => (
                  <motion.div
                    {...slideAnimation}
                    key={item.id}
                    className="min-w-[30vw] min-h-[30vh] flex flex-col items-center justify-center relative debug2"
                  >
                    <div className="relative w-full h-full debug1">
                      <Image
                        src={item._embedded['wp:featuredmedia'][0].source_url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="w-full h-16 flex flex-row items-center justify-center bg-primary absolute bottom-5 px-2 gap-5 ">
                      <div className="h-20 w-20  debug1 rounded-2xl relative bg-primary  ">
                        <Image
                          src={item.acf.icon.url}
                          layout="fill"
                          objectFit="contain"
                          className=""
                        />
                      </div>
                      <div className="">
                        <p>
                          {item.acf.labelBlue + ' '}
                          <span className="text-accent">
                            {item.acf.labelAccent}
                          </span>
                        </p>
                      </div>
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
