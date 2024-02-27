import React from "react";

export default function InputDropdown({ name,
    value,
    label,
    options,
}) {
    return (
        <div>
            <label className="text-[#555E61] font-semibold text-xs">{label}</label>
            <select className="border-[#979AA480] outline-none p-2.5 mt-1 w-full  border-2 text-xs  text-[#2B2B2B] rounded font-semibold"><option>{options}</option></select>
        </div>
    )
}