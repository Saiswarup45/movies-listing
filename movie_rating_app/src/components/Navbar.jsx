import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar(){

const [dark,setDark] = useState(true)

function toggleTheme(){

setDark(!dark)

document.body.classList.toggle("light")

}

return(

<nav className="navbar">

<h2>MovieZone</h2>

<div>

<Link to="/">Home</Link>
<Link to="/favorites">Favorites</Link>



</div>

</nav>

)

}

export default Navbar