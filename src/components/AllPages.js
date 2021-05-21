// Code written by Arpan Neupane
// Copyright © Arpan Neupane 2021.

import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import '../components/Allpages.css';
import { BloggyModal, SecuroChatModal, WeatherModal, TodosModal, WebsiteModal, GamesModal, PWGenModal, AirQMModal, YTModal } from './Modal';
import Fade from 'react-reveal/Fade';
import bloggy from './img/bloggy.png';
import todos from './img/todos.png';
import airqm from './img/airqm.png';
import ytclone from './img/ytclone.png'
import site from './img/site.png';
import pwgen from './img/pwgen.png';
import games from './img/games.png';
import weatherwiz from './img/weatherwiz.png';
import securochat from './img/securochat.png';

function AllPages() {
    const strings = ['web programming.', 'content creation.', 'full stack development.', 'teaching.']

    // Bloggy hooks
    const [showBloggy, setShowBloggy] = useState(false);
    const closeBloggy = () => setShowBloggy(false);

    // SecuroChat hooks
    const [showSecuroChat, setShowSecuroChat] = useState(false);
    const closeSecuroChat = () => setShowSecuroChat(false);

    // Weather Wizard hooks
    const [showWeather, setShowWeather] = useState(false);
    const closeWeather = () => setShowWeather(false);

    // Todos hooks
    const [showTodos, setShowTodos] = useState(false);
    const closeTodos = () => setShowTodos(false);


    // Site hooks
    const [showSite, setShowSite] = useState(false);
    const closeSite = () => setShowSite(false);

    // Games hooks
    const [showGames, setShowGames] = useState(false);
    const closeGames = () => setShowGames(false);

    // PWGen hooks
    const [showPWGen, setShowPWGen] = useState(false);
    const closePWGen = () => setShowPWGen(false);

    // AirQM hooks
    const [showAirQM, setShowAirQM] = useState(false);
    const closeAirQM = () => setShowAirQM(false);

    // YT Clone hooks
    const [showYT, setShowYT] = useState(false);
    const closeYT = () => setShowYT(false);



    return (
        <div>
            {showBloggy || showSecuroChat || showWeather || showTodos || showSite || showGames || showPWGen || showAirQM || showYT ? <div onClick={() => setShowBloggy(false) || setShowSecuroChat(false) || setShowWeather(false) || setShowTodos(false) || setShowSite(false) || setShowGames(false) || setShowPWGen(false) || setShowAirQM(false) || setShowYT(false)} className='backdrop'></div> : null}
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

                    <div className='button'>
                        <a href='#about'>Learn More.</a>
                    </div>
                </div>


            </section>

            {/* About */}
            <section id='about'>
                <Fade top cascade>

                    <div className='about-info'>
                        <h2 className='about-header'>About Me</h2><br></br>
                        <p>Hello there! My name is Arpan Neupane and I am a 13 year old programmer. I like creating apps and sites that can help people, make life easier, and make it fun. I'm always looking forward to
                        improving my apps. I also make YouTube videos surrounding technology and programming. I make tutorials, best practices, and also give advice on how to use tools better.
                        </p><br></br>
                        <p>
                            If you have any questions or comments regarding my apps, please feel
                        free to contact me at <a href="mailto:arpanneupane19@gmail.com" target='__blank'>arpanneupane19@gmail.com</a> or by
                        going to the contact page.
                    </p>
                    </div>
                </Fade>

                <Fade top cascade>

                    <div className='skills-info'>
                        <h2 className='skills-header'>Skills</h2><br></br>
                        <p className='lang-and-fw'>Languages</p>
                        <div className='languages'>
                            <div className='proficient-row'>
                                <p className='proficient'>Python</p>
                                <p className='proficient'>HTML/CSS</p>
                                <p className='proficient'>Bash</p>
                            </div>
                            <div className='intermediate-row'>
                                <p className='intermediate'>JavaScript</p>
                                <p className='intermediate'>SQL</p>
                            </div>

                            <div className='beginner-row'>

                            </div>
                        </div><br></br>

                        <p className='lang-and-fw'>Frameworks/Libraries</p>
                        <div className='frameworks'>

                            <div className='proficient-row'>
                                <p className='proficient'>Flask</p>
                                <p className='proficient'>Pygame</p>
                            </div>

                            <div className='intermediate-row'>
                                <p className='intermediate'>React</p>
                                <p className='intermediate'>React Native</p>
                                <p className='intermediate'>Express</p>
                                <p className='intermediate'>Node</p>
                            </div>

                            <div className='beginner-row'>
                                <p className='beginner'>Tkinter</p>
                            </div>

                        </div>
                    </div>
                </Fade>


            </section>

            <div className='parallax'></div>

            {/* Projects */}
            <section id='projects'>
                <label className='projects-header'>Projects</label>
                <div className='projects'>
                    <div className='app' onClick={() => setShowBloggy(true)}>
                        <label>Bloggy</label>
                        <img src={bloggy} alt='Bloggy' />
                        <div className='tech-used'>
                            <label className='tool'>Flask</label>
                            <label className='tool'>Socket.io</label>
                            <label className='tool'>PostgreSQL</label>
                        </div>
                    </div>
                    <div className='app' onClick={() => setShowSecuroChat(true)}>
                        <label>SecuroChat</label>
                        <img src={securochat} alt='SecuroChat' />
                        <div className='tech-used'>
                            <label className='tool'>React</label>
                            <label className='tool'>Node.js</label>
                            <label className='tool'>Socket.io</label>
                        </div>
                    </div>
                    <div className='app' onClick={() => setShowWeather(true)}>
                        <label>Weather Wizard</label>
                        <img src={weatherwiz} alt='Weather Wizard' />
                        <div className='tech-used'>
                            <label className='tool'>React</label>
                            <label className='tool'>Weather API</label>
                        </div>
                    </div>
                    <div className='app' onClick={() => setShowTodos(true)}>
                        <label>Todos</label>
                        <img src={todos} alt='Todos' />
                        <div className='tech-used'>
                            <label className='tool'>Flask</label>
                            <label className='tool'>SQLite</label>
                            <label className='tool'>HTML/CSS</label>
                        </div>
                    </div>
                    <div className='app' onClick={() => setShowSite(true)}>
                        <label>This Website</label>
                        <img src={site} alt='This Website' />
                        <div className='tech-used'>
                            <label className='tool'>React</label>
                        </div>
                    </div>
                    <div className='app' onClick={() => setShowYT(true)}>
                        <label>YouTube Frontend Clone</label>
                        <img src={ytclone} alt='YouTube Clone' />
                        <div className='tech-used'>
                            <label className='tool'>React</label>
                            <label className='tool'>Firebase</label>
                        </div>
                    </div>
                    <div className='app' onClick={() => setShowGames(true)}>
                        <label>Games</label>
                        <img src={games} alt='Games' />
                        <div className='tech-used'>
                            <label className='tool'>Python</label>
                            <label className='tool'>Pygame</label>
                            <label className='tool'>Turtle</label>
                        </div>
                    </div>
                    <div className='app' onClick={() => setShowAirQM(true)}>
                        <label>Air Quality Monitor</label>
                        <img src={airqm} alt='Air Quality Monitor' />
                        <div className='tech-used'>
                            <label className='tool'>Python</label>
                            <label className='tool'>Tkinter</label>
                            <label className='tool'>API</label>
                        </div>
                    </div>
                    <div className='app' onClick={() => setShowPWGen(true)}>
                        <label>Password Generator</label>
                        <img src={pwgen} alt='Password Generator' />
                        <div className='tech-used'>
                            <label className='tool'>JavaScript</label>
                            <label className='tool'>HTML/CSS</label>
                        </div>
                    </div>

                </div><br></br>
                <p></p>
                <p className='ending-msg'>Creataed with ❤️ by <a href='https://instagram.com/arpan.neupane07' target='__blank'>Arpan Neupane</a>.</p>
            </section>

            <BloggyModal
                showBloggy={showBloggy}
                closeBloggy={closeBloggy}
            />
            <SecuroChatModal
                showSecuroChat={showSecuroChat}
                closeSecuroChat={closeSecuroChat}
            />
            <WeatherModal
                showWeather={showWeather}
                closeWeather={closeWeather}
            />
            <TodosModal
                showTodos={showTodos}
                closeTodos={closeTodos}
            />
            <WebsiteModal
                showSite={showSite}
                closeSite={closeSite}
            />
            <GamesModal
                showGames={showGames}
                closeGames={closeGames}
            />
            <PWGenModal
                showPWGen={showPWGen}
                closePWGen={closePWGen}
            />
            <AirQMModal
                showAirQM={showAirQM}
                closeAirQM={closeAirQM}
            />
            <YTModal
                showYT={showYT}
                closeYT={closeYT}
            />
            <GamesModal
                showGames={showGames}
                closeGames={closeGames}
            />
        </div>
    )
}

export default AllPages
