import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import Transition from './Transition/Transition';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';


library.add(faIgloo);

class App extends Component {

  render() {
  
    return (
      <div>
        <Nav />
        <Main />
        <Transition number='second' height='30vh'/>
        <Contact />
        <Transition number='third' height='10vh' />
        <Footer />
      </div>
    );
  }
}

export default App;
