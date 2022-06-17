import React from 'react'
import { ProgramCard } from './ProgramCard'
import { motion } from 'framer-motion'

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
      <div className="md:w-1/2 text-white flex flex-col items-center justify-center">
        <h2>Nuestros programas</h2>
        <p className="my-5 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error vitae,
          expedita ipsam, reprehenderit voluptates odit accusantium fugiat
          provident perferendis minus explicabo ratione nisi libero sapiente.
          Perspiciatis exercitationem laborum ullam laudantium!
        </p>
      </div>
      <motion.div
        variants={programasVariant}
        className="flex flex-wrap gap-2 items-center justify-center lg:w-3/4 lg:gap-10 mx-auto"
      >
        <ProgramCard variants={programasVariant} />
        <ProgramCard variants={programasVariant} />
        <ProgramCard variants={programasVariant} />
        <ProgramCard variants={programasVariant} />
        <ProgramCard variants={programasVariant} />
        <ProgramCard variants={programasVariant} />
      </motion.div>
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
