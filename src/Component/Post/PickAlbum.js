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
import Photo from '@material-ui/icons/Photo';
import PhotoAlbum from '@material-ui/icons/PhotoAlbum';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class PickAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusalbum: []
        }
    }
    showListAlbum = () => {
        const listAlbum = this.props.albums.map((album) =>
            <div style={{marginLeft: "50px"}}>
                <FormControlLabel
                    control={
                        <Checkbox icon={<Photo />} checkedIcon={<PhotoAlbum />} />
                    }
                    style={{float: "left"}}
                />
                <div style={{float: "left", marginTop: "13px", marginLeft: "-20px"}}>{album}</div>
            </div>
        );
        return (
            <FormGroup row>{listAlbum}</FormGroup>
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
                            <Button variant="fab" style={{ float: "left" }}>
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
                            <Button variant="fab" style={{ float: "left", backgroundColor: "#ff7f00", color: "white" }}>
                                <Folder />
                            </Button>
                        </div>
                        <div style={{ width: "500px", height: "250px", float: "none", border: "1px solid black" }}>
                            <div style={{ borderBottom: "1px solid black", margin: "10px", textAlign: "center" }}>
                                <div style={{ padding: "10px", fontSize: "16px" }}>Pick your album or create one</div>
                            </div>
                            <FormControl>
                                {this.showListAlbum()}
                            </FormControl>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ fontSize: "13px", backgroundColor: "#007fff", color: "white", marginRight: "20px", marginBottom: "10px" }}>
                            <div style={{ paddingLeft: "15px" }}>Next</div>
                            <ArrowRight />
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
};

export default PickAlbum;