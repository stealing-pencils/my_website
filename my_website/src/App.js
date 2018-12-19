import React, { Component } from 'react';
import './App.css';
import Content from './Content.js'

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App-content">
          <div className="header">
            <header className="App-header">
              <h1>
              Stealing Pencils
              </h1>
            </header>
          </div>
          <div className="title-image">
          </div>
          <div className="about-column-right">
            <h3>
            About Me
            </h3>
          </div>
          <Content/>
          <footer>
            This is a footer
            <div className="social-media">
            </div>
            <div className="contact-details">
            </div>
          </footer>
        </div>
      </div>

    );
  }
}

export default App;
