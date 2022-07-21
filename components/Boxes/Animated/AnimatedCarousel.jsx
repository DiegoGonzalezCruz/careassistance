import { useEffect, useRef, useState } from 'react'

import { motion, useTransform, useViewportScroll } from 'framer-motion'

import Image from 'next/image'
import useElementViewPortPosition from '../../Hooks/useElementViewPortPosition'

const slideAnimation = {
  variants: {
    full: { opacity: 1, filter: 'grayscale(0%)' },
    partial: { opacity: 0.5, filter: 'grayscale(100%)' }
  },
  initial: 'partial',
  whileInView: 'full',
  viewport: { amount: 1 }
}

export const AnimatedCarousel = ({ programs }) => {
  // console.log(programs, 'programs')

  const [width, setWidth] = useState(0)

  const carouselRef = useRef()
  const innerCarouselRef = useRef()

  const {
    position: [carouselStart, carouselEnds]
  } = useElementViewPortPosition(carouselRef)

  const { scrollYProgress } = useViewportScroll()
  const xVar = useTransform(
    scrollYProgress,
    [carouselStart + carouselStart * 0.05, carouselEnds],
    [10, width * -1]
  )

  useEffect(() => {
    setWidth(
      innerCarouselRef.current.scrollWidth -
        innerCarouselRef.current.offsetWidth
    )
  }, [])

  return (
    <div className=" w-full">
      <section ref={carouselRef} className="bg-white w-full h-[300vh] ">
        <div className="sticky-wrapper sticky top-0 h-[80vh] w-full flex flex-col items-start justify-center overflow-hidden">
          <div className="md:w-1/2 text-primary flex flex-col items-start justify-center py-10 mx-auto ">
            <h2 className="text-primary font-FiraSans">Nuestros programas</h2>
            <p className="my-5 text-center text-black">
              Con el objetivo de brindar un servicio integral, nuestro
              ecosistema de salud y bienestar está compuesto por diversos
              programas complementarios entre si.
            </p>
          </div>

          <motion.div
            dragConstraints={carouselRef}
            className="flex gap-12 h-full w-screen "
            style={{ x: xVar }}
            ref={innerCarouselRef}
          >
            {programs &&
              programs.map((item, idx) => (
                <motion.div
                  key={item.id}
                  {...slideAnimation}
                  className="h-64 w-96 relative px-10 "
                >
                  <div key={item.id} className="relative h-64 w-96">
                    <Image
                      src={item._embedded['wp:featuredmedia'][0].source_url}
                      layout="fill"
                      objectFit="cover"
                      className=""
                      alt="programa"
                    />
                  </div>
                  <div className="w-full h-12 flex flex-row items-center justify-between bg-white absolute bottom-5  gap-5  ">
                    <div className="rounded-2xl relative bg-primary  -translate-x-1/2">
                      <div className="h-14 w-14 flex items-center justify-center">
                        <div className="h-10 w-10 relative ">
                          <Image
                            src={item.acf.icon.url}
                            layout="fill"
                            objectFit="contain"
                            className=""
                            alt="programa"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-primary font-FiraSans ">
                        {item.acf.labelBlue + ' '}
                        <span className="text-primary font-bold">
                          {item.acf.labelAccent}
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
