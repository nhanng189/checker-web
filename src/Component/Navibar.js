import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import Logo1 from '../icons/logo1.png';

class Navibar extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button disableRipple style={{ minWidth: "100px", cursor: "default", width: "50px", backgroundColor: "transparent" }} color="primary">
          <Input style={{ fontSize: "12px", color: "black" }} defaultValue="HOME" disabled />
        </Button>
        <img style={{ marginTop: "5px", padding: "15px", width: "100px", height: "100px" }} alt="logo" src={Logo1} />
        <Button disableRipple style={{ minWidth: "100px", cursor: "default", width: "50px", backgroundColor: "transparent" }} color="primary">
          <Input style={{textAlign:"right", fontSize: "12px", color: "black" }} defaultValue="EXPLORE" disabled />
        </Button>
      </div>
    );
  }
}

export default Navibar;