import React from 'react'

import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision' 


import { Button } from './ui/button'
import Link from 'next/link'
const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
    <div id='#home'>
    <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl xl:text-8xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
      Hey, I&apos;m  Yarramsetti Sowmya {" "}
      <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
          <span className="">Passionate Civil Engineer.</span>
        </div>
        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          <span className="">Passionate Civil Engineer.</span>
        
        </div>
        
      </div>
    </h2>
    <div className='flex  mx-auto text-center justify-center'>
        <Link href="/resume.pdf">
        <Button className="mt-4 bg-indigo-600 dark:text-primary hover:bg-fuchsia-400 hover:text-primary-foreground"  >Check Out Me Resume</Button>

        </Link>
    &nbsp;&nbsp;
    <Link href="mailto:ysowmya2004@gmail.com">
    <Button className="mt-4 bg-indigo-600 dark:text-primary hover:bg-fuchsia-400 hover:text-primary-foreground" >Hire Me</Button>

    </Link>
        
        </div>
    </div>
    
    
    {/* <ThemeToggle/> */}
  </BackgroundBeamsWithCollision>  )
}

export default Hero