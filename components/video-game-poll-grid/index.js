import GameItem from "./game-item";
import { useEffect, useState } from "react"

export default function GamePoll () {
    const [games, setGames] = useState([]);
    const [title, setTitle] = useState ("");
    const [developer, setDeveloper] = useState ("");
    const [showSuccess, setShowSuccess] = useState(false);
    
    
    //this function will run once at the start and fetches data from a path, stores it as a json file in data, and then returns it as a response.
    useEffect(() => {
        getGames();
    }, [])

   const getGames = async () => {
    const response = await fetch(`/api/games`);
    const data = await response.json();
    setGames(data);
   }


    const handleAddGame = async (event) => {
        let payload = {
            title: title,
            developer: developer
        };
        
        const response = await fetch(`api/add-game`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        
        const data = await response.json();

    }

    return(
        <div>
            <div
            className = "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shrink gap-y-10 text-center bg-slate-100 m-5 p-3">
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
                <form className = "m-5 grid grid-row md:flex flex-cols-2 md: gap-4 md:justify-around">
                    <input placeholder="title" className = "pl-5 border rounded h-10 w-full md:w-2/5 border-purple-900 hover:bg-purple-100"
                    value = {title}
                    onChange = {(value) => setTitle(value)}/>
                    
                    <input placeholder="developer" className = "pl-5 border h-10 w-full md:w-2/5 rounded border-purple-900 hover:bg-purple-100"
                    value = {developer}
                    onChange = {(value) => setDeveloper(value)}/>
                    
                    <button
                        className = "bg-purple-900 text-white text-center px-3 w-full md:w-1/5 h-10 rounded"
                        type = "button"
                        onClick = {handleAddGame}
                        >Add Game</button>
                </form>
            </div> 
        </div>
    )
}