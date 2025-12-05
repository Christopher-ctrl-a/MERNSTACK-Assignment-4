// navbar.jsx Christopher Esguerra 301483615 September 11, 2025

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import '../pagecss/navbar.css'
import Logo from '../assets/Logos.svg'
import Home from './home.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'
import Project from './project.jsx'
import Service from './service.jsx'
import Login from './login.jsx'

export default function Navbar() {
  return (
    

      
        <BrowserRouter>
      <nav>
        <img src={Logo} className="logo react" alt="My Logo" />
        <div className="nav-content"><Link to="/">Home</Link></div>
        <div className="nav-content"><Link to="/about">About</Link></div>
        <div className="nav-content"><Link to="/contact">Contact</Link></div>
        <div className="nav-content"><Link to="/projects">Projects</Link></div>
        <div className="nav-content"><Link to="/services">Services</Link></div>
        <div className="nav-content"><Link to="/login">Login</Link></div>
      </nav>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/services" element={<Service/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
      
  )
}