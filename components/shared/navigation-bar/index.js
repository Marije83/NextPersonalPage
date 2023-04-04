import NavigationItem from "./navigation-item"

export default function NavigationBar () {
    return(
        <div className = "bg-purple-700 text-white flex flex-cols">
            <NavigationItem ahref="/" name="Home"/>
            <NavigationItem ahref="/linguistics" name="The Linguist"/>
            <NavigationItem ahref="/video-game-poll" name="The Gamer"/>
            <NavigationItem ahref="/contact" name="Contact"/>
        </div>

    )
}