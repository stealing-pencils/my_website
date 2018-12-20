import React, { Component } from 'react';
import Blog_posts from './Blog_posts.js'
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
        <div className="posts">
          <h4 className="post-title">
            Here is a post title
          </h4>
          <div className="post-text">
          Here is post text
          </div>
        </div>
      </div>
    )
  }
}


export default Content;
