
export const getPages = () => {

  const baseURL = process.env.URL
  const pagesList = fetch(`${baseURL}/wp-json/wp/v2/pages?_embed`).then(res => res.json())

  console.log(pagesList, 'pagesList')
  return pagesList
}