import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { BlogBody } from '../../components/Blog/BlogBody'
import { BlogHeader } from '../../components/Blog/BlogHeader'
import { BlogRelated } from '../../components/Blog/BlogRelated'
import { CalltoActionHomeDark } from '../../components/Boxes/CalltoActionHomeDark'
import {
  getPostByCategories,
  getPostBySlug,
  getPosts
} from '../../laboratory/lib/getPosts'

const BlogPost = ({ post, postByCategory }) => {
  // console.log(post, 'post')
  const router = useRouter()
  const { slug } = router.query

  // console.log(slug, 'slug')

  return (
    <>
      <Head>
        <title>Care Assistance - {post.title.rendered}</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogHeader post={post} />
      <BlogBody post={post} />
      <BlogRelated postByCategory={postByCategory} />
      <CalltoActionHomeDark
        question={
          'Te gustaría tener más información de nuestros programas de salud y bienestar?'
        }
        buttonText={'Contáctanos'}
      />
    </>
  )
}

export default BlogPost

export async function getStaticPaths() {
  const fetchPosts = await getPosts()
  // console.log(fetchPosts, 'fetchPosts')

  const paths = await fetchPosts.map((post) => ({
    params: { slug: post.slug }
  }))
  return {
    paths,
    fallback: false // false or 'blocking'
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fetchPostBySlug = await getPostBySlug(slug)
  // console.log(fetchPostBySlug, 'fetchPostBySlug')

  const fetchPostsByCategory = await getPostByCategories(
    fetchPostBySlug.categories[0]
  )
  // console.log(fetchPostBySlug.categories[0], 'fetchPostBySlug.categories[0]')

  return {
    props: {
      post: fetchPostBySlug,
      postByCategory: fetchPostsByCategory
    }
  }
}
