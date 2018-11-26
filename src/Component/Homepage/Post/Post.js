import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';

import Love3 from '../../../icons/love3.png';
import Love4 from '../../../icons/love4.png';
import Comment from '../../../icons/comment.png';
import Check0 from '../../../icons/check0.png';
import Check1 from '../../../icons/check1.png';
import '../../../Style/TimelinePost.css';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
      user: "Kumika Chan",
      time: "An hour ago",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
      images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
      love: "12k",
      comment: "9k",
      check: "5k",
      loved: false,
      checked: false
    }
  }

  toggleLove = () => {
    this.setState({
      loved: !this.state.loved
    })
  }

  toggleCheck = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <Card className="tlp-card" >
        <CardHeader
          className="tlp-card-header"
          avatar={
            <Avatar src={this.state.avatar} className="tlp-avatar">
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <div>
              <div className="tlp-username">{this.state.user}</div>
              <div className="tlp-time">{this.state.time}</div>
            </div>
          }
        />
        <CardContent className="tlp-card-content">
          <div className="tlp-title">
            {this.state.title}
          </div>
        </CardContent>
        <CardMedia
          className="tlp-card-media"
          image={this.state.images[0]}
        >
        </CardMedia>
        <CardActions disableActionSpacing className="tlp-card-action">
          <div className="tlp-action-field">
            <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon" onClick={this.toggleLove}>
              <img className="tlp-action-icon-img" alt="" src={this.state.loved ? Love4 : Love3} />
            </IconButton>
            {this.state.loved ? `Loved ${this.state.love}` : `Love ${this.state.love}`}
          </div>
          <div className="tlp-action-field">
            <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon" onClick={this.toggleCheck}>
              <img className="tlp-action-icon-img" alt="" src={this.state.checked ? Check1 : Check0} />
            </IconButton>
            {this.state.checked ? `Checked ${this.state.check}` : `Check ${this.state.check}`}
          </div>
          <div style={{ flexGrow: "1" }} />
          <div className="tlp-action-field">
            <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon">
              <img className="tlp-action-icon-img" alt="" src={Comment} />
            </IconButton>
            {`Comment ${this.state.comment}`}
          </div>
        </CardActions>
        <div style={{ padding: "0 15px 0 15px" }}><hr /></div>
        <CardActions disableActionSpacing className="tlp-card-action-comment">
          <InputBase style={{ fontSize: "15px" }} fullWidth placeholder="Add your comment ..."></InputBase>
        </CardActions>
      </Card>
    );
  }
}

export default Post;