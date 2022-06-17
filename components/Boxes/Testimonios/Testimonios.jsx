import { useState } from 'react'
import { TestimoniosBox } from './TestimoniosBox'

const testimonials = [
  {
    name: 'Jorge Frauenberg',
    title: 'Socio Fundador - Gerente General ISP Chile SA',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit, illum omnis eaque excepturi maxime inventore blanditiis deserunt in, ducimus sapiente est odio sequi laborum quis deleniti obcaecati, voluptatibus dicta ipsum provident nam ex adipisci culpa. Doloribus incidunt repellat id soluta totam, architecto minus eligendi sapiente vero aliquam nesciunt dignissimos!'
  },
  {
    name: 'Lisa Simpson',
    title: 'Socia Fundadora - Presidente de USA',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit, illum omnis eaque excepturi maxime inventore blanditiis deserunt in, ducimus sapiente est odio sequi laborum quis deleniti obcaecati, voluptatibus dicta ipsum provident nam ex adipisci culpa. Doloribus incidunt repellat id soluta totam, architecto minus eligendi sapiente vero aliquam nesciunt dignissimos!'
  },
  {
    name: 'Bart Simpson',
    title: 'Socia Fundadora - El Barto',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit, illum omnis eaque excepturi maxime inventore blanditiis deserunt in, ducimus sapiente est odio sequi laborum quis deleniti obcaecati, voluptatibus dicta ipsum provident nam ex adipisci culpa. Doloribus incidunt repellat id soluta totam, architecto minus eligendi sapiente vero aliquam nesciunt dignissimos!'
  },
  {
    name: 'Jorge Frauenberg',
    title: 'Socio Fundador - Gerente General ISP Chile SA',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit, illum omnis eaque excepturi maxime inventore blanditiis deserunt in, ducimus sapiente est odio sequi laborum quis deleniti obcaecati, voluptatibus dicta ipsum provident nam ex adipisci culpa. Doloribus incidunt repellat id soluta totam, architecto minus eligendi sapiente vero aliquam nesciunt dignissimos!'
  },
  {
    name: 'Lisa Simpson',
    title: 'Socia Fundadora - Presidente de USA',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit, illum omnis eaque excepturi maxime inventore blanditiis deserunt in, ducimus sapiente est odio sequi laborum quis deleniti obcaecati, voluptatibus dicta ipsum provident nam ex adipisci culpa. Doloribus incidunt repellat id soluta totam, architecto minus eligendi sapiente vero aliquam nesciunt dignissimos!'
  },
  {
    name: 'Bart Simpson',
    title: 'Socia Fundadora - El Barto',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit, illum omnis eaque excepturi maxime inventore blanditiis deserunt in, ducimus sapiente est odio sequi laborum quis deleniti obcaecati, voluptatibus dicta ipsum provident nam ex adipisci culpa. Doloribus incidunt repellat id soluta totam, architecto minus eligendi sapiente vero aliquam nesciunt dignissimos!'
  }
]

export const Testimonios = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0])

  const paginate = (newDirection) => {
    setActiveTestimonial(newDirection)
  }

  // console.log(activeTestimonial, 'activeTestimonial')

  return (
    <div className="bg-primary text-center min-h-[50vh] w-screen">
      <h2>Testimonios de clientes</h2>
      <div class="carousel rounded-box">
        {testimonials.map((el, idx) => {
          return (
            <div className="carousel-item">
              <TestimoniosBox name={el.name} title={el.title} text={el.text} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
