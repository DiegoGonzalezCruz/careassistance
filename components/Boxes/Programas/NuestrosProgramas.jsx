import React from 'react'
import { ProgramCard } from './ProgramCard'

export const NuestrosProgramas = () => {
  return (
    <div className="bg-primary min-h-screen w-screen py-10 flex flex-col items-center">
      <div className="md:w-1/2 text-white flex flex-col items-center justify-center">
        <h2>Nuestros programas</h2>
        <p className="my-5 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error vitae,
          expedita ipsam, reprehenderit voluptates odit accusantium fugiat
          provident perferendis minus explicabo ratione nisi libero sapiente.
          Perspiciatis exercitationem laborum ullam laudantium!
        </p>
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center lg:w-3/4 lg:gap-10 mx-auto">
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
      </div>
    </div>
  )
}
