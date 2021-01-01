import React, {useState, useEffect} from 'react'
import Typewriter from 'typewriter-effect';
import '../components/Allpages.css';
import {BloggyModal, TodosModal, WebsiteModal, GamesModal, PWGenModal, AirQMModal, YTModal} from './Modal';
import Fade from 'react-reveal/Fade';
import bloggy from './img/bloggy.png';
import todos from './img/todos.png';
import airqm from './img/airqm.png';
import ytclone from './img/ytclone.png'
import site from './img/site.png';
import pwgen from './img/pwgen.png';
import games from './img/games.png';

function AllPages() {
    const strings = ['web apps.', 'GUIs.', 'React.', 'Python.', 'Flask.']

    const [igData, setIgData] = useState([{}]);
    
    useEffect(()=> {
        fetch('https://graph.instagram.com/<INSTAGRAM USER ID>?fields=username&access_token=<INSTAGRAM ACCESS TOKEN>').then(
            response => response.json()
        ).then(data => setIgData(data))
    }, []);

    const igURL = `https://instagram.com/${igData.username}`;

    // Bloggy hooks
    const [showBloggy, setShowBloggy] = useState(false);
    const closeBloggy = () => setShowBloggy(false);

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
            {showBloggy || showTodos || showSite || showGames || showPWGen || showAirQM || showYT ? <div onClick={() => setShowBloggy(false) || setShowTodos(false) || setShowSite(false) || setShowGames(false) || setShowPWGen(false) || setShowAirQM(false) || setShowYT(false)} className='backdrop'></div>: null}

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
                </Fade>

                <Fade top cascade>

                <div className='skills-info'>
                    <label className='skills-header'>Skills</label><br></br><br></br>
                    <label className='lang-and-fw'>Languages</label>
                    <div className='languages'>
                        <div className='proficient-row'>
                            <label className='proficient'>Python</label>
                            <label className='proficient'>HTML/CSS</label>
                        </div>
                        <div className='intermediate-row'>
                            <label className='intermediate'>JavaScript</label>
                            <label className='intermediate'>SQL</label>
                        </div>

                        <div className='beginner-row'>
                            <label className='beginner'>Dart</label>
                        </div>
                    </div><br></br>

                    <label className='lang-and-fw'>Frameworks/Libraries</label>
                    <div className='frameworks'>

                        <div className='proficient-row'>
                            <label className='proficient'>Flask</label>
                            <label className='proficient'>Pygame</label>
                        </div>
                        
                        <div className='intermediate-row'>
                            <label className='intermediate'>Bootstrap</label>
                            <label className='intermediate'>React</label>
                            <label className='intermediate'>Tkinter</label>
                        </div>

                        <div className='beginner-row'>
                            <label className='beginner'>Flutter</label>
                            <label className='beginner'>Turtle Graphics</label>
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
                        <img src={bloggy} alt='website'/>
                        <div className='tech-used'>
                            <label className='tool'>Python</label>
                            <label className='tool'>Flask</label>
                            <label className='tool'>SQLite</label>
                        </div>
                    </div>
                    <div className='app' onClick={() => setShowTodos(true)}>
                        <label>Todos</label>
                        <img src={todos} alt='website'/>
                        <div className='tech-used'>
                            <label className='tool'>Python</label>
                            <label className='tool'>Flask</label>
                            <label className='tool'>SQLite</label>
                        </div>
                    </div>
                    <div className='app' onClick={() => setShowSite(true)}>
                        <label>This Website</label>
                        <img src={site} alt='website'/>
                        <div className='tech-used'>
                            <label className='tool'>React.js</label>
                            <label className='tool'>Instagram API</label>
                        </div>
                    </div>
                    <div className='app' onClick={() => setShowYT(true)}>
                        <label>YouTube Frontend Clone</label>
                        <img src={ytclone} alt='website'/>
                        <div className='tech-used'>
                            <label className='tool'>React.js</label>
                            <label className='tool'>Router</label>
                            <label className='tool'>Firebase</label>
                        </div>
                    </div>       
                    <div className='app' onClick={() => setShowGames(true)}>
                        <label>Games</label>
                        <img src={games} alt='website'/>
                        <div className='tech-used'>
                            <label className='tool'>Python</label>
                            <label className='tool'>Pygame</label>
                            <label className='tool'>Turtle Graphics</label>
                        </div>
                    </div>    
                    <div className='app' onClick={() => setShowAirQM(true)}>
                        <label>Air Quality Monitor</label>
                        <img src={airqm} alt='website'/>
                        <div className='tech-used'>
                            <label className='tool'>Python</label>
                            <label className='tool'>Tkinter</label>
                            <label className='tool'>API</label>
                        </div>
                    </div>     
                    <div className='app' onClick={() => setShowPWGen(true)}>
                        <label>Password Generator</label>
                        <img src={pwgen} alt='website'/>
                        <div className='tech-used'>
                            <label className='tool'>JavaScript</label>
                            <label className='tool'>HTML</label>
                            <label className='tool'>CSS</label>
                        </div>
                    </div>

                </div>
                <p className='ending-msg'>This took time to make 🤣.</p>
                <p className='ending-msg'>Created with passion by <a href={igURL} target='__blank'>{igData.username}</a>.</p>
            </section>

            <BloggyModal
                showBloggy={showBloggy}
                closeBloggy={closeBloggy}
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
