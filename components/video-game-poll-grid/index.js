import GameItem from "./game-item";
import { useEffect, useState } from "react"
import Image from "next/image";

export default function GamePoll () {
    const [games, setGames] = useState([]);
    const [title, setTitle] = useState ("");
    const [developer, setDeveloper] = useState ("");
    const [mostLikedGameLikes, setMostLikedGameLikes] = useState(0);
    const [mostLikedGameTitle, setMostLikedGameTitle] = useState ("The Last of Us");
    
    //this function will run once at the start and fetches data from a path, stores it as a json file in data, and then returns it as a response.
    useEffect(() => {
        getGames();
    }, [])

   const getGames = async () => {
    const response = await fetch(`/api/games`);
    const data = await response.json();
    setGames(data);
   }
   
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
            picture: <Image src='TBC.png' alt="Image to follow" />,
            developer: developer
        }
        
        let newGames = [...games, game]
        setGames(newGames)
    }

    return(
        <div>
            <div
            className = "grid grid-cols-4 shrink gap-y-10 text-center bg-slate-100 m-5 p-3">
           {games.map((game, index) => {
                return (
                    <GameItem 
                        key={index}
                        game={game}
                    />
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