import Image from 'next/image'
import React, { useState } from 'react'
import { TestimonioSlider } from './TestimonioSlider'
import { beneficiaries } from './testimonials'

export const TestimoniosProgramas = () => {
  // console.log(beneficiaries, 'testimonials')

  return (
    <div className="w-screen h-[30vh] ">
      <TestimonioSlider
        testimonials={beneficiaries}
        sideImg={`/img/programas/satisfaccion.svg`}
      />
    </div>
  )
}
