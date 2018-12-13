import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="header">
          <header className="App-header">
            <h1>
            Stealing Pencils under construction
            </h1>
          </header>
        </div>
        <body>
          <div className="title-image">
          </div>
          <div className="about-column-right">
            <h3>
            About Me
            </h3>
          </div>
          <div className="main-blog-container">
            <h2>
            Here is my blog
            </h2>
            <div className="posts">
              <h4 className="post-title">
                Here is a post title
              </h4>
              <div className="post-text">
              Here is post text
              </div>
            </div>
          </div>
        </body>
        <footer>
          <div className="social-media">
          </div>
          <div className="contact-details">
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
