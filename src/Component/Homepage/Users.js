import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
// import Popper from '@material-ui/core/Popper';
import TextField from '@material-ui/core/TextField';

import '../../Style/Homepage.css';

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          avatar: "https://avatarfiles.alphacoders.com/710/71007.jpg"
        }, {
          avatar: "https://store.playstation.com/store/api/chihiro/00_09_000/container/IS/en/999/EP2402-CUSA05624_00-AV00000000000161/1534465292000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
        }, {
          avatar: "https://avatarfiles.alphacoders.com/787/78780.png"
        }, {
          avatar: "https://png.pngtree.com/element_origin_min_pic/17/02/15/97f2712117cf79b798aca661c317fb8f.jpg"
        }, {
          avatar: "https://png.pngtree.com/element_origin_min_pic/16/12/06/ace7017d717514d6a975f93c931d8985.jpg"
        }, {
          avatar: "https://orig00.deviantart.net/9168/f/2012/293/b/4/snow_anime_girl_avatar_by_memegumi-d5idebk.png"
        }
      ],
      anchorEl: null,
      open: false
    }
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
      open: !this.state.open
    });
  };

  render() {
    const { open, anchorEl } = this.state;

    let elements = this.state.users.map((user) => {
      return (
        <div>
          <Avatar className="user-avatar" src={user.avatar}></Avatar>
        </div>
      )
    })
    
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "fixed", marginTop: "90px" }}>
        <Button className="user-avatar" variant="fab" color="secondary" onClick={this.handleClick} >
          <SearchIcon />
        </Button>
        {/*<Popper
          style={{ marginLeft: "5px" }}
          placement="right"
          open={open}
          variant="contained"
          anchorEl={anchorEl}
        >
          <TextField
            style={{ backgroundColor: "white" }}
            placeholder="Search users"
            variant="outlined"
          />
        </Popper>*/}
        {elements}
      </div>
    );
  }
}

export default Users;