import { connect } from 'react-redux';
import { toggleLove, toggleCheck, addComment } from '../Actions'
import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import Navibar from './Navibar';
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Love3 from '../icons/love3.png';
import TextField from '@material-ui/core/TextField';
import Love4 from '../icons/love4.png';
import Comment from '../icons/comment.png';
import Check0 from '../icons/check0.png';
import Check1 from '../icons/check1.png';
import '../Style/Detail.css';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    }
  }

  toggleLove = () => {
    this.props.toggleLove(this.props.match.params.id)
  }

  toggleCheck = () => {
    this.props.toggleCheck(this.props.match.params.id)
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.props.match.params.id, "-1", "Oppa", this.state.comment);
    this.setState({
      comment: ""
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

    let comments = this.props.posts[this.props.match.params.id].commentContent.map((comment, index) => {
      return (
        <div>
          <div style={{ height: "30px", marginBottom: "5px", padding: "10px" }}>
            <div style={{ fontWeight: "bold", float: "left" }}>
              {comment.user}
            </div>
            <div style={{ float: "left" }}>
              : {comment.content}
            </div>
          </div>
          {comment.reply ? comment.reply.map((reply) => {
            return (
              <div style={{ height: "30px", marginBottom: "5px", padding: "10px" }}>
                <div style={{ float: "left", marginLeft: "15px" }}>|</div>
                <div style={{ fontWeight: "bold", marginLeft: "15px", float: "left" }}>
                  {reply.user}
                </div>
                <div style={{ float: "left" }}>
                  : {reply.content}
                </div>
              </div>
            )
          }) : ""}
        </div>
      )
    })

    return (
      <div>
        <Navibar />
        <Grid style={{ backgroundColor: "white", marginTop: "90px" }} container>
          <Grid item xs={1} />

          <Grid style={{ marginTop: "50px" }} item xs={7}>
            <Card className="tlp-card" >
              <div style={{ position: "absolute" }}>
                <Button onClick={this.props.history.goBack} style={{ fontSize: "13px", height: "50px", width: "120px" }}><NavigateBeforeIcon /> Go back</Button>
              </div>
              <CardMedia
                className="tlp-card-media-detail"
                image={this.props.posts[this.props.match.params.id].images[0]}
              >
              </CardMedia>
            </Card>
          </Grid>

          <Grid style={{ marginTop: "50px" }} item xs={3}>
            <Card style={{ height: "39vw", padding: "15px" }} className="tlp-card" >
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
              <CardActions disableActionSpacing >
                <form onSubmit={this.onSubmit}>
                  <TextField name="comment"
                    value={this.state.comment}
                    style={{ width: "428px" }}
                    type="text"
                    variant="outlined"
                    placeholder="Add your comment ..."
                    InputProps={{
                      style: { fontSize: "16px", height: "40px" }
                    }}
                    onChange={this.onChange}></TextField>
                </form>
              </CardActions>
              <div style={{ marginTop: "10px", height: "calc(100% - 355px)", marginLeft: "7px", overflowY: "auto" }}>{comments}</div>
            </Card>
          </Grid>

          <Grid item xs={1} />
        </Grid>
      </div >
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
    toggleCheck: postId => dispatch(toggleCheck(postId)),
    addComment: (postId, commentId, userName, content) => dispatch(addComment(postId, commentId, userName, content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);