"use client"
import React from 'react'

import { Vortex } from './vortex';
import { SocialIcon } from 'react-social-icons'
const ContactMe = () => {
  const urls = [
    "https://api.whatsapp.com/send?phone=9494526965",              // WhatsApp
    "https://www.linkedin.com/in/sowmya-yarramsetti-9ab36b246",   // LinkedIn
    "https://www.instagram.com/sowmya_0416",     // Instagram
    "mailto:ysowmya2004@gmail.com"               // Gmail
  ];
  return (
    <div id="contact">
           <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Connect With Me
        </h2>
    
        <div className="flex flex-col  items-center gap-4 mt-6">
          {
            urls.map((url,index)=>(
            <SocialIcon url={url} key={index} fgColor="white" bgColor="transparent" style={{ height: 50, width: 50 }}/>
            ))
          }
        </div>
      </Vortex>
    </div>
    </div>
   
  )
}

export default ContactMe