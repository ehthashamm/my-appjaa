import React from "react";
import TextInputField from "../components/InputField/TextInputField";
import LocationInput from "../components/InputField/LocationInput";
import InputDropdown from "../components/InputField/InputDropdown";
import PickDropLocation from "../components/Locations/PickDropLocation";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import Tempo from '../assets/images/Tempo.png';
import Ambulance from '../assets/images/Ambulance.png';
import Ambulance2 from '../assets/images/Ambulance2.png';
import Omni from '../assets/images/Omni.png'
import Button from "../components/Buttons/Button";




const SideBar = () => {
    return (
        <div className="p-6 justify-between flex flex-col gap-4">
            <div>
                <p className="font-semibold text-black  ">Quick Booking</p> </div>
            <div className="flex flex-col justify-between gap-3">
                <div>
                    <TextInputField
                        label='CallerName'
                        value='Ramesh reddy'
                    />
                </div>
                <div>
                    <TextInputField
                        label='Phone Number'
                        value='9100238957'
                    />
                </div>
                <div>
                    <InputDropdown label='Type Of User'
                        options='Hospital staff' />
                </div>

            </div>

            <div className="flex relative" >
                <div className="mt-7"><PickDropLocation /></div>
                <div className="flex flex-col justify-center w-full">

                    <div className=" w-full"> <LocationInput
                        label='Pick Up Point'
                        placeholder='Enter Pick Up Point'
                        edit = {'Edit'}
                    /></div>

                    <div><LocationInput
                        label='Drop Location'
                        placeholder='Enter Drop Location'
                        edit = {'Edit'}
                    // value='Kukatpally housing board'
                    /></div>

                </div>

            </div>

            <div className="flex flex-col gap-3 mt-2">
                <div className="font-semibold text-sm ">Choose Ambulance</div>
                <div className="flex  sticky">
                    <ImageContainer ImgUrl={Omni} ImgName='Omni(BLS)' />
                    <ImageContainer ImgUrl={Tempo} ImgName='Tempo(ALS)' />
                    <ImageContainer ImgUrl={Ambulance} ImgName='Ambulance' />
                    <ImageContainer ImgUrl={Ambulance2} ImgName='Ambulance2' />

                </div>

                <div><Button label='Next' background={'bg-[#F15A2A]'} textcolor={'text-white'}  /></div>
                <div><Button textcolor={'text-[#F15A2A]'} bordercolor={'border-[#F15A2A]'} label={'Track Status'} borderwidth={'border-2'} /></div>
            </div>

        </div>
    )
}

export default SideBar;