import Link from "next/link";
import { useState } from "react";

export default function GameItem ({game}) {
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
            <Link href={`/single-game/${game.id}`} className = "font-bold">{game.title}</Link>
            <div className= "grid justify-center h-52 items-center"><img src={game.picture} alt="The Last of Us" width="150" height ="300" /> </div>
            <div className = "italic">{game.developer}</div>
            <button
                className= "bg-purple-900 text-white px-3 mt-3 rounded"
                onClick = {handleIncrementLike}
            >Like</button>
            <div>{likes} likes</div>
        </div>
    )
}