import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { BlogBody } from '../../components/Blog/BlogBody'
import { BlogHeader } from '../../components/Blog/BlogHeader'
import { BlogRelated } from '../../components/Blog/BlogRelated'
import { CalltoAction } from '../../components/Boxes/CalltoAction'

const BlogPost = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <BlogHeader />
      <BlogBody />
      <BlogRelated />
      <CalltoAction
        question={
          'Te gustaría tener más información de nuestros programas de salud y bienestar?'
        }
        buttonText={'Contáctanos'}
      />
    </div>
  )
}

export default BlogPost
