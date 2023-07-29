import React from 'react'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Menu = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7omyz3a', 'template_97ocozd', form.current, 'MuTJwgiJXqwlIeTlq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  useEffect(() => {
    Aos.init({duration: 2000})
}, [])


  return (
    <section class="contact" id="contact">
<h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
 class="heading">Contact <span>Me</span></h2>
<form ref={form} onSubmit={sendEmail}>
<div class="input-box">
<input type="text" name='name' placeholder="Full Name" />
<input type="email" name='email' placeholder="Email Address" />
</div>  
<div class="input-box">
    <input type="text" name='number'
     placeholder="Mobile Number" />
    <input type="text" name='subject' placeholder="Email Subject" />
    </div>    
<textarea name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
<input type="submit"  value="Send Message" class="btn" />
</form>
</section>

  )
}

export default Menu