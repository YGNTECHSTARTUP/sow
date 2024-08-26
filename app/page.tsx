import Hero from '@/components/Hero'
import About from '@/components/ui/About'
import ContactMe from '@/components/ui/Contact'
import Projects from '@/components/ui/Projects'
import React from 'react'
const page = () => {
  return (
<div className='bg-black'>
  <Hero/>
  <About/>
  <Projects/>
  <ContactMe/>
</div>
  )
}

export default page
