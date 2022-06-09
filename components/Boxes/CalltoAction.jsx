import React from 'react'

export const CalltoAction = ({ question, buttonText }) => {
  return (
    <div className="w-screen h-auto bg-accent">
      <div className="hero-content text-center text-white">
        <div className="w-full flex flex-col gap-5 mx-20">
          <h1 className="text-4xl font-bold w-3/4 mx-auto">{question}</h1>
          <button className="btn btn-primary w-48 mx-auto">{buttonText}</button>
        </div>
      </div>
    </div>
  )
}
