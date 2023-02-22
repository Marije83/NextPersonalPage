import Image from "next/image"

export default function Bio(props) {
    return(
        <div>
            <div
                className = "italic text-l text-center pt-3 pb-1"
                >{props.jobTitle}
            </div>
                 
            <div
                className = "mt-5 md:flex md:flex-cols">
                <div className = "grid justify-center mb-6 md:w-4/12">
                    <Image 
                        src='/profilePic.jpg' 
                        alt="Headshot" 
                        width="200" height ="400" 
                        className = "rounded-full ml-5"
                    />
                    </div>
                <div
                    className = "text-m text-justify px-7  md:w-8/12"
                    >{props.message}
                </div>
            </div>  
        </div>
    )
};