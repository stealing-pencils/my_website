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
              {`Stealing \nPencils.`}
              </h1>
            </header>
          </div>
          <div className="title-image">
          </div>
          <div className="about-column-right">
            <h3 className="about-me-header">
            About Me
            </h3>
            <div className="about-me-text">
            <p>{`My name is Kate Smith.  I base my life on the teachings of
              Indiana Jones.`}</p>
            <p>{`I continue to keep reaching for all that's exciting
            and different.  Challenges are always worth exploring,
            especially if they're interesting.`}</p>
            </div>
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
