import Image from 'next/image'
import { useState } from 'react'
import { TestimoniosBox } from './TestimoniosBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Testimonios = ({ testimonials }) => {
  console.log(testimonials, 'testimonials received')
  // const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0])

  // const paginate = (newDirection) => {
  //   setActiveTestimonial(newDirection)
  // }

  // console.log(activeTestimonial, 'activeTestimonial')

  return (
    <div className="bg-white text-center min-h-[50vh] w-screen ">
      <div className="h-full w-3/4 mx-auto flex flex-col items-center justify-center ">
        <div className="h-24 w-24 relative self-start">
          <Image src={'/img/clientes/ClientesIcon.png'} layout="fill" />
        </div>
        <div className="divider"></div>
        {testimonials &&
          testimonials.map((el, idx) => {
            return (
              <div className="w-full" key={el.title + idx}>
                <TestimoniosBox
                  name={el.title.rendered}
                  title={el.acf.titulo}
                  text={el.content.rendered}
                  img={el.acf.logo.url}
                />
                <div className="flex flex-row gap-4 text-accent items-center">
                  {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="cursor-pointer"
                    style={{ fontSize: 10 }}
                  />

                  <p> {`${idx} / ${testimonials.length}`} </p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="cursor-pointer"
                    style={{ fontSize: 10 }}
                  />
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
