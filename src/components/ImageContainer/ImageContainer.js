import React from "react";


export default function ImageContainer({ ImgName,ImgUrl }) {
    return (
        <div className="m-1" >
            <div> <div className=" w-16 p-2 pb-4 pt-4  rounded-lg bg-[#F3F3F3]"><img className="w-16" src={ImgUrl} /></div> <p className="text-center font-medium text-xs text-slate-600">{ImgName}</p></div>
        </div>
    )
}