import React from 'react'
import '../components/Menu.css'
import {Link} from 'react-router-dom'

function Menu({showMenu}) {
    return (
        <div>
            <div className='menu-links'
                style={{
                    visibility: showMenu ? 'visible' : 'hidden',
                    opacity: showMenu ? 1: 0
                }}
                >
                    
                <a href='/#home'>Home</a>
                <a href='/#about'>About</a>
                <a href='/#portfolio'>Portfolio</a>
                <Link to='/contact'>Contact</Link>
               
            </div>
        </div>
    )
}

export default Menu
