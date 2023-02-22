import Link from "next/link";

export default function Footer({name1, name2, href1, href2, gameId}){
    
    if (gameId==1) {
        return(
            <div className="p-5 m-3 text-purple-900 font-medium">
                <Link href={href2}>
                    <div className="text-center"> {name2} </div>
                </Link>
            </div>
        )
    } else if (gameId==5) {
        return(
            <div className="p-5 m-3 text-purple-900 font-medium">
                <Link href={href1}>
                    <div className="text-center">{name1}</div>
                </Link>
            </div>
        )
    } else {
    return(
        <div className="grid grid-cols-3 gap-4 p-5 m-3 text-purple-900 font-medium">
            <Link href={href1}>
                <div className="text-right"> {name1} </div>
            </Link>
            <div className="text-center">|</div>
            <Link href={href2}>
            <div className="text-left">{name2}</div>
            </Link>
        </div>
    )}
}