import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import Logo1 from '../icons/logo1.png';
import Logo2 from '../icons/logo2.png';

class Navibar extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* <div> */}
        <img style={{ margin: "20px 0 15px 20px", width: "60px", height: "60px" }} alt="logo" src={Logo1} />
        {/* <img style={{ margin: "5px", height: "50px" }} alt="logo" src={Logo2} /> */}

        <div style={{ display: "flex", alignItems: "center" }}>
          <Button disableRipple style={{ float: "right", minWidth: "120px", backgroundColor: "transparent" }} color="default">
            <span style={{ borderBottom: "1px #000000 solid", padding: "3px", fontSize: "13px", width: "100%", textAlign: "right" }}>
              HOME</span>
          </Button>
          <Button disableRipple style={{ float: "right", minWidth: "120px", backgroundColor: "transparent" }} color="default">
            <span style={{ borderBottom: "1px #000000 solid", padding: "3px", fontSize: "13px", width: "100%", textAlign: "right" }}>
              EXPLORE</span>
          </Button>
          <Button disableRipple style={{ margin: "10px", float: "right", minWidth: "120px", backgroundColor: "transparent" }} color="default">
            <span style={{ borderBottom: "1px #000000 solid", padding: "3px", fontSize: "13px", width: "100%", textAlign: "right" }}>
              PROFILE</span>
          </Button>
          <TextField
            style={{ margin: "20px 20px 15px 10px " }}
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}
          />
        </div>

      </div>
    );
  }
}

export default Navibar;