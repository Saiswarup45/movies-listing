import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function MovieCard({ movie }) {

const [isFavorite,setIsFavorite] = useState(false)
const [userRating,setUserRating] = useState(0)

useEffect(()=>{

const favorites = JSON.parse(localStorage.getItem("favorites")) || []

const exists = favorites.find(m => m.imdbID === movie.imdbID)

if(exists) setIsFavorite(true)

const savedRating = localStorage.getItem("rating_"+movie.imdbID)

if(savedRating) setUserRating(savedRating)

},[movie.imdbID])


function toggleFavorite(){

let favorites = JSON.parse(localStorage.getItem("favorites")) || []

if(isFavorite){

favorites = favorites.filter(m => m.imdbID !== movie.imdbID)
setIsFavorite(false)

}else{

favorites.push(movie)
setIsFavorite(true)

}

localStorage.setItem("favorites",JSON.stringify(favorites))

}


function openTrailer(){

const query = movie.Title + " trailer"

const url = "https://www.youtube.com/results?search_query=" + query

window.open(url,"_blank")

}


function rateMovie(star){

setUserRating(star)

localStorage.setItem("rating_"+movie.imdbID,star)

}


/* POSTER FIX */

const poster =
movie.Poster && movie.Poster !== "N/A"
? movie.Poster
: "https://via.placeholder.com/300x450?text=No+Poster"


return(

<div className="movie-card">

<div className="poster-box">

<img src={poster} alt={movie.Title} />

</div>

<div className="movie-info">

<h3>{movie.Title}</h3>

<p>{movie.Year}</p>

<p>IMDb ⭐ {movie.imdbRating || "N/A"}</p>

<div className="rating">

{[1,2,3,4,5].map((star)=>(

<span
key={star}
onClick={()=>rateMovie(star)}
style={{
cursor:"pointer",
color: star <= userRating ? "gold" : "gray"
}}
>

★
</span>

))}

</div>

<div className="card-buttons">

<button onClick={toggleFavorite}>
{isFavorite ? "💔 Remove" : "❤️ Favorite"}
</button>

<button onClick={openTrailer}>
Trailer
</button>

<Link to={"/movie/"+movie.imdbID}>

<button>
Details
</button>

</Link>

</div>

</div>

</div>

)

}

export default MovieCard