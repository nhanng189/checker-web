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
import CardMedia from '@material-ui/core/CardMedia';
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
      comment: "",
      index: 0,
      users: [
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          tags: ["1", "2", "3"],
          love: 12,
          comment: 2,
          check: 9,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "Daigo",
              content: "I love you"
            },
            {
              user: "Yasuo",
              content: "Pretty girl"
            }
          ]
        },
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          tags: ["1", "2", "3"],
          love: 45,
          comment: 2,
          check: 7,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "Daigo",
              content: "I love you"
            },
            {
              user: "Yasuo",
              content: "Pretty girl"
            }
          ]
        },
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          tags: ["1", "2", "3"],
          love: 8,
          comment: 2,
          check: 7,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "Daigo",
              content: "I love you"
            },
            {
              user: "Yasuo",
              content: "Pretty girl"
            }
          ]
        },
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          tags: ["1", "2", "3"],
          love: 32,
          comment: 2,
          check: 7,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "Daigo",
              content: "I love you"
            },
            {
              user: "Yasuo",
              content: "Pretty girl"
            }
          ]
        },
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          tags: ["1", "2", "3"],
          love: 1,
          comment: 22,
          check: 45,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "Daigo",
              content: "I love you"
            },
            {
              user: "Yasuo",
              content: "Pretty girl"
            }
          ]
        },
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          tags: ["1", "2", "3"],
          love: 4,
          comment: 2,
          check: 69,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "Daigo",
              content: "I love you"
            },
            {
              user: "Yasuo",
              content: "Pretty girl"
            }
          ]
        },
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          tags: ["1", "2", "3"],
          love: 65,
          comment: 2,
          check: 12,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "Daigo",
              content: "I love you"
            },
            {
              user: "Yasuo",
              content: "Pretty girl"
            }
          ]
        }
      ]
    }
  }

  componentWillMount() {
    this.setState({
      index: this.props.match.params.id
    })
  }

  toggleLove = () => {
    let clone = [...this.state.users];
    clone.map((user, index) => {
      if (index == this.state.index) {
        if (user.loved === false) {
          user.loved = true;
          user.love = user.love + 1;
        }
        else {
          user.loved = false;
          user.love = user.love - 1;
        }
      }
    })
    this.setState({
      users: clone
    })
  }

  toggleCheck = () => {
    let clone = [...this.state.users];
    clone.map((user, index) => {
      if (index == this.state.index) {
        if (user.checked === false) {
          user.checked = true;
          user.check = user.check + 1;
        }
        else {
          user.checked = false;
          user.check = user.check - 1;
        }
      }
    })
    this.setState({
      users: clone
    })
  }

  addComment = (event) => {
    let commnets = this.state.commentContent;
    commnets.push(event.target.value);
    this.setState({ commentContent: commnets });
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

  showComment = () => {
    this.setState({ showcomment: !this.state.showcomment });
  }

  detailComment = () => {
    let comments = this.state.users[this.state.index].commentContent.map((comment) => {
      return (
        <div style={{ height: "30px", marginBottom: "5px", padding: "10px" }}>
          <div style={{ fontWeight: "bold", float: "left" }}>
            {comment.user}
          </div>
          <div style={{ float: "left" }}>
            : {comment.content}
          </div>
        </div>
      );
    })
    return (
      <CardContent>
        <form onSubmit={this.onSubmit}>
          <TextField
            name="comment"
            value={this.state.comment}
            style={{ width: "428px" }}
            type="text"
            variant="outlined"
            placeholder="Add your comment ..."
            InputProps={{
              style: { fontSize: "16px", height: "40px" }
            }}
            onChange={this.onChange}
          />
        </form>
        <div style={{ marginTop: "10px", width: "100%", height: "180px", overflowY: "auto" }}>{comments}</div>
      </CardContent>
    );
  }

  render() {
    // let elements = this.state.users[this.state.index].images.map((image) => {
    //   return <img alt="" src={image} />
    // })

    let color = "primary";
    let tags = this.state.users[this.state.index].tags.map((tag) => {
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
            <Card>
              <CardContent>
                <CardMedia
                  className="tlp-card-media"
                  image={this.state.users[this.state.index].images[0]}
                >
                </CardMedia>
              </CardContent>

              <Grid container spacing={8}>
                <Grid item xs={6}>
                  <CardContent>
                    <div style={{ marginBottom: "20px", height: "55px" }}>
                      <Avatar style={{ float: "left", width: "55px", height: "55px" }} src={this.state.users[this.state.index].avatar} />
                      <div style={{ float: "left", marginLeft: "15px" }}>
                        <div style={{ fontWeight: "bold", marginBottom: "5px", marginTop: "5px" }}>{this.state.users[this.state.index].user}</div>
                        <div>{this.state.users[this.state.index].time}</div>
                      </div>
                    </div>
                    <div style={{ padding: "10px 0 15px 0" }}>
                      {this.state.users[this.state.index].title}
                    </div>
                    <div>
                      {tags}
                    </div>
                  </CardContent>
                  <CardActions disableActionSpacing className="tlp-card-action" style={{ marginBottom: "10px" }}>
                    <div className="tlp-action-field">
                      <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon" onClick={this.toggleLove}>
                        <img className="tlp-action-icon-img" alt="" src={this.state.users[this.state.index].loved ? Love4 : Love3} />
                      </IconButton>
                      {this.state.users[this.state.index].loved ? `Loved ${this.state.users[this.state.index].love}` : `Love ${this.state.users[this.state.index].love}`}
                    </div>
                    <div className="tlp-action-field">
                      <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon" onClick={this.toggleCheck}>
                        <img className="tlp-action-icon-img" alt="" src={this.state.users[this.state.index].checked ? Check1 : Check0} />
                      </IconButton>
                      {this.state.users[this.state.index].checked ? `Checked ${this.state.users[this.state.index].check}` : `Check ${this.state.users[this.state.index].check}`}
                    </div>
                    <div style={{ flexGrow: "1" }} />
                    <div className="tlp-action-field">
                      <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon" onClick={this.showComment}>
                        <img className="tlp-action-icon-img" alt="" src={Comment} />
                      </IconButton>
                      {`Comment ${this.state.users[this.state.index].comment}`}
                    </div>
                  </CardActions>
                </Grid>
                <Grid item xs={6}>
                  {this.detailComment()}
                </Grid>
              </Grid>
              {/* {this.state.showcomment ? this.detailComment() : ""} */}
            </Card>
          </Grid>

          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

export default Detail;