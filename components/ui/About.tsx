import React from 'react'
import { ShootingStars } from './shooting-stars'
import { StarsBackground } from './stars-background'
import Image from 'next/image'

const About = () => {
  return (
    <div>
         <div className="h-[50rem]   rounded-md bg-white dark:bg-neutral-900 flex   relative w-full">
      <div className='m-8   md:m-20 w-full'>
        <div className=' text-4xl md:text-6xl lg:text-7xl font-extrabold tex '>
            About Me</div>
            <br/>
        <div className='lg:flex'>
          <div className='text-center mx-auto flex justify-center lg:justify-end flex-1'>
          
          <Image src='/picrou.png' alt="sowmya" width={300} height={300} className='rounded-full lg:hidden' />
          <Image src='/pic.jpg' alt="sowmya" width={300} height={300} className='rounded-full hidden lg:flex' />

          </div>
          <div className='m-2'>
          <ul className="list-disc list-inside space-y-2 text-white ">
    <li>Hey, I'm <strong>Sowmya Yarramsetti</strong>, a 20-year-old student from Andhra Pradesh, India. I am a daughter, sister, friend, civil engineering enthusiast, and a passionate learner.</li>
    <li>As my age suggests, I'm a student who has completed a diploma in Civil Engineering, specializing in AutoCAD , and I am currently in my final year of B.Tech in Civil Engineering.</li>
    <li>My journey in civil engineering started during my Diploma 1st year, where I developed a strong passion for design and construction.</li>
    <li>I'm proficient in tools like AutoCAD, STAAD.Pro, 3ds Max, CypeCAD, and Primavera, which have helped me create detailed designs and realistic visualizations for various projects.</li>
    <li>I'm eager to apply my expertise in a dynamic role where I can contribute to the successful execution of cutting-edge engineering projects, fostering innovation and excellence at every stage.</li>
    <li>My experience includes streamlining design workflows and integrating various tools to enhance efficiency and shorten project timelines.</li>
    <li>In my free time, I enjoy drawing, painting, traveling, and cooking.</li>
    <li>I don't talk much over any platform, but I do like making friends—whether online or in real life, though I'm somewhat introverted.</li>
    <li>So, if you ever want to talk about anything, feel free to hit me up. I'll get back to you as soon as I'm active/online.</li>
    <li>That's pretty much everything I know about myself so far. If you have anything to share or want to connect, feel free to connect with me.</li>
</ul>

          </div>
          </div>

      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
    </div>
  )
}

export default About