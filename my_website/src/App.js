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
            My name is Kate Smith. Here's my potted history...

            After going to university in Sussex, I couldn't resist the bright
            lights of London, one of my favourite places on Earth.
            It was at work that I fell for my husband whose ambition to travel
            matched my own, in fact as a New Zealander his ability to explore
            was already proven.  When our company asked
            us to move to San Francisco I was delighted but a little scared.
            I'd done some backpacking in Europe with my best mate, but nothing
            as life altering as this.  It would force me to change job roles,
            learn a culture that was familiar and yet very foreign and see some
            of the most amazing vistas and exhilerating cities.  Now, suddenly
            sevent years has passed in the States.  We have our own home and
            two kids, who seem to have as much energy as a meteor.
            During this time in the States, my husband and I have been visiting
            England and New Zealand to see our
            families.  Our hearts still resided in our homes, back with our families.
            We have been almost equidistant between both England and New Zealand,
            but we have decided to end our resistance and finally allow the pull
            home, that yawning ache for a place you love, take over.  We will
            be heading to New Zealand next year.  To good friends, family, outdoor
            living, fantastic coffee and pies. 
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
