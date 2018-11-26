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
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class PickImages extends Component {
    showListImage = () => {
        const listImages = this.props.photos.map((image) => 
            <div style={{width: "100px", height: "70px", float: "left", margin: "10px", backgroundColor: "black"}}>
                <img src={image} style={{width: "100px", height: "70px"}} />
            </div>
        );
        return(
            <div>{listImages}</div>
        );
    }
    
    render() {
        
        return (
            <div>
                <Dialog open={this.props.status}>
                    <DialogTitle>
                        <div style={{ fontSize: "30px", width: "280px", margin: "auto" }}>Post your own photo</div>
                    </DialogTitle>
                    <DialogContent>
                        <div style={{ height: "70px", width: "350px", margin: "auto" }}>
                            <Button variant="fab" style={{ float: "left", backgroundColor: "#ff7f00", color: "white" }}>
                                <AddPhoto />
                            </Button>
                            <div style={{ float: "left", width: "40px", border: "1px solid black", marginTop: "25px" }}></div>
                            <Button variant="fab" style={{ float: "left" }}>
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
                            <div style={{borderBottom: "1px solid black", margin: "10px", textAlign: "center"}}>
                                <div style={{padding: "10px", fontSize: "16px"}}>Upload photos from your computer</div>
                            </div>
                            {this.showListImage()}
                            <Button style={{float: "left", marginTop: "25px"}}>
                                <AddBox />
                            </Button>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button style={{fontSize: "13px", backgroundColor: "#007fff", color: "white", marginRight: "20px", marginBottom: "10px"}} onClick={this.props.selectedWriteContent}>
                            <div style={{paddingLeft: "15px"}}>Next</div>
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
};

export default PickImages;