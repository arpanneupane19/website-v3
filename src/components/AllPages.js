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
                <div className='about-info'>
                    <h2>About Me</h2><br></br>
                    <label>Hello there! My name is Arpan Neupane and I am a 13 year old programmer.
                        My interests are in web development, and I mainly use Python as my backend.
                        I also have created games using Python's Pygame library and GUI applications with Tkinter.
                        I enjoy creating apps that can help people, make every day life easier, and make it fun.
                        I'm always looking forward to improve my applications.
                    </label><br></br><br></br>
                    <label> 
                        If you have any questions or comments regarding my apps, please feel
                        free to contact me at <a href="mailto:arpanneupane19@gmail.com" target='__blank'>arpanneupane19@gmail.com</a> or by 
                        clicking the mail icon on the sidebar.
                    </label>
                </div>

                <div className='skills-info'>
                    <h2>Skills</h2><br></br>
                    <label>Languages</label>
                    <div className='languages'>
                        <label className='proficient'>Python</label>
                        <label className='proficient'>JavaScript</label>
                        <label className='proficient'>HTML/CSS</label>
                    </div><br></br>

                    <label>Frameworks/Libraries</label>
                    <div className='frameworks'>
                        <label className='proficient'>Flask</label>
                        <label className='proficient'>Pygame</label>
                        <label className='intermediate'>Bootstrap</label>
                        <label className='intermediate'>React</label>
                    </div>
                </div>

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
