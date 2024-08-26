import React from 'react'
import { Meteors } from './meteors'
import Link from 'next/link'
import Image from 'next/image';

const Projects = () => {
    const civilEngineeringProjects = [
        {
          title: "Bridge Construction Over River X",
          description: "This project focuses on the design and construction of a cable-stayed bridge over River X, incorporating advanced materials and seismic-resistant features.",
          imageUrl: "https://example.com/bridge-construction.jpg",
          link: "https://example.com/projects/bridge-construction"
        },
        {
          title: "Sustainable Urban Drainage System",
          description: "A project aimed at developing an eco-friendly urban drainage system to manage stormwater runoff and reduce flooding risks in metropolitan areas.",
          imageUrl: "https://example.com/urban-drainage.jpg",
          link: "https://example.com/projects/urban-drainage"
        },
        {
          title: "Highway Expansion and Rehabilitation",
          description: "This project involves the expansion and rehabilitation of a major highway, improving traffic flow and ensuring road safety with modern engineering solutions.",
          imageUrl: "https://example.com/highway-expansion.jpg",
          link: "https://example.com/projects/highway-expansion"
        },
        {
          title: "Earthquake-Resistant Building Design",
          description: "A project that focuses on designing buildings with innovative structural systems to withstand seismic activities in earthquake-prone regions.",
          imageUrl: "https://example.com/earthquake-building.jpg",
          link: "https://example.com/projects/earthquake-building"
        },
        {
          title: "Smart City Infrastructure Development",
          description: "An ambitious project to develop smart city infrastructure, integrating IoT technology with civil engineering to enhance urban living standards.",
          imageUrl: "https://example.com/smart-city.jpg",
          link: "https://example.com/projects/smart-city"
        }
      ];
      
  return (
    <div className='overflow-hidden bg-gradient-to-b from-neutral-900 to-black' id="project">
        <div className=' text-4xl md:text-6xl lg:text-7xl font-extrabold tex ml-8   md:ml-20 w-full '>
        Projects</div>
        <div className='flex justify-center items-center mx-auto '>

        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 text-center  '>
        {
            civilEngineeringProjects.map((project,index)=><div key={index}>
<div className=" w-full relative max-w-xs  ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            
          </div>
 {/* <Image src={project.imageUrl} alt={project.title} width={500} height={500} className='rounded-full hidden lg:flex' /> */}
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
        {project.title}
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
           {project.description}
          </p>
          <Link href={project.link}>
          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>
          </Link>
         
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
            </div>)
        }
        
        </div>
        </div>
       
    </div>
  )
}

export default Projects