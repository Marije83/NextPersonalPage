import SubHeader from "@/components/shared/subheader";
import { techSkills,transSkills } from "@/constants/home/skills";
import SkillsItem from "./skills-item";

export default function SkillsGrid(props){
    return(
        <div>
            <div>
                <SubHeader subHeader = "Technical Skills"></SubHeader>
                
                <div>
                    {techSkills.map((skill) => {
                        return (
                            <SkillsItem 
                                skillName = {skill.skillName}
                                skillDescription = {skill.skillDescription}
                            ></SkillsItem>
                        )
                    })}
                </div>
                
                <SubHeader subHeader = "Transferable Skills"></SubHeader>
                
                <div>
                    {transSkills.map((skill) => {
                        return (
                            <SkillsItem 
                                skillName = {skill.skillName}
                                skillDescription = {skill.skillDescription}
                            ></SkillsItem>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}