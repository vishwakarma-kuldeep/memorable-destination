'use client'
import React from 'react'
import Image from 'next/image'
import bannerImg from '../../public/banner.jpg'
import FormField from './FormField'
const Banner = () => {
  return (
    <div className="h-[90vh] w-[100vw] top-20">
       <div className="flex h-full w-full " style={{
        backgroundImage: `url(/banner.jpg)`,
        backgroundSize: "cover",
       }}>
        <div className="absolute top-56 right-[5rem]">

          <FormField />
        </div>
        <div className="absolute left-0 w-[74%] h-[80vh] top-[5.5rem]" style={{
            background:"rgba( 255, 255, 255, 0.4 )",
            // boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter:" blur( 1px )",
            borderRadius:" 10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            WebkitBackdropFilter:" blur( 1px )",
          }}>
            <div className="content-between h-full justify-between ">
              <div className=" border-2 border-black h-[50%] my-4 flex justify-start px-20">
                <div className="text-3xl "> Effortless Travel Planning!
Let AI Be Your Expert Guide.</div>
                <div>Bid farewell to generic holiday packages.
Get Your AI-Personalised Itineraries</div>
                <div></div>
              </div>
              <div className=" border-2 border-black h-[40%] my-4"></div>
            </div>
          </div>

       </div>
      
    </div>
  )
}

export default Banner
