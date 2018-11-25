import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import Post from './Post';
import '../../../Style/TimelinePost.css';

class Posts extends Component {

  render() {
    return (
      <div>
        {/* <Card className="tlp-new-card">
          <CardHeader
            className="tlp-new-card-title"
            avatar={
              <Avatar src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUTuQKVLSEwIIRLRsfp0-sFKQhZrJo4FJ6rco7u_lJOWU3qjJ"} className="tlp-avatar" />
            }
            title={
              <div className="tlp-new-title">New things want to share, Ahri?</div>
            }
          />
        </Card> */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div >
    );
  }
}

export default Posts;