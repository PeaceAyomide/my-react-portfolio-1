import React from 'react'
import Pic2 from '../../assets/clothes.jpeg'
import Pic1 from '../../assets/earth.jpeg'
import Pic3 from '../../assets/school.jpeg'
import {AiOutlineLink} from 'react-icons/ai'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"



const Menu = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
}, [])



  return (
    <section className="portfolio" id="portfolio">
<h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
 className="heading">My <span>Portfolio</span></h2>
<div className="portfolio-container">
<div className="portfolio-box">
<img src={Pic1} alt="" />
<div className="portfolio-layer">
<h4>Space Web</h4>
<p>Beautiful Site On Space And Earth Movement, Click To Check It Out.</p>
<a href="https://peaceayomide.github.io/MySpaceWeb/"><i className='bx bx-link-alt'><AiOutlineLink/></i></a>
</div>
</div> 

<div className="portfolio-box">
    <img src={Pic2} alt=""/>
    <div className="portfolio-layer">
    <h4>Cloth Web</h4>
    <p>Fashion Site On Sneaker, Clothes And Other Wears, Click To Check It Out.</p>
    <a href="https://peaceayomide.github.io/MyClothWebsite/"><i className='bx bx-link-alt'><AiOutlineLink/></i></a>
    </div>
    </div>  

    <div className="portfolio-box">
        <img src={Pic3} alt=""/>
        <div className="portfolio-layer">
        <h4>School Web</h4>
        <p>Amazing  School Site For Children , Click To Check It Out.</p>
        <a href="https://peaceayomide.github.io/MySchoolWebsite/"><i className='bx bx-link-alt'><AiOutlineLink/></i></a>
        </div>
        </div>  
        
</div>
</section>

  )
}

export default Menu