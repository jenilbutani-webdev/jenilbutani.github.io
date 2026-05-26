import React from "react";
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Service from '@/components/Services'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Service />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}
