import React from 'react'
import '../components/Modal.css'


export function BloggyModal ({showBloggy, closeBloggy}) {
	return (

		<div className='modal-container'
			style={{
				visibility: showBloggy ? 'visible' : 'hidden',
				opacity: showBloggy ? 1: 0


			}}
		>
			<div className='modal-header'>
				<h4>Bloggy</h4>
				<span onClick={closeBloggy} className='close-modal-btn'>x</span>
			</div>
			<br></br>
			<div className='modal-content'>
				<p>
				This is a social networking app created using the <a href="https://flask.palletsprojects.com/en/1.1.x/" target="__blank">Flask</a> web framework in <a href="https://python.org" target="__blank">Python</a>.
				Users can create blog posts, like blog posts, comment on them, and follow other users. Users have the ability to also update their accounts,
                set profile pictures, change password, create a bio, and many more!<br></br>
				This web application uses Python as the backend and HTML, CSS, and Bootstrap as the frontend. It is using a <a href="https://www.sqlite.org/index.html" target="__blank">SQLite</a> database. <br></br><br></br>
				The GitHub repository is <a href="https://github.com/arpanneupane19/bloggy-webapp" target="__blank">here! </a>
				The live demo is <a href="https://bloggyapp.pythonanywhere.com" target="__blank">here!</a>
				</p>
			</div>

		</div>
	)
}




export function TodosModal ({showTodos, closeTodos}) {
	return (
		<div className='modal-container'
			style={{
				visibility: showTodos ? 'visible' : 'hidden',
				opacity: showTodos ? 1: 0
				
			}}
		>
			<div className='modal-header'>
				<h4>Todos</h4>
				<span onClick={closeTodos} className='close-modal-btn'>x</span>
			</div>
			<br></br>
			<div className='modal-content'>
				<p>
				This is a Todo-List-App created using the <a href="https://flask.palletsprojects.com/en/1.1.x/" target="__blank">Flask</a> web framework in <a href="https://python.org" target="__blank">Python</a>.
				Users can sign up, create todos, and mark them complete once they have been finished. They can edit todos if they'd want to change the task.
				This app is able to perform CRUD operations.
				This web application uses Python as the backend and HTML & CSS as the frontend. It is using a <a href="https://www.sqlite.org/index.html" target="__blank">SQLite</a> database.<br></br><br></br>
				The GitHub repository is <a href="https://github.com/arpanneupane19/bloggy-webapp." target="__blank">here!</a>
				The live demo is <a href="https://todosapp.pythonanywhere.com" target="__blank">here!</a>

				</p>
			</div>

		</div>
	)
}


export function WebsiteModal ({showSite, closeSite}) {
	return (



		<div className='modal-container'
			style={{
				visibility: showSite ? 'visible' : 'hidden',
				opacity: showSite ? 1: 0
				
			}}
		>
			<div className='modal-header'>
				<h4>This Website</h4>
				<span onClick={closeSite} className='close-modal-btn'>x</span>
			</div>
			<br></br>
			<div className='modal-content'>
				<p>
					This is the third version of my portfolio site. I built it using <a href="https://reactjs.org" target="__blank">React</a>. You can view the code <a href="https://github.com/arpanneupane19/personal-websitev3" target="__blank">here!</a><br>
					</br><br></br>
                    <a href="https://github.com/arpanneupane19/arpanneupane19.github.io" target="__blank">First version</a> and <a href="https://github.com/arpanneupane19/personal-websitev2" target='__blank'>second version</a>.

					


				</p>
			</div>

		</div>

	)

}

export function GamesModal ({showGames, closeGames}) {
	return (
		<div className='modal-container'
			style={{
				visibility: showGames ? 'visible' : 'hidden',
				opacity: showGames ? 1: 0
				
			}}
		>
			<div className='modal-header'>
				<h4>Games</h4>
				<span onClick={closeGames} className='close-modal-btn'>x</span>
			</div>
			<br></br>
			<div className='modal-content'>
				<p>
					These are my games! I have created 7 games so far and they are all available on both
					Windows and macOS. I originally started learning Python by creating games.
					6 of these games were created using the <a href="https://pygame.org" target='__blank'>Pygame </a>library, and the Snake game was made
					with the built in Turtle module in Python.<br></br>
					You can check my games out <a href="https://arpanneupane.itch.io/" target="__blank">here! </a>
					GitHub repositories are <a href="https://github.com/arpanneupane19?tab=repositories" target="__blank">here</a> for some of the games.
				</p>
			</div>

		</div>

	)
}

export function PWGenModal ({showPWGen, closePWGen}) {
	return (
		<div className='modal-container'
			style={{
				visibility: showPWGen ? 'visible' : 'hidden',
				opacity: showPWGen ? 1: 0
				
			}}
		>
			<div className='modal-header'>
				<h4>Password Generator</h4>
				<span onClick={closePWGen} className='close-modal-btn'>x</span>
			</div>
			<br></br>
			<div className='modal-content'>
				<p>
					
					This is a Password Generator created using <a href="https://www.javascript.com/" target="__blank">JavaScript</a>.
					You can click a button and it will randomly generate a secure password and you can click the copy button to copy the password.
					The GitHub repository is <a href="https://github.com/arpanneupane19/passwordgenerator" target="__blank">here!</a><br></br>
					The live demo is <a href="https://passwordgenarpan.netlify.app" target="__blank">here!</a>

				</p>
			</div>

		</div>

	)
}

export function YTModal ({showYT, closeYT}) {
	return (
		<div className='modal-container'
			style={{
				visibility: showYT ? 'visible' : 'hidden',
				opacity: showYT ? 1: 0
				
			}}
		>
			<div className='modal-header'>
				<h4>YouTube Clone</h4>
				<span onClick={closeYT} className='close-modal-btn'>x</span>
			</div>
			<br></br>
			<div className='modal-content'>
				<p>
					This is a frontend YouTube clone created using <a href="https://reactjs.org" target="__blank">React</a>. I deployed this on <a href="https://firebase.google.com/" target="__blank">Firebase</a>.
					It looks similar to what you'd see on the YouTube home page.
				</p>
			</div>

		</div>

	)
}



export function AirQMModal ({showAirQM, closeAirQM}) {
	return (
		<div className='modal-container'
			style={{
				visibility: showAirQM ? 'visible' : 'hidden',
				opacity: showAirQM ? 1: 0
				
			}}
		>
			<div className='modal-header'>
				<h4>Air Quality Monitor</h4>
				<span onClick={closeAirQM} className='close-modal-btn'>x</span>
			</div>
			<br></br>
			<div className='modal-content'>
				<p>
					This is a desktop app created in Python's Tkinter library.
					You can type in a zip code and the app uses an API to get the air quality in that zip code.
					The background changes depending on the quality of the air.
					It requires internet connection in order to use it.<br></br>
					The GitHub repository is <a href="https://github.com/arpanneupane19/passwordgenerator" target="__blank">here! </a>
					Download it from <a href="https://airqualitymonitor.netlify.app" target="__blank">here!</a>
				</p>
			</div>

		</div>

	)
}