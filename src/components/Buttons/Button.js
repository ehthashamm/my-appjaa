import React from "react";


export default function Button ({ label,onClick,textcolor,background,bordercolor,borderwidth}) {

    return (
        <div className={`${background} rounded-lg p-2 m-2 ${borderwidth} ${bordercolor} `} onClick={onClick}><p className={`${textcolor}  font-semibold text-sm text-center`}>{label}</p></div>       
    )
}

