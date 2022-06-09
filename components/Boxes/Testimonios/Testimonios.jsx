import React from 'react'
import { TestimoniosBox } from './TestimoniosBox'

const testimonials = [
  {
    name: 'Jorge Frauenberg',
    title: 'Socio Fundador - Gerente General ISP Chile SA',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit, illum omnis eaque excepturi maxime inventore blanditiis deserunt in, ducimus sapiente est odio sequi laborum quis deleniti obcaecati, voluptatibus dicta ipsum provident nam ex adipisci culpa. Doloribus incidunt repellat id soluta totam, architecto minus eligendi sapiente vero aliquam nesciunt dignissimos!'
  },
  {
    name: 'Lisa Frauenberg',
    title: 'Socio Fundador - Gerente General ISP Chile SA',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit, illum omnis eaque excepturi maxime inventore blanditiis deserunt in, ducimus sapiente est odio sequi laborum quis deleniti obcaecati, voluptatibus dicta ipsum provident nam ex adipisci culpa. Doloribus incidunt repellat id soluta totam, architecto minus eligendi sapiente vero aliquam nesciunt dignissimos!'
  }
]

export const Testimonios = () => {
  return (
    <div className="bg-primary text-center">
      <h2>Testimonios de clientes</h2>
      <div className="carousel w-full">
        {testimonials.map((el, idx) => {
          return (
            <div
              key={idx}
              id={`slide${idx}`}
              className="carousel-item relative w-full"
            >
              <TestimoniosBox />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${idx + 1}`}
                  className="btn btn-circle btn-accent text-white"
                >
                  ❮
                </a>
                <a
                  href={`#slide${idx - 1}`}
                  className="btn btn-circle btn-accent text-white"
                >
                  ❯
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
