import React from "react";
import QuickBookingLocation from "./QuickBookingLocation";
import Line4 from '../../assets/images/Line4.png'
import OutlineButton from "../Buttons/OutlineButton";
import phone from '../../assets/images/phone.png';

export default function UpcomingTrips({price, phoneStyle,active,edit}) {
    return (
        <div className=" flex flex-col gap-2 bg-[#E8E9EB] rounded-lg w-fit p-1 pl-3 pr-3 ">
            <div >
                <QuickBookingLocation active={'false'} edit={'11:08 PM'} />
            </div>
            <div><img className="w-60" src={Line4} /> </div>

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                    <div className={`p-1 bg-slate-300 rounded ${phoneStyle}`}><img className="w-4" src={phone} /></div>
                    <div><OutlineButton label={active ? edit :'Assign driver'} /></div>
                </div>
                <div className="flex flex-col"><div><p className="text-[10px] text-[#555E61] opacity-50">{'final Cost'}</p></div>
                    <div className="text-[12px] font-semibold ml-2 mb-3 mt-1">${price}</div></div>
            </div>
        </div>
    )
}