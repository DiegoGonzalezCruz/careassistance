import { useState } from 'react'
import { TestimoniosBox } from './TestimoniosBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export const TestimonioSlider = ({
  testimonials,
  sideImg,
  location = 'mx-auto w-3/4'
}) => {
  const [testimonialShowed, setTestimonialShowed] = useState(0)

  const moreTestimonial = () => {
    // console.log('more')
    if (testimonialShowed < testimonials.length - 1) {
      setTestimonialShowed(testimonialShowed + 1)
    } else {
      setTestimonialShowed(0)
    }
  }
  const lessTestimonial = () => {
    // console.log('less')
    if (testimonialShowed > 0) {
      setTestimonialShowed(testimonialShowed - 1)
    } else {
      setTestimonialShowed(testimonials.length - 1)
    }
  }

  return (
    <div
      className={`${location} h-full flex flex-row items-center justify-center  `}
    >
      {sideImg ? (
        <div className="w-1/5 h-full relative mx-5">
          <Image src={sideImg} layout="fill" alt="testimonios" />
        </div>
      ) : (
        ''
      )}

      <div
        className="w-full"
        key={testimonials[testimonialShowed].title.rendered}
      >
        <TestimoniosBox
          name={testimonials[testimonialShowed].title.rendered}
          title={testimonials[testimonialShowed].acf.titulo}
          text={testimonials[testimonialShowed].content.rendered}
          img={testimonials[testimonialShowed]?.acf?.logo?.url}
        />
        <div className="flex flex-row gap-4 text-accent items-center my-2  justify-center">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="cursor-pointer"
            style={{ fontSize: 10 }}
            onClick={lessTestimonial}
          />

          <p> {`${testimonialShowed + 1} / ${testimonials.length}`} </p>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="cursor-pointer"
            style={{ fontSize: 10 }}
            onClick={moreTestimonial}
          />
        </div>
      </div>
    </div>
  )
}
