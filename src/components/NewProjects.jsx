import Input from "./Input"
import { useRef } from "react"
import Modal from "./Modal";

export default function NewProjects({onAdd,onCancel}){

    const modal=useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDuedate=dueDate.current.value;

        if(enteredDescription.trim() === '' || enteredDuedate.trim() === '' || enteredTitle.trim() === '' )
            {
                modal.current.open();
                return;
        }

        onAdd({
            title:enteredTitle,
            description: enteredDescription,
            dueDate: enteredDuedate
        })
    }


    return (
        <>
        <Modal ref={modal} >
            <h2 className='text-xl font-bold text-stone-500 my-4'> Invalid Value</h2>
            <p className="text-stone-400 mb-4">Somethingwent wrong</p>
            <p className="text-stone-400 mb-4">olease provide proper input</p>
        </Modal>
    <div className="w-[35rem] mt-16">

        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button 
                onClick={onCancel}
                className="text-stone-800 hover:text-stone-950">
                    Cancel
                </button>
            </li>
            <li>
                <button 
                onClick={handleSave}
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950 ">
                    Save
                </button>
            </li>
        </menu>
        <div>
            <Input ref={title} type='text'label="Title" />
            <Input ref={description} label="Discription" textarea/>
            <Input ref={dueDate} type='date' label="Due Date"/>
        </div>

    </div>
    </>
    )

}