import React, {Component} from 'react';
import PickImage from './Post/PickImages';
import WriteContent from './Post/WriteContent';
import AddTags from './Post/AddTags';
import PickAlbum from './Post/PickAlbum';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: ["https://genknews.genkcdn.vn/2016/hinh-nen-gam-3d-2-1474200966875.jpg",
                "https://hinhnendep.xyz/wp-content/uploads/2016/07/hinh-nen-lien-minh-lol-dep-hd-6.jpg",
                "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/12/Thresh_Qu%C3%A1n_Qu%C3%A2n.jpg/revision/latest?cb=20160408163627&path-prefix=vi",
            ],
            albums: [1, 2, 3],
        }
    }
    
    render() {
        return(
            <div>
                <PickImage 
                    photos={this.state.photos}
                    status={false}
                />
                <WriteContent 
                    status={false}
                />
                <AddTags 
                    photos={this.state.photos}
                    status={false}
                />
                <PickAlbum 
                    albums={this.state.albums}
                    status={true}
                />
            </div>
        );
    }
}

export default Post;