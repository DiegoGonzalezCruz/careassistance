
export const getPosts = () => {

  const baseURL = process.env.URL
  const pagesList = fetch(`${baseURL}/wp-json/wp/v2/posts?_embed`).then(res => res.json())

  // console.log(pagesList, 'pagesList')
  return pagesList
}

export const getLastPost = async () => {

  const baseURL = process.env.URL
  const postsLists = await fetch(`${baseURL}/wp-json/wp/v2/posts?_embed`).then(res => res.json())

  const latestPost = postsLists.reduce((mostRecent, item) => item.date > mostRecent.date ? item : mostRecent)
  return latestPost
}


export const getPostBySlug = async (slug) => {
  // console.log(slug, 'slug')
  const baseURL = process.env.URL
  const url = `${baseURL}/wp-json/wp/v2/posts?slug=${slug}&_embed`

  const postsLists = await fetch(url).then(res => res.json())

  const posts = postsLists.reduce((mostRecent, item) => item.date > mostRecent.date ? item : mostRecent)
  return posts
}

export const getPostByCategories = async (category) => {

  const baseURL = process.env.URL
  const url = `${baseURL}/wp-json/wp/v2/posts?category=${category}&_embed`

  const postsLists = await fetch(url).then(res => res.json())

  // console.log(postsLists, 'postsWithinCategory')
  return postsLists
}


