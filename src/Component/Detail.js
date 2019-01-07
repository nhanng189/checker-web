import { connect } from 'react-redux';
import { toggleLove, toggleCheck } from '../Actions'

import React, { Component } from 'react';
import Navibar from './Navibar';
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Love3 from '../icons/love3.png';
import InputBase from '@material-ui/core/InputBase';
import Love4 from '../icons/love4.png';
import Comment from '../icons/comment.png';
import Check0 from '../icons/check0.png';
import Check1 from '../icons/check1.png';
import '../Style/Detail.css';

class Detail extends Component {

  toggleLove = () => {
    this.props.toggleLove(this.props.match.params.id)
  }

  toggleCheck = () => {
    this.props.toggleCheck(this.props.match.params.id)
  }

  onSubmit = (event) => {
    event.preventDefault();
    let clone = [...this.state.users];
    clone.map((user, index) => {
      if (index == this.state.index) {
        user.commentContent.push({
          user: "Sudo",
          content: this.state.comment
        });
        user.comment = user.comment + 1;
      }
    })
    this.setState({
      comment: "",
      users: clone
    })
  }

  onChange = (event) => {
    var target = event.target;
    var value = target.value;
    var name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    let color = "primary";
    let tags = this.props.posts[this.props.match.params.id].tags.map((tag) => {
      if (color === "default") color = "primary";
      else if (color === "primary") color = "secondary";
      else color = "default";
      return (
        <Chip color={color} label={tag} style={{ fontSize: "13px", height: "20px", margin: "5px 5px 0 0" }} />
      )
    })

    return (
      <div>
        <Navibar />
        <Grid style={{ marginTop: "50px" }} container spacing={32}>
          <Grid item xs={2} />

          <Grid className="grid" item xs={8}>
            <Card className="tlp-card" >
              <CardMedia
                className="tlp-card-media"
                image={this.props.posts[this.props.match.params.id].images[0]}
              >
              </CardMedia>
              <CardHeader
                className="tlp-card-header"
                avatar={
                  <Avatar src={this.props.posts[this.props.match.params.id].avatar} className="tlp-avatar">
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={
                  <div>
                    <div className="tlp-username">{this.props.posts[this.props.match.params.id].user}</div>
                    <div className="tlp-time">{this.props.posts[this.props.match.params.id].time}</div>
                  </div>
                }
              />
              <CardContent className="tlp-card-content">
                <div className="tlp-title">
                  {this.props.posts[this.props.match.params.id].title}
                </div>
                <div>
                  {tags}
                </div>
              </CardContent>
              <CardActions disableActionSpacing className="tlp-card-action">
                <div className="tlp-action-field">
                  <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon" onClick={this.toggleLove}>
                    <img className="tlp-action-icon-img" alt="" src={this.props.posts[this.props.match.params.id].loved ? Love4 : Love3} />
                  </IconButton>
                  {this.props.posts[this.props.match.params.id].loved ? `Loved ${this.props.posts[this.props.match.params.id].love}` : `Love ${this.props.posts[this.props.match.params.id].love}`}
                </div>
                <div className="tlp-action-field">
                  <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon" onClick={this.toggleCheck}>
                    <img className="tlp-action-icon-img" alt="" src={this.props.posts[this.props.match.params.id].checked ? Check1 : Check0} />
                  </IconButton>
                  {this.props.posts[this.props.match.params.id].checked ? `Checked ${this.props.posts[this.props.match.params.id].check}` : `Check ${this.props.posts[this.props.match.params.id].check}`}
                </div>
                <div style={{ flexGrow: "1" }} />
                <div className="tlp-action-field">
                  <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon">
                    <img className="tlp-action-icon-img" alt="" src={Comment} />
                  </IconButton>
                  {`Comment ${this.props.posts[this.props.match.params.id].comment}`}
                </div>
              </CardActions>
              <div style={{ padding: "0 15px 0 15px" }}><hr /></div>
              <CardActions disableActionSpacing className="tlp-card-action-comment">
                <InputBase style={{ fontSize: "15px" }} fullWidth placeholder="Add your comment ..."></InputBase>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleLove: postId => dispatch(toggleLove(postId)),
    toggleCheck: postId => dispatch(toggleCheck(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);