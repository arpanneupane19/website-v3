import './App.css';
import AllPages from './components/AllPages'
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navbar
              home='/#home'
              about='/#about'
              projects='/#projects'
            />
            <AllPages />
          </Route>

          <Route exact path='/contact'>
            <Navbar
              home='/#home'
              about='/#about'
              projects='/#projects'
            />
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
