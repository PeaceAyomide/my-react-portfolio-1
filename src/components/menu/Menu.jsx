import React from 'react'
import ME from '../../assets/peace1.png'
import CV from '../../assets/PeaceCv.pdf'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'


const Menu = () => {
  return (
    <section className="home" id="home">
<div className="home-content">
<h3>Hi, i'm</h3>
<h1>Peace Melodi</h1>
        <h3>And I'm a <span className="multiple-text">
        <Typewriter
            words={['Frontend Dev', 'Designer', 'Freelancer']}
            loop={true}
            
            
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
           />
        </span></h3>
<p>A Passionate Front-end Developer, creating captivating web experiences with user-centered design. Let's turn your vision into a thriving reality.</p>
<div className="social-media">
    <a href="https://www.facebook.com/peace.ayo.982?mibextid=ZbWKwL"><FaFacebookF/></a>
    <a href="https://twitter.com/Diamond_Dogs123?t=5Er9QHhZ7Eo8U7owur46Pw&s=09"><FaTwitter/></a>
    <a href="https://instagram.com/peace_ayomide1?igshid=ZGUzMzM3NWJiOQ=="><FaInstagram/></a>
    <a href="https://www.linkedin.com/in/melodi-peace-b62603268/"><FaLinkedin/></a>
</div>
<a href={CV} download className="btn">Download CV</a>
</div>
<div className="home-img">
<img src={ME} alt=""/>
</div>
</section>

  )
}

export default Menu