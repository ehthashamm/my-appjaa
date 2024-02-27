import React from "react";


export default function OutlineButton ({label,onClick}) {
    return (
        <div>
 <div className="border-[#F15A2A] w-fit border-2 rounded-md items-center p-1 pl-3 pr-3 m-1 " onClick={onClick}><p className="text-[#F15A2A]  font-semibold text-xs text-center">{label}</p></div>  
        </div>
    )
}