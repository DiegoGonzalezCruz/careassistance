
export const getPages = async () => {

  const baseURL = process.env.URL
  const fetched = await fetch(`${baseURL}/wp-json/wp/v2/pages?_embed`).then(res => res.json())
  // console.log('**********')
  // console.log(fetched)
  // console.log(fetched.length)
  // console.log('**********')
  return fetched

}
