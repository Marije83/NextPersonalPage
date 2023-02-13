import NavigationItem from "./navigation-item"

export default function NavigationBar () {
    return(
        <div className = "bg-purple-700 text-white flex flex-cols">
            <NavigationItem ahref="/" name="Home"></NavigationItem>
            <NavigationItem ahref="video-game-poll" name="Video Game Poll"></NavigationItem>
        </div>

    )
}