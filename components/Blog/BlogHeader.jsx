import Image from 'next/image'
import React from 'react'
import { Date } from './Date'

export const BlogHeader = ({ post }) => {
  return (
    <div className="w-screen h-[30vh]">
      <div className="bg-secondary flex flex-col items-center justify-center text-white h-full w-full">
        <div className="self-center">
          <h1 className="text-white text-center">{post.title.rendered}</h1>
          <Date date={post.date} className={'text-white'} />
        </div>

        <div className="absolute translate-y-3/4 w-full h-[25vh]">
          <div className="relative h-full w-3/4 mx-auto">
            <Image
              src={'/images/IMG_3.jpg'}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              alt="blog header"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
