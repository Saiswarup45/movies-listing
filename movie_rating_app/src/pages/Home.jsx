import { useState, useEffect } from "react"
import { searchMovies } from "../api/movieApi"
import MovieCard from "../components/MovieCard"
import SearchBar from "../components/SearchBar"

function Home(){

const [search,setSearch] = useState("")
const [movies,setMovies] = useState([])
const [genre,setGenre] = useState("marvel")

const suggestions = [
"Inception",
"Interstellar",
"Avengers",
"Harry Potter",
"Spider Man",
"Batman",
"Fast and Furious"
]

const genres = [
"action",
"comedy",
"sci fi",
"romance",
"horror"
]

useEffect(()=>{

async function load(){

let query = search || genre

const data = await searchMovies(query)
setMovies(data)

}

load()

},[search,genre])

return(

<div className="home">

{/* HERO */}

<div className="hero">

<h1>Movie Explorer</h1>
<p>Discover and rate your favourite movies</p>

</div>

{/* SEARCH */}

<div className="search-area">

<SearchBar search={search} setSearch={setSearch}/>

</div>

{/* SUGGESTIONS */}

{search === "" && (

<div className="suggestions">

<h2>Popular Searches</h2>

<div className="suggest-list">

{suggestions.map((item,index)=>(
<button
key={index}
className="suggest-btn"
onClick={()=>setSearch(item)}
>
{item}
</button>
))}

</div>

</div>

)}

{/* GENRE FILTER */}

<div className="genre-filter">

{genres.map((g,index)=>(
<button
key={index}
className="genre-btn"
onClick={()=>setGenre(g)}
>
{g}
</button>
))}

</div>

{/* MOVIES */}

<h2 className="section-title">

{search ? "Search Results" : "Trending Movies"}

</h2>

<div className="grid">

{movies.map((movie)=>(
<MovieCard key={movie.imdbID} movie={movie}/>
))}

</div>

</div>

)

}

export default Home