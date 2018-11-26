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
import Clear from '@material-ui/icons/Clear';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class WriteContent extends Component {
    render() {
        return (
            <div>
                <Dialog open={this.props.status}>
                    <div style={{position: "absolute", right: "0"}}>
                        <Button onClick={this.props.distroySelected}>
                            <Clear style={{backgroundColor: "#007fff", color: "white"}}/>
                        </Button>
                    </div>
                    <DialogTitle>
                        <div style={{ fontSize: "30px", width: "280px", margin: "auto" }}>Post your own photo</div>
                    </DialogTitle>
                    <DialogContent>
                        <div style={{ height: "70px", width: "350px", margin: "auto" }}>
                            <Button variant="fab" style={{ float: "left" }}>
                                <AddPhoto />
                            </Button>
                            <div style={{ float: "left", width: "40px", border: "1px solid black", marginTop: "25px" }}></div>
                            <Button variant="fab" style={{ float: "left", backgroundColor: "#ff7f00", color: "white" }}>
                                <RateReview />
                            </Button>
                            <div style={{ float: "left", width: "40px", border: "1px solid black", marginTop: "25px" }}></div>
                            <Button variant="fab" style={{ float: "left" }}>
                                <TagFaces />
                            </Button>
                            <div style={{ float: "left", width: "40px", border: "1px solid black", marginTop: "25px" }}></div>
                            <Button variant="fab" style={{ float: "left" }}>
                                <Folder />
                            </Button>
                        </div>
                        <div style={{ width: "500px", height: "250px", float: "none", border: "1px solid black" }}>
                            <div style={{ borderBottom: "1px solid black", margin: "10px", textAlign: "center" }}>
                                <div style={{ padding: "10px", fontSize: "16px" }}>Say somethings about this</div>
                            </div>
                            <div style={{padding:"20px"}}>
                                <TextField
                                    type="text"
                                    multiline
                                    variant="outlined"
                                    fullWidth
                                    InputProps = {{
                                        style: {fontSize: "16px"}
                                    }}
                                    rows="5"
                                    onKeyUp = {this.props.handleWriteComment}
                                />
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ fontSize: "13px", backgroundColor: "#007fff", color: "white", marginRight: "20px", marginBottom: "10px" }} onClick = {this.props.selectedPickImage}>
                            <ArrowLeft />
                            <div style={{ paddingRight: "15px" }}>Previous</div>
                        </Button>
                        <Button style={{ fontSize: "13px", backgroundColor: "#007fff", color: "white", marginRight: "20px", marginBottom: "10px" }} onClick={this.props.selectedAddTags}>
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
    handleWriteComment: PropTypes.func.isRequired,
    selectedAddTags: PropTypes.func.isRequired,
    selectedPickImage: PropTypes.func.isRequired,
    distroySelected: PropTypes.func.isRequired,
};

export default WriteContent;