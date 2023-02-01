export default function SkillsItem(props) {
    return(
      <div className = "flex flex-col bg-slate-100 ml-5 mr-5 mb-5">
        <div className = "p-3">
            <div className = "flex gap-4">
                <div className = "basis-1/4 font-semibold">
                    {props.skillName}
                </div>

                <div className = "basis-3/4">
                    {props.skillDescription}
                </div>
            </div>
        </div>
    </div>
    )
}