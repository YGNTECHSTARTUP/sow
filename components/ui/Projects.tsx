import React from 'react'
import { Meteors } from './meteors'
import Link from 'next/link'
import Image from 'next/image';

const Projects = () => {
    const EngineeringProjects = [
      {
        "title": "Security Incident Management API",
        "description": "Developed a robust RESTful API for managing security incidents, featuring creation, updates, and retrieval capabilities. Integrated Spring Boot and H2 database for performance, with authentication, logging, and data validation.",
        "imageUrl": "https://example.com/security-incident-api.jpg",
        "link": "https://github.com/BhargavaGoli/IncidentReportUsingSpringBoot"
      },
      {
        "title": "Quiz Platform using Spring Boot & PostgreSQL",
        "description": "Built a full-featured quiz platform with user authentication and data persistence. Used Spring Boot and PostgreSQL to manage quiz questions, user responses, and scoring, ensuring scalability and smooth user experience.",
        "imageUrl": "https://example.com/quiz-platform.jpg",
        "link": "https://github.com/BhargavaGoli/Monolithic-Spring-Boot-Backend-Service-for-quiz-"
      },
      {
        "title": "Web Security Analysis using Burp Suite",
        "description": "Conducted ethical web security analysis using Burp Suite, discovering 5+ vulnerabilities on a less-secure website. Simulated a bus ticket purchase process to expose significant security risks, leading to recommendations for upgrades.",
        "imageUrl": "https://example.com/web-security-analysis.jpg",
        "link": "https://github.com/BhargavaGoli/web-security-analysis"
      },
      {
        "title": "Freelance Web Scraping using BeautifulSoup",
        "description": "Freelanced a web scraping project using Python and BeautifulSoup, targeting the RemoteOk API and Amazon. Extracted data efficiently, demonstrating practical knowledge of web scraping techniques.",
        "imageUrl": "https://example.com/web-scraping.jpg",
        "link": "https://github.com/BhargavaGoli/web-scraping"
      },
      {
        "title": "Game Development with Python and Pygame",
        "description": "Created an interactive game using Python and Pygame, focusing on engaging gameplay and an enhanced user experience.",
        "imageUrl": "https://example.com/game-development.jpg",
        "link": "https://github.com/BhargavaGoli/space-rocket"
      }
      
      ];
      
  return (
    <div className='overflow-hidden bg-gradient-to-b from-neutral-900 to-black' id="project">
        <div className=' text-4xl md:text-6xl lg:text-7xl font-extrabold tex ml-8   md:ml-20 w-full '>
        Projects</div>
        <div className='flex justify-center items-center mx-auto '>

        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 text-center  '>
        {
            EngineeringProjects.map((project,index)=><div key={index}>
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