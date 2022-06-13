import React from 'react'

export const CalltoAction = ({ question, buttonText }) => {
  return (
    <div className="w-screen h-auto bg-accent">
      <div className="hero-content text-center text-white ">
        {/* <div className="border-white border w-96 h-24 rounded-full -translate-x-20 -rotate-45"></div> */}

        <div className="flex flex-col gap-5 mx-20 ">
          <h1 className="text-3xl font-semibold mx-auto">{question}</h1>
          <button className="rounded-full h-10 btn-primary w-48 mx-auto">
            {buttonText}
          </button>
        </div>

        {/* <div className="border-white border w-96 h-24 rounded-full translate-x-20 rotate-45"></div> */}
      </div>
    </div>
  )
}
