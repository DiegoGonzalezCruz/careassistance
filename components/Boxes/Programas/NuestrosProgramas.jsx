import React from 'react'
import { ProgramCard } from './ProgramCard'
import { motion } from 'framer-motion'
import { AnimatedCarousel } from '../Animated/AnimatedCarousel'

export const NuestrosProgramas = () => {
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
      className="bg-primary min-h-screen w-screen py-10 flex flex-col items-center"
    >
      <AnimatedCarousel variants={programasVariant} />
    </motion.div>
  )
}

// Dynamic variants
// Each variant can be defined as a function that resolves when a variant is accessed. These variant functions are provided a single argument, which can be set in a component's custom prop.

// const variants = {
//   visible: i => ({
//     opacity: 1,
//     transition: {
//       delay: i * 0.3,
//     },
//   }),
//   hidden: { opacity: 0 },
// }

// return items.map((item, i) => (
//   <motion.li
//     custom={i}
//     animate="visible"
//     variants={variants}
//   />
// ))
