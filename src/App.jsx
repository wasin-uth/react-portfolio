import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import AboutMe from './page/about-me/AboutMe'
import MySkills from './page/my-skills/MySkills'
import ErrPage from './page/ErrPage'
import ContactMe from './page/contact-me/ContactMe'
import Projects from './page/my-projects/Projects'
import { MenuBar } from './components/menu/Menu'
import { Navbar } from './components/navbar/Navbar'

const App = () => {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<MenuBar />}>
            <Route path='/' element={<AboutMe />} />
            <Route path='my-skills' element={<MySkills />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact-me' element={<ContactMe />} />
          </Route>
          <Route path='*' element={<ErrPage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App