import React from "react";



export default function Coupons({ value, style, fromcolor, tocolor,price,validDate,discount }) {
    
    return (
        
        <div>
            <div className={`h-32 flex flex-row bg-gradient-to-r from-${fromcolor} to-${tocolor}  rounded-xl w-3/12`} >
                <div className="w-1/12 flex h-full items-center pt-14">
                    <div className="p-2 bg-[#E8E9EB] rounded-full w-4 -ml-2 "></div>
                </div>

                <div className="w-11/12  pt-4 flex flex-col h-full bg-blue">
                <div className="text-2xl text-white font-semibold ">{discount}% Off</div>
                <div><p className="text-[10px] text-white">Discounted Price: {price}</p>
                <p className="text-[9px] opacity-60 text-white font-extralight ">Valid until {validDate} | conditions Apply*</p></div>

                <div className="text-white text-[10px] text-center mt-6"> <p>APPLY NOW</p></div>
                 </div>

                <div className="w-1/12 flex h-full items-center pt-14">
                    <div className="p-2 bg-[#E8E9EB] rounded-full w-4 ml-3  "></div>
                </div>

            </div>


        </div>
    )

}

{/* <div className="p-2 bg-[#E8E9EB] rounded-full w-4 -mr-2 "></div> */ }


