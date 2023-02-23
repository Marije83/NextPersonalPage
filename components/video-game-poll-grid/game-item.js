import Link from "next/link";
import { useState } from "react";

export default function GameItem ({ game }) {
   const [likes, setLikes] = useState(+game.likes);

    const handleLike = async () => {
        let newLikes = likes + 1;
        setLikes(newLikes);

        const id = +game.id;
        const response = await fetch(`/api/increase-likes?id=${id}&likes=${newLikes}`);
        const data = await response.json();
    }

    return(
        <div className = "border rounded-lg bg-slate-100 p-4">
            <Link href={`/single-game/${game.id}`} className = "font-bold">{game.title}</Link>
            <div className= "grid justify-center h-52 items-center">    
                {game.picture ? (<img src={game.picture} alt="The Last of Us" width="150" height ="300"/>): (<img src="/assets/TBC.png" alt="TBC" width="150" height ="300"/>)}
            </div>
            <div className = "italic">{game.developer}</div>
            <button
                className= "bg-purple-900 text-white px-3 mt-3 rounded"
                onClick = {handleLike}
            >Like</button>
            <div>{likes} likes</div>
        </div>
    )
}