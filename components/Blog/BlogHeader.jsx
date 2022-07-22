import Image from 'next/image'
import React from 'react'
import { Date } from './Date'

export const BlogHeader = ({ post }) => {
  console.log(post, 'post')
  return (
    <div className="w-screen h-[40vh]">
      <div className="bg-secondary flex flex-col items-center justify-center text-white h-full w-full">
        <div className="self-center">
          <h1 className="text-white text-center">{post.title.rendered}</h1>
          <Date date={post.date} className={'text-white'} />
        </div>

        <div className="absolute translate-y-3/4 w-full h-[30vh]">
          {post._embedded['wp:featuredmedia'][0].source_url && (
            <div className="relative h-full w-3/4 mx-auto">
              <Image
                src={post._embedded['wp:featuredmedia'][0].source_url}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                alt="blog header"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
