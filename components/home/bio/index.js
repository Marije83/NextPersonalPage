import SubHeader from "@/components/shared/subheader"

export default function Bio(props) {
    return(
        <div>
            <div
                className = "w-full italic text-l text-center pt-3 pb-1"
                >{props.jobTitle}
            </div>
                 
            <div
                className = "flex flex-cols mt-5">
            
                <img src='profilePic.jpg' alt="Headshot" width="150" height ="300" className = "rounded-full ml-5"/>

                <div
                    className = "w-full text-m text-justify px-7"
                    >{props.message}
                </div>
            </div>  
        </div>
    )
};