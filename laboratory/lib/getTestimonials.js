
export const getTestimonials = async () => {

  const baseURL = process.env.URL
  const testimonialsList = await fetch(`${baseURL}/wp-json/wp/v2/testimonios`).then(res => res.json())

  // console.log(testimonialsList, 'testimonialsList')
  return testimonialsList
}