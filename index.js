import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles/style.css';
import './responsiveness/mobile.css';
import './responsiveness/tablet.css';
import HomeScreen from './components/HomeScreen'

class App extends Component {
  

  render() {
    return (
      <div>

      <HomeScreen/>
       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
