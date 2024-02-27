import React from "react";
import Line4 from "../../assets/images/Line4.png"

export default function LocationInput({ label, placeholder, value,lineWidth,edit,style,iconStyle,inputStyle }) {
    return (

        <div className="pl-2"><p className={`text-xs text-slate-500 ${style} font-medium mt-4 ml-2`}>{label}</p>
            <div className="w-full flex justify-between items-center " ><div><input className={`${inputStyle} w-full p-2 outline-none font-semibold border-0 text-xs text-ellipsis`}
                placeholder={placeholder}
                value={value}></input></div>
                <div className={`text-[#2C4493] text-xs ml-2 font-medium ${iconStyle}`}>{edit}</div>
            </div>
            <div className={`${lineWidth}`}><img src={Line4} /></div>

        </div>
    )
}