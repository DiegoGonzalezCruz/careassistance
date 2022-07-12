import React from 'react'
import Head from 'next/head'
import { NoticiasDestacadas } from '../components/Blog/Destacadas'
import { MasNoticias } from '../components/Blog/MasNoticias'
import { HeroBoxBlog } from '../components/Boxes/HeroBoxBlog'
import { getLastPost, getPosts } from '../laboratory/lib/getPosts'
import { getCategories } from '../laboratory/lib/getTaxonomies'
import { CalltoAction } from '../components/Boxes/CalltoAction'
import { CalltoActionHome } from '../components/Boxes/CalltoActionHome'

const Noticias = ({ posts, lastPost, categories }) => {
  // console.log(posts, 'posts')
  // console.log(lastPost, 'lastPost')
  return (
    <div>
      <Head>
        <title>Care Assistance - Noticias</title>
        <meta name="description" content="Noticias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBoxBlog
        prevText='Bienvenidos a nuestro'
        first='blog'
        accent='blog'
        sub='Te intivamos a conocer más de nosotros a través de nuestras noticias y artículos de interés.'
        image='/img/blog/headerblog.png'
      // buttonText='Ver programas'
      // buttonHref='/programas'
      />
      <NoticiasDestacadas lastPost={lastPost} />
      <MasNoticias posts={posts} categories={categories} />
      <CalltoActionHome buttonText={'Quiero que me contacten'} question={'Te gustaría más información de nuestros programas de Salud y Bienestar?'} />

    </div>
  )
}

export default Noticias



export async function getStaticProps() {
  const fetchPosts = await getPosts()
  const fetchLastPost = await getLastPost()
  const fetchCats = await getCategories()
  return {
    props: {
      posts: fetchPosts,
      lastPost: fetchLastPost,
      categories: fetchCats
    }
  }
}
