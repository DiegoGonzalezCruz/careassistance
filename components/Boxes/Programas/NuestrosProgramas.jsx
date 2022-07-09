import { motion } from 'framer-motion'
import { AnimatedCarousel } from '../Animated/AnimatedCarousel'

export const NuestrosProgramas = ({ programs }) => {
  const programasVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  }
  return (
    <motion.div
      variants={programasVariant}
      initial="hidden"
      whileInView="visible"
      className="bg-white min-h-screen w-screen py-10 flex flex-col items-center "
    >
      <AnimatedCarousel variants={programasVariant} programs={programs} />
    </motion.div>
  )
}
