import React from 'react'

export const CalltoAction = ({ question, buttonText }) => {
  return (
    <div className="w-screen h-[50vh] bg-accent ">
      <div className="flex flex-col text-center text-white  h-full w-full">
        <div className="flex flex-col items-center justify-center gap-5  w-full max-w-3xl mx-auto h-full px-4">
          <h1 className="text-3xl font-semibold ">{question}</h1>
          <button className="rounded-full h-10 btn-primary w-48 ">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}
