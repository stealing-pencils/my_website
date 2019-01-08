import React, { Component } from 'react';
// import './App.css';
import './blogPosts.css';
import jan1st2019 from './images/jan1st2019.jpg'
import jan2nd2019_image from './images/jan2nd2019.jpg'


class BlogPosts extends Component {
  render() {
    return (
      <div className="posts">
        <h4 className="post-title-first">
          Starting my new life
        </h4>
        <div className="post-image-first">
          <img src={jan1st2019} alt="person standing on edge of cliff"/>
        </div>
        <div className="post-text-first">
        "hello"
        </div>
        <h4 className="post-title-second">
          post 2
        </h4>
        <div className="post-image-second">
          <img className="jan2nd2019_image" src={jan2nd2019_image} alt="coffee cup"/>
        </div>
        <div className="post-text-second">
        "hi again"
        </div>
      </div>
    )
  }
}

export default BlogPosts;
