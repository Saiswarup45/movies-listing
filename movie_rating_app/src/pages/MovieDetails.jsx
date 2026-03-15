import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMovieDetails } from "../api/movieApi"

function MovieDetails(){

const { id } = useParams()

const [movie,setMovie] = useState(null)

useEffect(()=>{

async function load(){

const data = await getMovieDetails(id)

setMovie(data)

}

load()

},[id])

if(!movie) return <p>Loading...</p>

return(

<div className="details-container">

<h1>{movie.Title}</h1>

<img 
src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"} 
alt={movie.Title}
/>

<div className="details-info">

<p><b>Year:</b> {movie.Year}</p>

<p><b>Genre:</b> {movie.Genre}</p>

<p><b>Director:</b> {movie.Director}</p>

<p><b>Actors:</b> {movie.Actors}</p>

<p><b>IMDb Rating:</b> ⭐ {movie.imdbRating}</p>

<p><b>Plot:</b> {movie.Plot}</p>

</div>

</div>

)

}

export default MovieDetails