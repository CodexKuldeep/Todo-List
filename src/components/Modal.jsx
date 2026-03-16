import { createPortal } from "react-dom"
import { useRef ,useImperativeHandle} from "react";
import Button from "./Button";
export default function Modal({children,ref}){

    const dialog=useRef();
    useImperativeHandle(ref,() => {
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })

    
    return createPortal(
    <dialog 
    className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" 
     ref={dialog}>
        {children}
        <form method="dialog">
            <Button>Close</Button>
        </form>
    </dialog>,
    document.getElementById('modal-root')
    );
}