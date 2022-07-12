import React, { useEffect, useState } from 'react'
import { CalltoAction } from '../Boxes/CalltoAction'
import { BlogPost } from './BlogPost'
import { AnimatePresence, motion } from 'framer-motion'
import { overlayVariants } from '../../styles/animations'

export const MasNoticias = ({ categories, posts }) => {
  // console.log(categories)
  // console.log(posts)

  const [catSelected, setCatSelected] = useState('all')
  const [filteredPosts, setFilteredPosts] = useState([])
  // console.log(catSelected, '<--- catSelected')

  useEffect(() => {
    const categorySelector = (cat) => {
      const categoriesPresent = posts.filter(
        (post) => post._embedded['wp:term'][0][0].taxonomy === 'category'
      )
      if (cat === 'all') return categoriesPresent

      const filteredPosts = categoriesPresent.filter(
        (post) => post._embedded['wp:term'][0][0].name === cat
      )
      // console.log(categoriesPresent, 'categoriesPresent')
      // console.log(filteredPosts, 'filteredPosts')
      return filteredPosts
    }

    setFilteredPosts(categorySelector(catSelected))
    // console.log(filteredPosts, 'filteredPosts')
  }, [catSelected])

  // console.log(categorySelector('General'), '<--- categorySelector')

  return (
    <div
      initial="hidden"
      // whileInView="visible"
      variants={overlayVariants}
      className="bg-white w-screen min-h-[60vh] "
    >
      <div className="w-3/4 h-full mx-auto ">
        <div
          variants={overlayVariants}
          className="md:w-3/4 flex flex-col items-center justify-center mx-auto"
        >
          <div variants={overlayVariants} className="my-5 self-start">
            <h2 className="text-primary">
              Más <span className="text-primary">noticias</span>
            </h2>
          </div>
          <div
            variants={overlayVariants}
            className="categories flex flex-wrap items-center justify-center w-full"
          >
            {/* Lista de Categories */}
            <ul className="flex flex-row gap-3 w-full justify-around">
              <li
                className=" text-primary hover:text-accent hover:cursor-pointer"
                onClick={() => setCatSelected('all')}
              >
                Todos
              </li>
              {categories.map((category) => (
                <li
                  className=" text-primary hover:text-accent hover:cursor-pointer"
                  key={category.id}
                  onClick={() => setCatSelected(category.name)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          <div
            variants={overlayVariants}
            className="flex flex-wrap gap-10 py-10 items-center justify-center"
          >
            {filteredPosts.map((post) => (
              // <AnimatePresence key={post.id}>
              <BlogPost
                key={post.id}
                post={post}
                date={post.date}
                variants={overlayVariants}
                slug={post.slug}
              />
              // </AnimatePresence>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
