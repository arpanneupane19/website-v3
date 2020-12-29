import React from 'react'
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect';
import './AllPages.css'
import bloggy from './img/bloggy.png';
import todos from './img/todos.png';
import airqm from './img/airqm.png';
import ytclone from './img/ytclone.png'
import site from './img/site.png';
import pwgen from './img/pwgen.png';

function AllPages() {
    const strings = ['web apps.', 'GUIs.', 'React.', 'Python.', 'Flask.']
    return (
        <div>
            <Navbar/>

            {/* Home */}
            <section id='home'>
                <div className='intro'>
                    <label>Hello, I am</label><br></br>
                    <label className='name'>Arpan Neupane.</label><br></br><br></br>

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
                    <label>About Me</label><br></br><br></br>
                    <p>Hello there! My name is Arpan Neupane and I am a 13 year old programmer.
                        My interests are in web development, and I mainly use Python as my backend.
                        I also have created games using Python's Pygame library and GUI applications with Tkinter.
                        I enjoy creating apps that can help people, make every day life easier, and make it fun.
                        I'm always looking forward to improve my applications.
                    </p><br></br>
                    <p> 
                        If you have any questions or comments regarding my apps, please feel
                        free to contact me at <a href="mailto:arpanneupane19@gmail.com" target='__blank'>arpanneupane19@gmail.com</a> or by 
                        clicking the mail icon on the sidebar.
                    </p>
                </div>

                <div className='skills-info'>
                    <label className='skills-header'>Skills</label><br></br><br></br>
                    <label className='lang-and-fw'>Languages</label>
                    <div className='languages'>
                        <label className='proficient'>Python</label>
                        <label className='proficient'>JavaScript</label>
                        <label className='proficient'>HTML/CSS</label>
                    </div><br></br>

                    <label className='lang-and-fw'>Frameworks/Libraries</label>
                    <div className='frameworks'>
                        <label className='proficient'>Flask</label>
                        <label className='proficient'>Pygame</label>
                        <label className='intermediate'>Bootstrap</label>
                        <label className='intermediate'>React</label>
                    </div>
                </div>

            </section>

            <div className='parallax'></div>
        
            {/* Projects */}
            <section id='projects'>
                <label className='projects-header'>Projects</label><br></br><br></br>
                <div className='projects'>
                    <div className='app'>
                        <label>Bloggy</label>
                        <img src={bloggy} alt='website'/>
                        <div className='tech-used'>
                            <label className='tool'>Python</label>
                            <label className='tool'>Flask</label>
                            <label className='tool'>SQLite</label>
                        </div>
                    </div>
                    <div className='app'>
                        <label>Todos</label>
                        <img src={todos} alt='website'/>
                        <div className='tech-used'>
                            <label className='tool'>Python</label>
                            <label className='tool'>Flask</label>
                            <label className='tool'>SQLite</label>
                        </div>
                    </div>
                    <div className='app'>
                        <label>This Website</label>
                        <img src={site} alt='website'/>
                        <div className='tech-used'>
                            <label className='tool'>React</label>
                            <label className='tool'>React Router</label>
                        </div>
                    </div>
                    <div className='app'>
                        <label>YouTube Frontend Clone</label>
                        <img src={ytclone} alt='website'/>
                        <div className='tech-used'>
                            <label className='tool'>React</label>
                            <label className='tool'>React Router</label>
                            <label className='tool'>Firebase</label>
                        </div>
                    </div>           
                    <div className='app'>
                        <label>Air Quality Monitor</label>
                        <img src={airqm} alt='website'/>
                        <div className='tech-used'>
                            <label className='tool'>Python</label>
                            <label className='tool'>Tkinter</label>
                            <label className='tool'>API</label>
                        </div>
                    </div>     
                    <div className='app'>
                        <label>Password Generator</label>
                        <img src={pwgen} alt='website'/>
                        <div className='tech-used'>
                            <label className='tool'>JavaScript</label>
                            <label className='tool'>HTML</label>
                            <label className='tool'>CSS</label>
                        </div>
                    </div>    
                </div>
            </section>

            {/* Contact */}
            <section id='contact'>

            </section>
        </div>
    )
}

export default AllPages
