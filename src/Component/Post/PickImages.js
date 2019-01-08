import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddPhoto from '@material-ui/icons/AddPhotoAlternate';
import RateReview from '@material-ui/icons/RateReview';
import TagFaces from '@material-ui/icons/TagFaces';
import Folder from '@material-ui/icons/Folder';
import AddBox from '@material-ui/icons/AddBox';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ClearIcon from '@material-ui/icons/Clear';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ImageUploader from 'react-images-upload';

import '../../Style/NewPost.css'

class PickImages extends Component {
  render() {
    let elements = this.props.photos.map((image) => {
      return <div style={{
        width: "127px", height: "71.5px", float: "left", margin: "10px",
        backgroundSize: "cover", backgroundImage: `url(${image})`
      }} />
    });

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
              <Button variant="fab" className="step-active">
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
              <Button variant="fab" className="step-inactive">
                <Folder />
              </Button>
            </div>
            <Card style={{ width: "620px", height: "270px", margin: "0 15px 0 15px", border: "1px solid black" }}>
              <CardHeader
                title={
                  <div style={{ borderBottom: "1px silver solid", textAlign: "center", padding: "10px 0 20px 0", fontSize: "16px" }}>Upload photos from your computer</div>
                } />
              <CardContent style={{ padding: "0 15px 0 15px" }}>
                {elements}
                <div style={{
                  width: "auto", height: "auto", float: "left", marginTop: "10px", display: "flex", justifyContent: "center"
                }} >
                  <input style={{ display: "none" }} onChange={this.props.onDrop} id="icon-button-file" type="file" />
                  <label htmlFor="icon-button-file">
                    <div style={{
                      width: "127px", height: "71.5px", float: "left", margin: "10px", display: "flex", justifyContent: "center"
                    }} >
                      <label htmlFor="icon-button-file">
                        <Button style={{ background: "transparent" }}>
                          <label htmlFor="icon-button-file">
                            <AddBox />
                          </label>
                        </Button>
                      </label>
                    </div>
                  </label>
                </div>
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button style={{ fontSize: "13px", backgroundColor: "#007fff", color: "white", margin: "0 35px 20px 0", width: "120px" }} onClick={this.props.selectedWriteContent}>
              <div style={{ paddingLeft: "15px" }}>Next</div>
              <ArrowRight />
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

PickImages.propTypes = {
  photos: PropTypes.array.isRequired,
  status: PropTypes.bool.isRequired,
  selectedWriteContent: PropTypes.func.isRequired,
  distroySelected: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired
};

export default PickImages;