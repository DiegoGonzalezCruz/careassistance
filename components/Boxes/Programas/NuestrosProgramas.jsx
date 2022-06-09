import React from 'react'
import { ProgramCard } from './ProgramCard'

export const NuestrosProgramas = () => {
  return (
    <div className="bg-primary h-full py-10">
      <div className="w-1/2 text-white flex flex-col items-center mx-auto my-10">
        <h2>Nuestros programas</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error vitae,
          expedita ipsam, reprehenderit voluptates odit accusantium fugiat
          provident perferendis minus explicabo ratione nisi libero sapiente.
          Perspiciatis exercitationem laborum ullam laudantium!
        </p>
      </div>
      <div className="flex flex-wrap gap-2  items-center justify-center">
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
