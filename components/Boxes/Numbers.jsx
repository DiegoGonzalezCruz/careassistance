import Image from 'next/image'
import { useRef } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import useElementViewPortPosition from '../Hooks/useElementViewPortPosition'

const stats = [
  {
    number: '+1.000.000',
    sub: 'de beneficiarios'
  },

  {
    number: '+300',
    sub: 'Empresas confían en nosotros'
  },
  {
    number: '+280.000',
    sub: 'Consultas virtuales'
  },
  {
    number: '+100',
    sub: 'Profesionales de salud a su disposición'
  }
]

export const Numbers = () => {
  const ref = useRef(null)

  const {
    position: [start, end]
  } = useElementViewPortPosition(ref)
  const { scrollYProgress } = useViewportScroll()
  const range = [
    ((start + end) / 4) * 1,
    ((start + end) / 4) * 2,
    ((start + end) / 4) * 3,
    ((start + end) / 4) * 4
  ]
  // console.log(range, 'range')
  // console.log(start, 'start')
  // console.log(end, 'end')

  const numbersAnimation = useTransform(scrollYProgress, range, [1, 2, 3, 4])

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
      <section ref={ref}>
        <div className="container max-w-full h-[450vh] bg-white overflow-visible">
          <div className=" sticky-wrapper sticky top-0 w-screen h-screen flex flex-col items-start justify-center  ">
            <div className="absolute w-full h-full">
              <Image
                src={'/img/home/FondoCifras1.png'}
                layout="fill"
                objectFit="contain"
                className=""
                alt="experiencia unica"
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={boxVariant}
              className=" w-full text-white relative flex flex-col h-full items-center justify-center"
            >
              <div className="flex flex-col items-center md:-translate-y-10 -translate-y-5">
                <h2 className="text-accent lg:text-[100px]">+1.000.000</h2>
                <p>de beneficiarios</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
