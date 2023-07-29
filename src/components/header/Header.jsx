import React from 'react'


const Header = () => {
  return (
    <header className="header">
<a href="" className="logo">
PeaceDev
</a>

<i className='bx bx-menu' id="menu-icon"></i>


<nav className="navbar">
    <a href="#home">Home</a>
    <a href="#portfolio" className="active">Portfolio</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>    

</nav>
</header>

  )
}

export default Header