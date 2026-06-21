import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Technologies from './components/Technology.jsx'
import Project from './components/Project.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import BackToTop from './components/BackToTop.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      <div className='overflow-x-hidden text-stone-300 antialiased'>
        {/* Enhanced Background */}
        <div className='fixed inset-0 -z-10'>
          <div className="relative h-full w-full bg-slate-950">
            {/* Primary gradient orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)]"></div>
            {/* Secondary ambient glow */}
            <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(219,39,119,0.06)_0%,transparent_70%)]"></div>
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#1e1b4b20,transparent)]"></div>
          </div>
        </div>

        {/* Content */}
        <Navbar />
        <main className="w-full px-6 md:px-12 lg:px-20">
          <Hero />
          <Technologies />
          <Project />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App
