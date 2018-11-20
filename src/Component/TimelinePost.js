import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Love0 from '../icons/love0.png';
import Love1 from '../icons/love1.png';
import Comment from '../icons/comment.png'
import Check from '../icons/check.png';
import '../Style/TimelinePost.css';

class TimelinePost extends Component {

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    return (
      <Card className="tlp-card">
        <CardHeader
          className="tlp-card-header"
          avatar={
            <Avatar src="https://www.mobafire.com/images/avatars/yasuo-classic.png" style={{ width: "50px", height: "50px" }}>
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <div>
              <div className="tlp-username">Master Yasuo</div>
              <div className="tlp-time">An hour ago</div>
            </div>
          }
        />
        <CardContent className="tlp-card-content">
          <div className="tlp-title">
            Death is like the wind, always by my side
            </div>
        </CardContent>
        <CardMedia
          style={{ height: "0", paddingTop: "56.25%" }}
          image={"https://cdn3.artstation.com/p/assets/images/images/001/672/159/large/kristina-toxicpanda-art2015-0168.jpg?1450556748"}
          title="Paella dish"
        >
        </CardMedia>
        <CardActions disableActionSpacing className="tlp-card-action">
          <div className="tlp-action-field">
            <IconButton className="tlp-action-icon">
              <img className="tlp-action-icon-img" alt="" src={Love1} />
            </IconButton>
            Love 12k
          </div>
          <div className="tlp-action-field">
            <IconButton className="tlp-action-icon">
              <img className="tlp-action-icon-img" alt="" src={Comment} />
            </IconButton>
            Comment 9k
          </div>
          <div className="tlp-action-field">
            <IconButton className="tlp-action-icon">
              <img className="tlp-action-icon-img" alt="" src={Check} />
            </IconButton>
            Check
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default TimelinePost;