import React from 'react'
import {BiCodeCurly} from 'react-icons/bi'
import {BsPaletteFill} from 'react-icons/bs'
import {BiSolidBusiness} from 'react-icons/bi'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"



const Menu3 = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
}, [])


  return (
    <section class="services" id="services">
<h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
  class="heading">My <span>Services
</span></h2>

<div class="services-container">
<div class="services-box">
<i class='bx bx-code-curly' ><BiCodeCurly/></i>
<h3>Web Programing</h3>
<p>I offer decent building and maintenance of websites,that performs well with seamless user experience.</p>
</div> 

<div class="services-box">
    <i class='bx bxs-palette'><BsPaletteFill/></i>
    <h3>Neat Design</h3>
    <p>I provide neat creativity and design in websites to reflect a company's brand and ensure a user friendly experience. </p>
    </div> 

    <div class="services-box">
        <i class='bx bxs-business'><BiSolidBusiness/></i>
        <h3>Site Promotion</h3>
        <p> I provide improvement in website content and increase exposure of a website to attract and bring in more customers.</p>
        </div> 
        
    
</div>

</section>

  )
}

export default Menu3