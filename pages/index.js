import Bio from "@/components/home/bio";
import Hero from "@/components/shared/hero";
import { myBio } from "@/constants/home/myBio";
import SkillsGrid from "@/components/home/skills-grid";
import NavigationBar from "@/components/shared/navigation-bar";
import Page from "@/components/shared/page";


export default function Home() {
  return(
    <Page>
      
        <NavigationBar></NavigationBar>
      
        <div>
          <Hero name="Marije van Hattum"></Hero>

          <Bio jobTitle="Junior Software Engineer" message={myBio}></Bio>

          <SkillsGrid></SkillsGrid>
        </div>
          
    </Page>
    
  )
};