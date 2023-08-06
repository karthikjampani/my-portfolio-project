import React, {useState} from 'react'
import '../components/Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'


function Navbar() {


const[click, setClick] = useState(false);
const handleClick = () => setClick(!click)
const closeMenu = () => setClick(false)



  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>
                <h1>My Profile</h1>
            </a>
            <div className='mayblists' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{color: 'white'}}/>):<FaBars size={30} style={{color: 'white'}} /> }
                
            </div>
            <ul className={click ? "navMenu active":"navMenu"}>
                <li className='nav-item'>
                    <a href='#section-1' onClick={closeMenu}>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='#section-2' onClick={closeMenu}>About me</a>
                </li>
                <li className='nav-item' >
                    <a href='#section-3' onClick={closeMenu}>My Skills</a>
                </li>
                <li className='nav-item'>
                    <a href='#section-4' onClick={closeMenu}>My projects</a>
                </li>
            </ul>
            
        </nav>
      
    </div>
  )
}

export default Navbar
