import React, { Component } from 'react';
import BlogPosts from './BlogPosts.js'
import './App.css';



class Content extends Component {
  render() {
    return (
      <div className="main-blog-container">
        <div className="blog-title">
          <h2>
          Here is my blog
          </h2>
        </div>
        <BlogPosts/>
      </div>
    )
  }
}


export default Content;
