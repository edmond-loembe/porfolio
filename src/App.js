import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import NavB from './components/Nav/Navbar';
import Profil from './components/Profil/Profil';
import Competences from './components/Competences/Competences';
import Bio from './components/Bio/Bio';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <NavB />
            <Profil />
            <Bio />
            <Competences/>
            <Contact/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
