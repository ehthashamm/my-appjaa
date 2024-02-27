import React from "react";


export default function TextInputField ({ placeholder,
    name,
    value,
    label,
    propstyle,
}) {
    return (
        <div>
            <label className="text-[#555E61] font-semibold text-xs  ">{label}</label>
            <input className="border-[#979AA480] outline-none p-2.5 mt-1 w-full  border-2 text-xs text-[#2B2B2B]  rounded font-semibold"
             placeholder={placeholder}
             name={name}
             value={value}></input>
        </div>
    )
}