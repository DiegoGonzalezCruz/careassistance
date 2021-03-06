import Image from 'next/image'

import { TestimonioSlider } from './TestimonioSlider'

export const Testimonios = ({ testimonials }) => {
  return (
    <div className="bg-white text-center min-h-[50vh] w-screen ">
      <div className="h-full w-3/4 mx-auto flex flex-col items-center justify-center  ">
        <div className="h-24 w-24 relative  self-start">
          <Image
            src={'/img/clientes/ClientesIcon.png'}
            layout="fill"
            alt="clientes"
          />
        </div>
        <div className="divider"></div>
        <div className=" relative w-full h-full">
          <TestimonioSlider testimonials={testimonials} location="" />
        </div>
      </div>
    </div>
  )
}
