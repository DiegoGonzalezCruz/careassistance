
export const getProgramas = () => {

  const baseURL = process.env.URL
  const programasList = fetch(`${baseURL}/wp-json/wp/v2/programas?_embed`).then(res => res.json())

  console.log(programasList, 'programasList')
  return programasList
}