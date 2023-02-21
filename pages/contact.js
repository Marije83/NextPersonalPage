import ContentText from "@/components/shared/content-text";
import Hero from "@/components/shared/hero";
import NavigationBar from "@/components/shared/navigation-bar";
import Pages from "@/components/shared/page";
import { useState } from "react";
import Input from "@/components/forms/input";
import ListOfMessages from "@/components/contact/list-of-message";

export default function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showSuccess, setShowSuccess] = useState(false)

    const handleChangeMessage = (event) => {
        const message = event.target.value;
        setMessage(message);
    }

    const handleSubmit = async (event) => {
        
        if (!name) return;
        if (!email) return;
        if (!message) return;
        
        const response = await fetch (`/api/contact?name=${name}&email=${email}&message=${message}`);
        const data = await response.json();

            setName("");
            setEmail("");
            setMessage("");
            setShowSuccess(true);
    }

    return(
        <Pages>
            <NavigationBar/>
        
            <Hero name="Contact me"/>

            <ContentText>If you would like to get in touch, fill out the form below. And when you type in your email, I will try to get back to you.</ContentText>
            
            <form className = "flex flex-col space-y-3 px-4">
                <Input placeholder = "Name" value = {name} onChange = {(value) => {setName(value)}}/>
                
                <Input placeholder = "Email" value = {email} onChange = {(value)=>{setEmail(value)}}/> 
                
                <textarea
                    className = "bg-gray-200 w-full sm:w-96 rounded h-64 py-3 px-6"
                    placeholder = "message"
                    value = {message}
                    onChange = {handleChangeMessage}
                />

                <button
                    className = "bg-purple-500 text-white py-3 px-6 w-full sm:w-96 rounded"
                    onClick = {handleSubmit}
                    type = "button"
                > Submit</button>

            </form>

            <ListOfMessages/>
        </Pages>
        
    )
}