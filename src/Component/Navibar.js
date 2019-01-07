import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import PickImage from './Post/PickImages';
import WriteContent from './Post/WriteContent';
import AddTags from './Post/AddTags';
import PickAlbum from './Post/PickAlbum';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import '../Style/Navibar.css';
import { connect } from 'react-redux';
import { newPost } from '../Actions'
import ImageUploader from 'react-images-upload';
import Logo1 from '../icons/logo1.png';

class Navibar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      photos: [],
      albums: ["class 12", "game", "view"],
      tags: [],
      comments: "",
      pickimage: false,
      writecontent: false,
      addtags: false,
      pickalbum: false,
      redirect: false,
    }
  }

  generatePreviewImgUrl = (file, callback) => {
    const reader = new FileReader()
    const url = reader.readAsDataURL(file)
    reader.onloadend = e => callback(reader.result)
  }

  onDrop = (event) => {
    const file = event.target.files[0]
    if (!file) {
      return;
    }
    this.generatePreviewImgUrl(file, previewImgUrl => {
      let photo = this.state.photos;
      photo.push(previewImgUrl);
      this.setState({
        photos: photo
    });
    })
    console.log("haha");
  }

  handleOnClick = () => {
    this.setState({redirect: true});
  }

  handleDeleteTag = event => () => {
    const TagsData = this.state.tags;
    const tagDelete = TagsData.indexOf(event);
    TagsData.splice(tagDelete, 1);
    this.setState({ tags: TagsData })
  }

  handleAddTag = event => () => {
    let TagsData = this.state.tags;
    TagsData.push(event);
    this.setState({ tags: TagsData })
  }

  handleWriteComment = (value) => {
    this.setState({ comments: value });
  }

  selectedPickImage = () => {
    this.setState({
      pickimage: true,
      writecontent: false,
      addtags: false,
      pickalbum: false,
    });
  }

  selectedWriteContent = () => {
    this.setState({
      pickimage: false,
      writecontent: true,
      addtags: false,
      pickalbum: false,
    });
  }

  selectedAddTags = () => {
    this.setState({
      pickimage: false,
      writecontent: false,
      addtags: true,
      pickalbum: false,
    });
  }

  selectedPickAlbum = () => {
    this.setState({
      pickimage: false,
      writecontent: false,
      addtags: false,
      pickalbum: true,
    });
  }

  distroySelected = () => {
    this.setState({
      pickimage: false,
      writecontent: false,
      addtags: false,
      pickalbum: false,
    });
  }

  newPost = () => {
    this.distroySelected();
    this.props.newPost("avatar", "user", "a minute ago", this.state.comments, this.state.photos, this.state.tags, 0, 0, 1, false, true, []);
  }

  render() {
    return (
      <div>
        <AppBar className="appbar" color="inherit" position="static">
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <Toolbar>
                <img className="logo" alt="logo" src={Logo1} />

                <div className="flexgrow" />

                <TextField
                  className="search"
                  variant="outlined"
                  placeholder="Search for users or tags"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                  }}
                />

                <div className="flexgrow" />

                <Button component={Link} to="/" className="page-button" color="inherit">HOME</Button>
                <Button className="page-button" color="inherit">EXPLORE</Button>
                <Button className="page-button" color="inherit">PROFILE</Button>

                <Button className="page-button" disabled color="inherit">|</Button>

                <IconButton color="inherit">
                  <Badge invisible="false" badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={5} color="primary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>

                <Button className="page-button" disabled color="inherit">|</Button>

                <Avatar src="https://vinagamemobile.com/wp-content/uploads/2018/04/avatar-doi-fb-01.jpg"></Avatar>
                <Button style={{ height: "35px", backgroundColor: "#a000a5", fontSize: "15px", color: "white", padding: "2px 10px 2px 7px", marginLeft: "25px" }} variant="contained" onClick={this.selectedPickImage}>
                  <AddIcon />New post
              </Button>

              </Toolbar>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </AppBar>
        <PickImage
          photos={this.state.photos}
          status={this.state.pickimage}
          selectedWriteContent={this.selectedWriteContent}
          distroySelected={this.distroySelected}
          onDrop={this.onDrop}
        />
        <WriteContent
          status={this.state.writecontent}
          handleWriteTitle={this.handleWriteComment}
          selectedAddTags={this.selectedAddTags}
          selectedPickImage={this.selectedPickImage}
          distroySelected={this.distroySelected}
        />
        <AddTags
          tags={this.state.tags}
          handleDeleteTag={this.handleDeleteTag}
          handleAddTag={this.handleAddTag}
          status={this.state.addtags}
          selectedWriteContent={this.selectedWriteContent}
          selectedPickAlbum={this.selectedPickAlbum}
          distroySelected={this.distroySelected}
        />
        <PickAlbum
          albums={this.state.albums}
          status={this.state.pickalbum}
          selectedAddTags={this.selectedAddTags}
          distroySelected={this.newPost}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newPost: (avatar, user, time, title, images, tags, love, comment, check, loved, checked, commentContent) => dispatch(newPost(avatar, user, time, title, images, tags, love, comment, check, loved, checked, commentContent))
  }
}

export default connect(null, mapDispatchToProps)(Navibar);