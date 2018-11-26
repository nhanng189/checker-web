import React, { Component } from 'react';

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

import Logo1 from '../icons/logo1.png';
// import Logo2 from '../icons/logo2.png';

class Navibar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
  }

  render() {
    return (
      <AppBar className="appbar" color="inherit" position="static">
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Toolbar>
              <img className="logo" alt="logo" src={Logo1} />
              {/* <img style={{ margin: "5px", height: "35px" }} alt="logo" src={Logo2} /> */}

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

              <Button className="page-button" color="inherit">HOME</Button>
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
              <Button style={{ height: "35px", backgroundColor: "#a000a5", fontSize: "15px", color: "white", padding: "2px 10px 2px 7px", marginLeft: "25px" }} variant="contained" >
                <AddIcon />New post
              </Button>

            </Toolbar>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </AppBar>
    );
  }
}

export default Navibar;