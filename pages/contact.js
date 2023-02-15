import ContentText from "@/components/shared/content-text";
import Hero from "@/components/shared/hero";
import NavigationBar from "@/components/shared/navigation-bar";
import Pages from "@/components/shared/page";
import { useState } from "react";
import Input from "@/components/forms/input";

export default function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return(
        <Pages>
            <NavigationBar/>
        
            <Hero name="Contact me"/>

            <ContentText>If you would like to get in touch, fill out the form below. And when you type in your email, I will try to get back to you.</ContentText>
            <form>
                <Input placeholder = "Name" value = {name} onChange = {(value) => {setName(value)}}/>
                <Input placeholder = "Email" value = {email} onChange = {(value)=>{setEmail(value)}}/> 

            </form>
        </Pages>
        
    )
}