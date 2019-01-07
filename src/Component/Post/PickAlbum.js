import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddPhoto from '@material-ui/icons/AddPhotoAlternate';
import RateReview from '@material-ui/icons/RateReview';
import TagFaces from '@material-ui/icons/TagFaces';
import Folder from '@material-ui/icons/Folder';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import Photo from '@material-ui/icons/Photo';
import PhotoAlbum from '@material-ui/icons/PhotoAlbum';
import ClearIcon from '@material-ui/icons/Clear';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

class PickAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusalbum: []
    }
  }
  showListAlbum = () => {
    const listAlbum = this.props.albums.map((album) =>
      <div style={{ marginLeft: "50px" }}>
        <FormControlLabel
          control={
            <Checkbox icon={<Photo />} checkedIcon={<PhotoAlbum />} />
          }
          style={{ float: "left" }}
        />
        <div style={{ float: "left", marginTop: "13px", marginLeft: "-20px" }}>{album}</div>
      </div>
    );
    return (
      <FormGroup row>{listAlbum}</FormGroup>
    );
  }

  render() {
    let elements = this.props.albums.map((album) => {
      return <div style={{ marginLeft: "50px" }}>
        <FormControlLabel
          control={
            <Checkbox icon={<Photo />} checkedIcon={<PhotoAlbum />} />
          }
          style={{ float: "left" }}
        />
        <div style={{ float: "left", marginTop: "13px", marginLeft: "-20px" }}>{album}</div>
      </div>
    }
    );
    return (
      <div>
        <Dialog maxWidth="false" open={this.props.status}>
          <IconButton onClick={this.props.distroySelected} style={{ background: "transparent", position: "absolute", right: "0" }}>
            <ClearIcon />
          </IconButton>
          <DialogTitle style={{ padding: "30px 0 45px 0", textAlign: "center" }}>
            <div style={{ fontSize: "30px" }}>Post your own photo</div>
          </DialogTitle>
          <DialogContent>
            <div style={{ height: "80px", display: "flex", justifyContent: "center" }}>
              <Button variant="fab" className="step-inactive">
                <AddPhoto />
              </Button>
              <div className="connector" />
              <Button variant="fab" className="step-inactive">
                <RateReview />
              </Button>
              <div className="connector" />
              <Button variant="fab" className="step-inactive">
                <TagFaces />
              </Button>
              <div className="connector" />
              <Button variant="fab" className="step-active">
                <Folder />
              </Button>
            </div>
            <Card style={{ width: "620px", height: "270px", margin: "0 15px 0 15px", border: "1px solid black" }}>
              <CardHeader
                title={
                  <div style={{ borderBottom: "1px silver solid", textAlign: "center", padding: "10px 0 20px 0", fontSize: "16px" }}>Pick your album or create one</div>
                } />
              <CardContent style={{ padding: "0 15px 0 15px" }}>
                <FormControl><FormGroup row>
                  {elements}
                </FormGroup>
                </FormControl>
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button style={{ fontSize: "13px", backgroundColor: "#007fff", color: "white", margin: "0 15px 20px 0", width: "120px" }} onClick={this.props.selectedAddTags}>
              <ArrowLeft />
              <div style={{ paddingRight: "15px" }}>Previous</div>
            </Button>
            <Button onClick={this.props.distroySelected} style={{ fontSize: "13px", backgroundColor: "#007fff", color: "white", margin: "0 35px 20px 0", width: "120px" }} >
              <div style={{ paddingLeft: "15px" }}>Post</div>
              <ArrowDropUp />
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

PickAlbum.propTypes = {
  albums: PropTypes.array.isRequired,
  status: PropTypes.bool.isRequired,
  selectedAddTags: PropTypes.func.isRequired,
  distroySelected: PropTypes.func.isRequired,
  //newPost: propTypes.func.isRequired,
};

export default PickAlbum;