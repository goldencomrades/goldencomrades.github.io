import React, { Component } from 'react';
import logo from './image.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
           <b> questo è grassetto </b>
          </p>
          <p>
            <table>
              <tr><td>Colonna 1</td><td>Colonna 2</td></tr>
              <tr><td>Dato 1,1</td><td>Dato 1,2</td></tr>
              <tr><td>Dato 2,1</td><td>Dato 2,2</td></tr>
              <tr><td>Dato 3,1</td><td>Dato 3,2</td></tr> <br/>
            </table>
            <img src={logo} alt="logo" />
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
