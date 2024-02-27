import React from "react";
import PickDropLocation from "../Locations/PickDropLocation";
import LocationInput from "../InputField/LocationInput";


export default function QuickBookingLocation({ active,edit }) {
    return (

        <div>
            <div className='flex flex-row'>
                <div className='mt-2'><PickDropLocation height={'h-5'} /></div>
                <div className='flex flex-col items-center'>
                    <div className='bg-[#E8E9EB]'><LocationInput value={'Kukatpally housing board colony'} edit={active==='false'? edit :'Edit' } lineWidth={'w-48'} style={'hidden'} inputStyle={'bg-[#E8E9EB]'} /></div>
                    <div className='bg-[#E8E9EB]'><LocationInput value={'Kukatpally housing board colony'} edit={active==='false'?  edit :'Edit'} lineWidth={'w-0'} style={'hidden'} inputStyle={'bg-[#E8E9EB]'} /></div>
                </div>
            </div>
        </div>
    )
}