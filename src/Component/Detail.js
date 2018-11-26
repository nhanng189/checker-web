import React, { Component } from 'react';
import Navibar from './Navibar';
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ImageGallery from 'react-image-gallery';
import Carousel from 'nuka-carousel';
import Love3 from '../icons/love3.png';
import Love4 from '../icons/love4.png';
import Comment from '../icons/comment.png';
import Check0 from '../icons/check0.png';
import Check1 from '../icons/check1.png';
import '../Style/Detail.css';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
      user: "Kumika Chan",
      time: "An hour ago",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
      images: [
        {
          original: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large",
          thumbnail: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"
        },
        {
          original: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large",
          thumbnail: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"
        },
        {
          original: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large",
          thumbnail: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"
        },
        {
          original: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large",
          thumbnail: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"
        }
      ],
      tags: ["animal", "girl", "henshin", "hihi"],
      love: "12k",
      comment: "9k",
      check: "5k",
      loved: false,
      checked: false,
      showcomment: false,
      commentContent: [
        {
          user: "hellu",
          content: "Xấu quá đi"
        },
        {
          user: "Nhân",
          content: "Nhưng tao thích"
        },
        {
          user: "Nhật",
          content: "Cũng được"
        }
      ]
    }
  }

  addComment = (event) => {
    let commnets = this.state.commentContent;
    commnets.push(event.target.value);
    this.setState({ commentContent: commnets });
  }

  showComment = () => {
    this.setState({ showcomment: !this.state.showcomment });
  }

  detailComment = () => {
    let comments = this.state.commentContent.map((comment) => {
      return (
        <Card style={{ width: "auto", marginTop: "5px", padding: "10px" }}>
          <div style={{ fontWeight: "bold", float: "left" }}>
            {comment.user}
          </div>
          <div style={{ float: "left" }}>
            : {comment.content}
          </div>
        </Card>
      );
    })
    return (
      <CardContent style={{ borderTop: "1px solid black" }}>
        <div style={{ width: "500px" }}>
          <TextField
            type="text"
            multiline
            variant="outlined"
            fullWidth
            rowsMax={1}
            InputProps={{
              style: { fontSize: "16px", height: "15px" }
            }}
            onDragEnter={this.addComment}
          />
        </div>
        <div style={{ marginTop: "10px" }}>{comments}</div>
      </CardContent>
    );
  }

  render() {
    let elements = this.state.images.map((image) => {
      return <img alt="" src={image.original} />
    })

    let color = "primary";
    let tags = this.state.tags.map((tag) => {
      if (color === "default") color = "primary";
      else if (color === "primary") color = "secondary";
      else color = "default";
      return (
        <Chip color={color} label={tag} style={{ fontSize: "10px", height: "20px", margin: "5px" }} />
      )
    })



    return (
      <div>
        <Navibar />
        <Grid style={{ marginTop: "90px" }} container spacing={32}>
          <Grid item xs={2} />
          <Grid className="grid" item xs={8}>
            <Card>
              <CardContent>
                {/* <ImageGallery
                infinite="true" showFullscreenButton="false"
                items={this.state.images}></ImageGallery> */}
                <Carousel wrapAround="true">
                  {elements}
                </Carousel>
                <div style={{ marginTop: "10px", marginBottom: "10px", width: "100%", height: "40px" }}>
                  <div style={{ float: "left" }}><Avatar src={this.state.avatar} /></div>
                  <div style={{ float: "left", marginLeft: "10px" }}>
                    <div style={{ fontWeight: "bold" }}>{this.state.user}</div>
                    <div>{this.state.time}</div>
                  </div>
                </div>
                <div>
                  {this.state.title}
                </div>
                <div>
                  {tags}
                </div>
              </CardContent>
              <CardActions disableActionSpacing className="tlp-card-action" style={{marginBottom: "10px"}}>
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
                  <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon" onClick={this.showComment}>
                    <img className="tlp-action-icon-img" alt="" src={Comment} />
                  </IconButton>
                  {`Comment ${this.state.comment}`}
                </div>
              </CardActions>
              {this.state.showcomment ? this.detailComment() : ""}
            </Card>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

export default Detail;