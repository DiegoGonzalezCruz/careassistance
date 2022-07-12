import Image from 'next/image'
import React from 'react'
import { Date } from './Date'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

export const BlogRelated = ({ postByCategory }) => {
  const router = useRouter()
  // console.log(postByCategory, 'postByCategory')
  return (
    <div className="w-screen min-h-[40vh] bg-accent py-10">
      <div className="w-3/4 h-full mx-auto">
        <h2 className="text-secondary">Relacionados</h2>
        <div className=" w-full h-full p-4 text-secondary gap-5  flex flex-row">
          {postByCategory.map((post) => {
            return (
              <div
                key={post.id}
                className="flex flex-col w-1/3 h-full gap-4 items-start"
              >
                <div className="relative w-full h-48 rounded-xl">
                  <Image
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    objectFit="cover"
                    layout="fill"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <Date date={post.date} className="text-base-200" />
                  <h3 className="text-base-200 font-medium">
                    {post.title.rendered}
                  </h3>
                  <div
                    className="flex flex-row items-center justify-start gap-2 hover:text-primary hover:cursor-pointer"
                    onClick={() => router.push(`/noticias/${post.slug}`)}
                  >
                    <p className="text-secondary">Ver más</p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="cursor-pointer text-secondary"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
