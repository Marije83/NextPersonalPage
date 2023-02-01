import GameItem from "./game-item"
import { initialGames } from "@/constants/home/games"
import { useState } from "react"


export default function GamePoll () {
    const [title, setTitle] = useState("");
    const [developer, setDeveloper] = useState("");
    const [games, setGames] = useState(initialGames)
    const [mostLikedGameLikes, setMostLikedGameLikes] = useState(0);
    const [mostLikedGameTitle, setMostLikedGameTitle] = useState ("The Last of Us");
    

    const handleLike = (details) =>{
        const {title, likes} = details;

        if (likes > mostLikedGameLikes){
            setMostLikedGameTitle(title);
            setMostLikedGameLikes(likes)
        }
    }

    const handleSetTitle = (event) => {
        let title = event.target.value;
        setTitle(title);
    }

    const handleSetDeveloper = (event) => {
        let developer = event.target.value;
        setDeveloper(developer);
    }

    const handleAddGame = () =>{
        let game = {
            title: title,
            picture: <img src='TBC.png' alt="Image to follow" width="150" height ="300"/>,
            developer: developer
        }
        
        let newGames = [...games, game]
        setGames(newGames)
    }

    return(
        <div>
            <div
            className = "grid grid-cols-4 shrink gap-y-10 text-center bg-slate-100 m-5 p-3">
           {games.map((game) => {
                return (
                    <GameItem 
                        title = {game.title}
                        picture = {game.picture}
                        developer = {game.developer}
                        onLike = {handleLike}
                    ></GameItem>
                )
            })}
            </div>

            <div className = "text-center">
                <p>Or you can add your own favourite game here!</p>
                <form className = "m-5">
                    <label className = "m-5">Title:</label>
                    <input className = "border border-purple-900 hover:bg-purple-100"
                    value = {title}
                    onChange = {handleSetTitle}/>
                    <label className = "m-5">Developer:</label>
                    <input className = "border border-purple-900 hover:bg-purple-100"
                    value = {developer}
                    onChange = {handleSetDeveloper}/>
                    <button
                        className = "bg-purple-900 text-white text-center m-5 px-3 py-1 rounded"
                        type = "button"
                        onClick = {handleAddGame}
                        >Add Game</button>
                </form>
            </div>  

            <div className="mt-10 my-5 text-center">
                <em>{mostLikedGameTitle}</em> is the most liked Game
            </div>          
        </div>
        
    )
}