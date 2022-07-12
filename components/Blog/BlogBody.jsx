import Image from 'next/image'
import React from 'react'

export const BlogBody = ({ post }) => {
  // console.log(post, 'blogbody')
  return (
    <div className=" bg-white w-screen h-full  mt-48">
      <div className="h-full w-3/4">
        <div
          className="w-3/4 mx-auto prose"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </div>
  )
}
