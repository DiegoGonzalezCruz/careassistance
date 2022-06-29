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
    [start + start * 0.05, carouselEnds + carouselEnds * 0.2],
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
              {programs &&
                programs.map((item, idx) => (
                  <motion.div
                    {...slideAnimation}
                    key={item.id}
                    className="min-w-[300px] min-h-[300px] flex flex-col items-center justify-center relative"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={item._embedded['wp:featuredmedia'][0].source_url}
                        layout="fill"
                        className="w-full h-full"
                        objectFit="cover"
                        objectPosition="center"
                      />
                      <div className="absolute h-full w-full bg-primary/50"></div>
                      <div className="w-full h-16 flex flex-row items-center justify-center bg-primary absolute bottom-5">
                        <div className="h-24 w-24 bg-white border-primary rounded-3xl relative">
                          <Image
                            src={item.acf.icon.url}
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <p>
                          {item.acf.labelBlue}
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
