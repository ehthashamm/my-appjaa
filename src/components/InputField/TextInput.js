import React from "react";
import Line4 from "../../assets/images/Line4.png"

export default function TextInput ({ placeholder,
    name,
    value,
    label,
    propstyle,
}) {
    return (
        <div className="pl-2"><p className="text-xs text-slate-500 font-medium  mt-4 ml-2">{label}</p>
        <div className="w-full flex justify-between " ><div><input className=" w-full p-2 outline-none font-semibold  border-0 text-xs"
            placeholder={placeholder}
            value={value}></input></div>
           <div className="text-[#2C4493] text-xs font-medium">Edit</div>                
            </div>
            <div><img src = {Line4} /></div>
            
    </div>
    )
}