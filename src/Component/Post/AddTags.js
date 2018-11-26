import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Chip from '@material-ui/core/Chip'
import AddPhoto from '@material-ui/icons/AddPhotoAlternate';
import RateReview from '@material-ui/icons/RateReview';
import TagFaces from '@material-ui/icons/TagFaces';
import Folder from '@material-ui/icons/Folder';
import AddBox from '@material-ui/icons/AddBox';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Clear from '@material-ui/icons/Clear';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddTags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: "",
        }
    }

    handleWriteTag = (event) => {
        this.setState({tag: event.target.value})
    }

    showListTag = () => {
        const listTags = this.props.tags.map((tag) =>
            <Chip
                label={tag}
                onDelete={this.props.handleDeleteTag(tag)}
                style={{ margin: "5px" }}
            />
        );
        return (
            <div>{listTags}</div>
        );
    }

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
                            <Button variant="fab" style={{ float: "left" }}>
                                <RateReview />
                            </Button>
                            <div style={{ float: "left", width: "40px", border: "1px solid black", marginTop: "25px" }}></div>
                            <Button variant="fab" style={{ float: "left", backgroundColor: "#ff7f00", color: "white" }}>
                                <TagFaces />
                            </Button>
                            <div style={{ float: "left", width: "40px", border: "1px solid black", marginTop: "25px" }}></div>
                            <Button variant="fab" style={{ float: "left" }}>
                                <Folder />
                            </Button>
                        </div>
                        <div style={{ width: "500px", height: "250px", float: "none", border: "1px solid black" }}>
                            <div style={{ borderBottom: "1px solid black", margin: "10px", textAlign: "center" }}>
                                <div style={{ padding: "10px", fontSize: "16px" }}>Add some tags in your photos</div>
                            </div>
                            <div style={{ width: "100%", height: "130px" }}>
                                {this.showListTag()}
                            </div>
                            <div style={{ width: "100%" }}>
                                <div style={{width:"350px", float: "left", marginLeft: "20px"}}>
                                    <TextField
                                        type="text"
                                        multiline
                                        variant="outlined"
                                        fullWidth
                                        InputProps={{
                                            style: { fontSize: "16px", height: "15px" }
                                        }}
                                        onKeyUp = {this.handleWriteTag}
                                    />
                                </div>
                                <Button style={{ float: "left" }} onClick={this.props.handleAddTag(this.state.tag)}>
                                    <AddBox />
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ fontSize: "13px", backgroundColor: "#007fff", color: "white", marginRight: "20px", marginBottom: "10px" }} onClick={this.props.selectedWriteContent}>
                            <ArrowLeft />
                            <div style={{ paddingRight: "15px" }}>Previous</div>
                        </Button>
                        <Button style={{ fontSize: "13px", backgroundColor: "#007fff", color: "white", marginRight: "20px", marginBottom: "10px" }} onClick={this.props.selectedPickAlbum}>
                            <div style={{ paddingLeft: "15px" }}>Next</div>
                            <ArrowRight />
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
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