import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import {BiBook} from 'react-icons/bi'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"


const Navsocials = () => {

const [activeNav, setActiveNav] = useState("#")

  useEffect(() => {
    Aos.init({

    })
}, [])

    return (
      <nav className='navs' data-aos="false">
      <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>      
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiBook/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage/></a>
        </nav>
      
  )
}

export default Navsocials