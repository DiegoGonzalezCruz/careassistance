import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import { Date } from './Date'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

const overlayVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3
    }
  }
}

export const BlogPost = ({ variants, post, date }) => {
  const router = useRouter()
  // console.log(post, 'post')
  // console.log(date, 'date')
  return (
    <motion.div
      variants={variants}
      className="h-full w-56 flex flex-col items-center justify-center card bg-white p-4"
    >
      <motion.div variants={variants} className="relative h-48 w-full">
        <Image
          src={post._embedded['wp:featuredmedia'][0].source_url}
          layout="fill"
          objectFit="cover"
          objectPosition={'center'}
          className="rounded-xl"
          alt="blog post"
        />
      </motion.div>
      <motion.div
        variants={variants}
        className="text-primary w-full py-4 flex flex-col gap-4"
      >
        <Date date={date} />
        <motion.h3
          variants={variants}
          className="text-primary text-xl font-bold"
        >
          {post.title.rendered}
        </motion.h3>
        <motion.div
          variants={variants}
          className="flex flex-row items-center justify-start gap-2 text-accent hover:text-primary hover:cursor-pointer"
          onClick={() => router.push(`/noticias/${post.slug}`)}
        >
          <p>Ver más</p>
          <FontAwesomeIcon icon={faArrowRight} className="cursor-pointer" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
