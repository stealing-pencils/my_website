import React, { Component } from 'react';
import './App.css';

class BlogPosts extends Component {
  render() {
    return (
      <div className="posts">
        <h4 className="post-title">
          Here is a post title
        </h4>
        <div className="post-text">
        Here is post text
        </div>
      </div>
    )
  }
}

export default BlogPosts;
