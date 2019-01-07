import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import '../../../Style/TimelinePost.css';

class Posts extends Component {

  render() {
    let elements = this.props.posts.map((post, index) => {
      return <Post
        index={index} history={this.props.history}
        avatar={post.avatar} user={post.user}
        time={post.time} title={post.title}
        images={post.images} love={post.love}
        comment={post.comment} check={post.check}
        loved={post.loved} checked={post.checked}
      />
    })
    return (
      <div style={{ marginTop: "90px" }}>
        {elements}
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps, null)(Posts);