import React from 'react'
import ME2 from '../../assets/peace2.png'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"


const Menu = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
}, [])


  return (
    <section class="about" id="about">
<div class="about-img">
   <img src={ME2} alt=""/> 
</div>

<div class="about-content">
<h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
 class="heading">About <span>Me</span></h2>
<h3>Frontend Developer</h3>
<p>Hi, I'm Peace Melodi! Coding is my passion, especially in front-end development. I specialize in crafting responsive and visually appealing websites, and I adore working with React. With experience in various projects, I'm all about attention to detail and creating memorable user experiences.Let's collaborate and make something amazing together! 😎</p>
</div>
</section>

  )
}

export default Menu