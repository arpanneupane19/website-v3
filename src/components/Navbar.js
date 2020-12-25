import React, {useState} from 'react'
import './Navbar.css'
import {FaGripLines} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const closeMenu = () => setShowMenu(false);
    return (
        <nav className='navbar'>
            <label className='logo'>Arpan Neupane</label>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#home'>Contact</a></li>
            </ul>
            <li onClick={() => showMenu ? setShowMenu(false): setShowMenu(true)}className='bars'>{showMenu ? <AiOutlineClose/>: <FaGripLines/>}</li>            
            
        </nav>
    )
}

export default Navbar
