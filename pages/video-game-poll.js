import NavigationBar from "@/components/shared/navigation-bar"
import Hero from "@/components/shared/hero"
import GamePoll from "@/components/video-game-poll-grid"

export default function () {
    return(
        <div className>
            <NavigationBar></NavigationBar>
            
            <Hero name="Video games and other hobbies"></Hero>

            <p className = "m-5">
                In my spare time I like to walk in the hills, read or wath TV, in particular fantasy and science fiction. I also enjoy playing video games. Some of my favourite games are <em>The Last of Us</em>, the <em>Final Fantasy</em> series, the <em>Uncharted</em> series, <em>Lego: Lord of the Rings</em>,<em>Overcooked</em> and <em>Brothers: A Tale of Two Sons</em>. What is your favourite game?
            </p>

            <GamePoll></GamePoll>
        </div>
    )
}