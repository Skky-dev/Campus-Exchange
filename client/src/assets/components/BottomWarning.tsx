
import { useNavigate } from "react-router-dom";



export function BottomWarning({text,buttonText,to}:{text:string,buttonText:string,to:string}){
    const navigate=useNavigate();
    return(
        <div className="flex">
            <div className="text-sm mt-2">{text}</div>
        <button className="text-blue-500 text-sm mt-2 underline mx-2 p-0 border-0"  onClick={()=>{navigate(to)}}>{buttonText}</button>

        </div>
    )
}