import React from 'react'
import { ShootingStars } from './shooting-stars'
import { StarsBackground } from './stars-background'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about">
         <div className="h-fit   rounded-md bg-white dark:bg-neutral-900 flex   relative w-full">
      <div className='m-8   md:m-20 w-full'>
        <div className=' text-4xl md:text-6xl lg:text-7xl font-extrabold tex '>
            About Me</div>
            <br/>
        <div className=' lg:flex'>
        <ul className="list-disc list-inside space-y-2 text-white text-sm lg:text-lg 2xl:text-xl ">
          <div className='flex justify-center '>
          <Image src='/picrou.png' alt="Bhargava" width={300} height={300} className='rounded-full lg:hidden' />
          </div>
        
          <li>Hey, I&apos;m <strong>Goli Bhargava</strong>, a 20-year-old from Andhra Pradesh, India. I&apos;m a son, friend, web development enthusiast, and always eager to learn something new.</li> 
<li>I completed my 10th grade with a perfect 10 GPA and went on to finish my intermediate with a decent percentage. Currently, I&apos;m pursuing my B.Tech at Sathyabama University.</li> 
<li>My passion for web development began during my college years, and I&apos;ve worked on several projects in this field. Over time, I developed a strong interest in backend development, which led me to dive deep into Java and the Spring Framework.</li> 
<li>I&apos;m proficient in solving Data Structures and Algorithms (DSA) problems in Java, and I regularly practice on platforms like LeetCode and CodeChef.</li> 
<li>I&apos;m excited to apply my backend expertise in Java Spring Framework in a dynamic role where I can contribute to innovative projects and push the boundaries of what&apos;s possible.</li> 
<li>When I&apos;m not coding, I enjoy chilling with Netflix on the weekends and surfing the web for interesting topics. I also love traveling and exploring new places.</li> 
<li>Although I&apos;m a bit introverted, I&apos;m always open to making new connections. So, if you ever want to chat or collaborate, feel free to reach out—I&apos;ll get back to you whenever I&apos;m online.</li> 
<li>That&apos;s a bit about me! If you&apos;d like to connect or share something, I&apos;m always happy to hear from new people.</li></ul>
          
          <div className='lg:ml-2'>
         
          <div className='text-center mx-auto flex justify-center 2xl:-mt-20 lg:justify-end flex-grow overflow-hidden'>
          
          
          <Image src='/pics.png' alt="Bhargava" width={500} height={500} className='rounded-full hidden lg:flex' />

          </div>
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