import React from 'react'
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect';
import './AllPages.css'

function AllPages() {
    const strings = ['web apps.', 'GUIs.', 'React.', 'Python.', 'Flask.']
    return (
        <div>
            <Navbar/>

            {/* Home */}
            <section id='home'>
                <div className='intro'>
                    <p>Hello, I am</p>
                    <h1>Arpan Neupane.</h1><br></br>

                    <p>I am a programmer with interest in</p>
                    <p className='strings'><Typewriter
                                            options={{
												strings: strings,
												autoStart: true,
												loop: true,
										}}
                    /></p>
                </div>

                <div className='button'>
                    <a href='#about'>Learn More.</a>
                </div>

            </section>

            {/* About */}
            <section id='about'>

            </section>
        
            {/* Projects */}
            <section id='projects'>

            </section>

            {/* Contact */}
            <section id='contact'>

            </section>
        </div>
    )
}

export default AllPages
