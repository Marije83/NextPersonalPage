import NavigationBar from "@/components/shared/navigation-bar"
import Hero from "@/components/shared/hero"
import GamePoll from "@/components/video-game-poll-grid"
import Page from "@/components/shared/page"
import ContentText from "@/components/shared/content-text"

export default function () {
    return(

        <Page>

            <NavigationBar></NavigationBar>
            
            <Hero name="Video games and other hobbies"></Hero>

            <ContentText>
                In my spare time I like to walk in the hills, read or wath TV, in particular fantasy and science fiction. I also enjoy playing video games. Some of my favourite games are <em>The Last of Us</em>, the <em>Final Fantasy</em> series, the <em>Uncharted</em> series, <em>Lego: Lord of the Rings</em>,<em>Overcooked</em> and <em>Brothers: A Tale of Two Sons</em>. What is your favourite game?
            </ContentText>

            <GamePoll></GamePoll>
        </Page>
    )
}