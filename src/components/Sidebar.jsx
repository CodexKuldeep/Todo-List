import Button from "./Button"

export default  function Sidebar({onSelectAdd,projects,onSelectProject,selectedProjectId}){
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your projects
            </h2>
            <div>
                <Button onClick={onSelectAdd}>
                    + Add Projects
                </Button>
            </div>
            <ul className="mt-8">
                {projects.map(val => {
                    let cssClasses="w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-slate-800";
                    if(val.id===selectedProjectId)
                    {
                        cssClasses+=" text-stone-200 bg-slate-800"
                    }else{
                        cssClasses+=" text-stone-400";
                    }

                return (
                    <li key={val.id}>
                        <button 
                        onClick={()=>onSelectProject(val.id)}
                        className={cssClasses}>
                            {val.title}
                        </button>
                    </li>
                )}
                )}
            </ul>
        </aside>
    )
}