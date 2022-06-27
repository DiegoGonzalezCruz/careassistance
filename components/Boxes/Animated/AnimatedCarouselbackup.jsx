import React from 'react'
import { motion } from 'framer-motion'
import { ProgramCard } from '../Programas/ProgramCard'

export const AnimatedCarouselBackUp = ({ programasVariant }) => {
  return (
    <motion.div
      variants={programasVariant}
      className=" debug2 flex flex-row gap-2 items-center justify-center lg:w-3/4 lg:gap-10 mx-auto overflow-hidden"
    >
      <ProgramCard variants={programasVariant} />
      <ProgramCard variants={programasVariant} />
      <ProgramCard variants={programasVariant} />
      <ProgramCard variants={programasVariant} />
      <ProgramCard variants={programasVariant} />
      <ProgramCard variants={programasVariant} />
    </motion.div>
  )
}
