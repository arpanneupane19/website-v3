import React from 'react'
import './Menu.css'

function Menu({showMenu}) {
    return (
        <div>
            <div className='menu-links'
                style={{
                    visibility: showMenu ? 'visible' : 'hidden',
                    opacity: showMenu ? 1: 0
                }}
                >
                    
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#portfolio'>Portfolio</a>
                <a href='#contact'>Contact</a>
               
            </div>
        </div>
    )
}

export default Menu
