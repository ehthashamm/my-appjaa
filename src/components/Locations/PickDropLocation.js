import React from "react";
import Vector from '../../assets/images/Vector.png';
import Line2 from '../../assets/images/Line 2.png';
import Vector2 from '../../assets/images/Vector2.png';


export default function PickDropLocation({ height }) {
     return (

          <div className="flex flex-row">
               <div className='flex  flex-col place-items-center  '>
                    <div><img src={Vector} /></div>
                    <div> <img className={`${height}`} src={Line2} /></div>
                    <div><img src={Vector2} /></div>
               </div>

          </div>

     )
}