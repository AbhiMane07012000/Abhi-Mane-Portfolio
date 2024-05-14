import './App.css'
import Education from './Pages/Education/Education'
import Header from './Pages/Header/Header'
import Home from './Pages/Home/Home'
import AboutMe from './Pages/AboutMe/AboutMe'
import Projects from './Pages/Projects/Projects'
import { Route, Routes } from 'react-router-dom'
import Footer from './Pages/Footer/Footer'
import Skills from "./Pages/Skills/Skills"


function App() {
  

  return (
    <>
      <Header />
      <Routes>
      <Route default path='/' element={<Home />}></Route>
      <Route path='/education' element={<Education />}/>
      <Route path='/about-me' element={<AboutMe />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/skills' element={<Skills/>}/>

    </Routes>
    <Footer />
    
    </>
  )
}

export default App
