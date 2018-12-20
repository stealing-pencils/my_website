import React, { Component } from 'react';
import BlogPosts from './BlogPosts.js'
import './content.css';



class Content extends Component {
  render() {
    return (
      <div className="main-blog-container">
        <div className="blog-title">
          <h2 className="blog-title-header">
          Here is my blog
          </h2>
        </div>
        <BlogPosts/>
      </div>
    )
  }
}


export default Content;
