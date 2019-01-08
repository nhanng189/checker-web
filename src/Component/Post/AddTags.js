import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Chip from '@material-ui/core/Chip'
import AddPhoto from '@material-ui/icons/AddPhotoAlternate';
import AddBox from '@material-ui/icons/AddBox';
import RateReview from '@material-ui/icons/RateReview';
import TagFaces from '@material-ui/icons/TagFaces';
import Folder from '@material-ui/icons/Folder';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ClearIcon from '@material-ui/icons/Clear';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

class AddTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: "",
    }
  }

  handleWriteTag = (event) => {
    this.setState({ tag: event.target.value })
  }

  onAddTag = () => {
    console.log(">>>ok")
    this.props.handleAddTag(this.state.tag)
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddTag(this.state.tag);
  }

  render() {
    let elements = this.props.tags.map((tag) => {
      return <Chip
        label={tag}
        onDelete={this.props.handleDeleteTag(tag)}
        style={{ margin: "5px", fontSize: "16px" }}
      />
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
              <Button variant="fab" className="step-inactive">
                <AddPhoto />
              </Button>
              <div className="connector" />
              <Button variant="fab" className="step-inactive">
                <RateReview />
              </Button>
              <div className="connector" />
              <Button variant="fab" className="step-active">
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
                  <div style={{ borderBottom: "1px silver solid", textAlign: "center", padding: "10px 0 20px 0", fontSize: "16px" }}>Add some tags for your photos</div>
                } />
              <CardContent style={{ padding: "0 15px 0 15px" }}>
                <div style={{height: "135px"}}>{elements}</div>
                
                <form onSubmit={this.onSubmit} style={{}}>
                  <TextField style={{ width: "350px", float: "left", marginLeft: "10px" }}
                    type="text"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      style: { fontSize: "16px", height: "30px" }
                    }}
                    onKeyUp={this.handleWriteTag}
                  />
                  <Button style={{ float: "left", padding: "0" }} onClick={this.props.handleAddTag(this.state.tag)}>
                    <AddBox />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button style={{ fontSize: "13px", backgroundColor: "#007fff", color: "white", margin: "0 15px 20px 0", width: "120px" }} onClick={this.props.selectedWriteContent}>
              <ArrowLeft />
              <div style={{ paddingRight: "15px" }}>Previous</div>
            </Button>
            <Button style={{ fontSize: "13px", backgroundColor: "#007fff", color: "white", margin: "0 35px 20px 0", width: "120px" }} onClick={this.props.selectedPickAlbum}>
              <div style={{ paddingLeft: "15px" }}>Next</div>
              <ArrowRight />
            </Button>
          </DialogActions>
        </Dialog>
      </div >
    );
  }
}

AddTags.propTypes = {
  tags: PropTypes.array.isRequired,
  status: PropTypes.bool.isRequired,
  handleDeleteTag: PropTypes.func.isRequired,
  handleAddTag: PropTypes.func.isRequired,
  selectedWriteContent: PropTypes.func.isRequired,
  selectedPickAlbum: PropTypes.func.isRequired,
  distroySelected: PropTypes.func.isRequired,
};

export default AddTags;