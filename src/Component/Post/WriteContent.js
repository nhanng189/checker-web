import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddPhoto from '@material-ui/icons/AddPhotoAlternate';
import RateReview from '@material-ui/icons/RateReview';
import TagFaces from '@material-ui/icons/TagFaces';
import Folder from '@material-ui/icons/Folder';
import TextField from '@material-ui/core/TextField';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ClearIcon from '@material-ui/icons/Clear';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

class WriteContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
  }

  onChange = (event) => {
    this.setState({title: event.target.value});
    this.props.handleWriteTitle(event.target.value);
  }

  render() {
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
              <Button variant="fab" className="step-active">
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
                  <div style={{ borderBottom: "1px silver solid", textAlign: "center", padding: "10px 0 20px 0", fontSize: "16px" }}>Say somethings about this</div>
                } />
              <CardContent style={{ padding: "5px 25px 0 25px" }}>
                <TextField
                  type="text"
                  multiline
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: { height: "160px", fontSize: "16px" }
                  }}
                  rows="5"
                  onChange={this.onChange}
                />
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button style={{ fontSize: "13px", backgroundColor: "#007fff", color: "white", margin: "0 15px 20px 0", width: "120px" }} onClick={this.props.selectedPickImage}>
              <ArrowLeft />
              <div style={{ paddingRight: "15px" }}>Previous</div>
            </Button>
            <Button style={{ fontSize: "13px", backgroundColor: "#007fff", color: "white", margin: "0 35px 20px 0", width: "120px" }} onClick={this.props.selectedAddTags}>
              <div style={{ paddingLeft: "15px" }}>Next</div>
              <ArrowRight />
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

WriteContent.propTypes = {
  status: PropTypes.bool.isRequired,
  handleWriteTitle: PropTypes.func.isRequired,
  selectedAddTags: PropTypes.func.isRequired,
  selectedPickImage: PropTypes.func.isRequired,
  distroySelected: PropTypes.func.isRequired,
};

export default WriteContent;