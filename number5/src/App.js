import React, { Component } from 'react';
import Main from './Components/Main'
import './App.css';
import Navigation from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation />
          <Main />
          <footer>       
            <p>© 2019 Pizzeriotella </p>
            <p>6947 Koch Gateway, 68270-000, Oriximiná, State of Pará</p>        
          </footer>
      </div>
      
    );
  }
}

export default App;
