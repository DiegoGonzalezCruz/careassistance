import React from 'react'

export const TestimoniosBox = ({ name, title, text }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl  m-10">
      <div className="card-body flex flex-col items-start ">
        <p className="text-neutral text-left">{text}</p>
        <h3 className="card-title ">{name}</h3>
        <h4>{title}</h4>
      </div>
    </div>
  )
}
