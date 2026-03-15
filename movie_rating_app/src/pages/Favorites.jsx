import {useEffect,useState} from "react"
import MovieCard from "../components/MovieCard"

function Favorites(){

const [favorites,setFavorites]=useState([])

useEffect(()=>{
const data=JSON.parse(localStorage.getItem("favorites")) || []
setFavorites(data)
},[])

return(

<div>

<h2>Favorites</h2>

<div className="grid">

{favorites.map(movie=>(
<MovieCard key={movie.imdbID} movie={movie}/>
))}

</div>

</div>

)

}

export default Favorites