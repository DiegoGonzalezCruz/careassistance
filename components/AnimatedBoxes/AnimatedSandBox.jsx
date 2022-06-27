import { useEffect, useRef, useState } from 'react'

import {
  motion,
  MotionProps,
  useTransform,
  useViewportScroll
} from 'framer-motion'

import { useWindowSize } from '../hooks/useWindowSize'
import { throttle } from 'throttle-debounce'
import { useElementViewportPosition } from '../hooks/useElementViewPortPosition'

const slideAnimation = {
  variants: {
    full: { backgroundColor: '#663399' },
    partial: { backgroundColor: '#808080' }
  },
  initial: 'partial',
  whileInView: 'full',
  viewport: { amount: 1, once: true }
}

export const AnimatedSandBox = ({ text }) => {
  const ref = useRef(null)
  const carouselRef = useRef(null)
  const { position } = useElementViewportPosition(ref)

  const [carouselEndPosition, setCarouselEndPosition] = useState(0)
  const { scrollYProgress, scrollY } = useViewportScroll()
  const xVar = useTransform(scrollYProgress, position, [0, carouselEndPosition])

  // useEffect(() => {
  //   window.addEventListener('scroll', () =>
  //     console.log({ scrollYProgress: scrollYProgress.current, scrollY })
  //   )
  // }, [])
  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return
    const parent = carouselRef.current.parentElement
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          parent.offsetLeft * 2

        setCarouselEndPosition(-newPosition)
      }
    }

    resetCarouselEndPosition()
    const handleResize = throttle(10, resetCarouselEndPosition)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <section ref={ref}>
        <div
          className="container bg-primary mx-4 max-w-full"
          style={{ height: '400vh' }}
        >
          <div className="sticky-wrapper sticky top-0 h-[100vh] w-full flex flex-col items-start justify-center overflow-hidden">
            <motion.div
              ref={carouselRef}
              className="carousel flex gap-48"
              style={{ x: xVar }}
            >
              {Array.from(Array(8).keys()).map((i) => (
                <motion.div
                  {...slideAnimation}
                  key={i}
                  className="carousel__slide w-[300px] h-[300px] bg-primary debug1 flex items-center justify-center border-xl"
                >
                  {i + 1}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className="container bg-primary mx-4 max-w-full">
          <h2>Ea, asperiores</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            necessitatibus vel earum tempore asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            autem est vitae magni alias, delectus atque repudiandae maiores
            molestiae fuga error a, laboriosam velit voluptas odio inventore
            modi libero, ratione quas neque. Corporis, nam?
          </p>
          <p>
            Minima exercitationem, quo fugit hic ipsam est laudantium
            accusantium quisquam nobis porro obcaecati veniam atque natus
            reprehenderit corrupti modi consequatur fuga animi tempore officiis
            enim expedita ullam! Vitae repudiandae, sapiente temporibus neque,
            repellat expedita cupiditate magnam harum debitis similique
            voluptatibus sit aspernatur rem hic eligendi dolor? Harum, saepe.
          </p>
        </div>
      </section>
    </div>
  )
}
