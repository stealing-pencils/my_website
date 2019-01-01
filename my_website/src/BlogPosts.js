import React, { Component } from 'react';
// import './App.css';
import './blogPosts.css';
import jan1st2019 from './images/jan1st2019.jpg'


class BlogPosts extends Component {
  render() {
    return (
      <div className="posts">
        <h4 className="post-title">
          Starting my new life
        </h4>
        <div className="post-image">
          <img className="jan_1st_2019_image" src={jan1st2019} width="100%" height="160%" alt="person standing on edge of cliff"/>
        </div>
        <div className="post-text">
        Here is post text
        </div>
      </div>
    )
  }
}

export default BlogPosts;
