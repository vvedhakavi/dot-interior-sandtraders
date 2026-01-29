import React from 'react'
import Hero from './Hero'
import Aboutus from './Aboutus';
import Services from './Services';
import Contact_1 from './Contact_1';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Projects_contact from './projects_contact';
export default function Home() {
  return (
    <div className='home pb-5'>
      <Hero />
      <Aboutus />
      <Services />
      <Projects />
      <Projects_contact/>
      <Testimonials />
      <Contact_1 />
    </div>
  )
}
