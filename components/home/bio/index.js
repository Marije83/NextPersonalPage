import Image from "next/image"

export default function Bio(props) {
    return(
        <div>
            <div
                className = "italic text-l text-center pt-3 pb-1"
                >{props.jobTitle}
            </div>
                 
            <div
                className = "flex flex-cols mt-5">
            
                <Image 
                    src='/profilePic.jpg' 
                    alt="Headshot" 
                    width="150" height ="300" 
                    className = "rounded-full ml-5"
                />
                <div
                    className = "text-m text-justify px-7"
                    >{props.message}
                </div>
            </div>  
        </div>
    )
};