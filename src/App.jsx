import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Technologies from './components/Technology.jsx'
import Project from './components/Project.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  return (
    <>
      <div className='overflow-x-hidden text-stone-300 antialiased'>
        <div className='fixed inset-0 -z-10'>
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
          </div>
        </div>
      </div>
      <div>
        <Navbar />
        <Hero />
        <Technologies />
        <Project/>
        <Experience/>
        <Contact/>
      </div>
    </>
  )
}

export default App
