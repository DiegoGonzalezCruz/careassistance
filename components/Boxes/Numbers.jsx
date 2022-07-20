import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import useElementViewPortPosition from '../Hooks/useElementViewPortPosition'

const stats = [
  {
    number: '+100',
    sub: 'Profesionales de salud a su disposición'
  },
  {
    number: '+280.000',
    sub: 'Consultas virtuales'
  },
  {
    number: '+300',
    sub: 'Empresas confían en nosotros'
  },
  {
    number: '+1.000.000',
    sub: 'de beneficiarios'
  }
]

export const Numbers = () => {
  const carouselRef = useRef()
  const innerCarouselRef = useRef()
  const [heigth, setHeigth] = useState(0)

  const {
    position: [carouselStart, carouselEnds]
  } = useElementViewPortPosition(carouselRef)

  const { scrollYProgress } = useViewportScroll()

  const range = [
    ((carouselStart + carouselEnds) / 4) * 1,
    ((carouselStart + carouselEnds) / 4) * 2,
    ((carouselStart + carouselEnds) / 4) * 3,
    ((carouselStart + carouselEnds) / 4) * 4
  ]
  const yVar = useTransform(scrollYProgress, range, [10, 100, 500, heigth])
  // console.log(range, 'range')
  // console.log(start, 'start')
  // console.log(end, 'end')

  // const numbersAnimation = useTransform(scrollYProgress, range, [
  //   0,
  //   '100vh',
  //   '200vh',
  //   '300vh'
  // ])

  useEffect(() => {
    console.log(innerCarouselRef.current, 'innerCarouselRef')

    setHeigth(
      innerCarouselRef.current.scrollWidth -
        innerCarouselRef.current.offsetWidth
    )
  }, [])

  // console.log(numbersAnimation.current, 'numbersAnimation')
  const boxVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren'
      }
    }
  }
  return (
    <div className="w-screen">
      <section
        ref={carouselRef}
        className="container max-w-full h-[450vh] bg-white overflow-visible"
      >
        <div className=" sticky-wrapper sticky top-0 h-[80vh] w-full flex flex-col items-start justify-center  ">
          <div className="absolute w-full h-full debug1">
            <Image
              src={'/img/home/FondoCifras1.png'}
              layout="fill"
              objectFit="contain"
              className=""
              alt="experiencia unica"
            />
          </div>

          <motion.div
            ref={innerCarouselRef}
            dragConstraints={carouselRef}
            initial="hidden"
            whileInView="visible"
            variants={boxVariant}
            style={{ y: yVar }}
            className=" w-full text-white relative flex flex-col h-full items-center justify-center debug2 "
          >
            {stats.map((stat, index) => (
              <div className="flex flex-col items-center md:-translate-y-10 -translate-y-5">
                <h2 className="text-accent lg:text-[100px]">{stat.number}</h2>
                <p>{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
