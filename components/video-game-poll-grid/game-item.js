import { useState } from "react";

export default function GameItem ({title, picture, developer, onLike}) {
   const [likes, setLikes] = useState(0);

   const handleIncrementLike = () => {
        let newValue = likes + 1;    
        let details = {
            title: title,
            developer: developer,
            likes: newValue
        }    

        onLike(details);
        setLikes(newValue);
   }

    return(
        <div>
            <div className = "font-bold">{title}</div>
            <div className= "grid justify-center h-52 items-center">{picture}</div>
            <div className = "italic">{developer}</div>
            <button
                className= "bg-purple-900 text-white px-3 mt-3 rounded"
                onClick = {handleIncrementLike}
            >Like</button>
            <div>{likes} likes</div>
        </div>
    )
}