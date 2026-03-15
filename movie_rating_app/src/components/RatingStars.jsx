import {useState,useEffect} from "react"

function RatingStars({id}){

const [rating,setRating]=useState(0)

useEffect(()=>{
const saved=localStorage.getItem("rating_"+id)
if(saved) setRating(Number(saved))
},[])

function rate(value){
setRating(value)
localStorage.setItem("rating_"+id,value)
}

return(

<div>

{[1,2,3,4,5].map((star)=>(
<span
key={star}
onClick={()=>rate(star)}
style={{
cursor:"pointer",
color: star<=rating ? "gold":"gray"
}}
>
★
</span>
))}

</div>

)

}

export default RatingStars