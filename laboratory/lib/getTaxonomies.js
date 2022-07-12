
export const getCategories = () => {

  const baseURL = process.env.URL
  const catList = fetch(`${baseURL}/wp-json/wp/v2/categories?_embed`).then(res => res.json())

  // console.log(pagesList, 'pagesList')
  return catList
}