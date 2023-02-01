export default function NavigationItem (props) {
    return(
        <div
            className="border border-white px-3 py-1 text-center"
        >
            <a href={props.ahref}>{props.name}</a>
        </div>
    )
}