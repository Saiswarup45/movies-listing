const API_KEY = "675129dd"   
const BASE_URL = "https://www.omdbapi.com/"


// search movies
export async function searchMovies(query) {

  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${query}`
  )

  const data = await response.json()

  if (data.Response === "True") {
    return data.Search
  }

  return []
}


// get full movie details
export async function getMovieDetails(id) {

  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
  )

  const data = await response.json()

  return data
}