import React, { useState, useEffect } from 'react';
import "./navbar.scss";
import logo from '../../assets/As.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact-Me.gif';
import burger from '../../assets/burger.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleClickOutsideMenu = (e) => { // Check if the clicked element is not part of the menu or the burger icon
      if (!e.target.closest('.navMenu') && !e.target.closest('.mobMenu')) {
        setShowMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
    }, []);
    return (
        <nav className="navbar">
          <img src={logo} alt="Logo" className='logo' />
          <div className="desktopMenu">
            <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to="works" spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to="clients" spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Client</Link>
          </div>
          <button className="contactMe" onClick={()=>{
            document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
          }}>
            <img src={contactImg} alt="Contact-Me" className="contactMeImg" />Contact Me
          </button>
          <img src={burger} alt="menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
          <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
            <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-75} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to="works" spy={true} smooth={true} offset={-60} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to="clients" spy={true} smooth={true} offset={-60} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Client</Link>
            <Link activeClass='active' to="contactPage" spy={true} smooth={true} offset={-70} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
          </div>
        </nav>
      );
}

export default Navbar;