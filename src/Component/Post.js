import React, { Component } from 'react';
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
        "https://genknews.genkcdn.vn/2016/hinh-nen-gam-3d-2-1474200966875.jpg"
      ],
      albums: [1, 2, 3],
      tags: [1, 2, 3],
      comments: "",
      pickimage: true,
      writecontent: false,
      addtags: false,
      pickalbum: false,
    }
  }

  handleDeleteTag = event => () => {
    const TagsData = this.state.tags;
    const tagDelete = TagsData.indexOf(event);
    TagsData.splice(tagDelete, 1);
    this.setState({ tags: TagsData })
  }

  handleAddTag = event => () => {
    let TagsData = this.state.tags;
    TagsData.push(event);
    this.setState({ tags: TagsData })
  }

  handleWriteTitle = (title) => {
    this.setState({ comments: title });
    console.log(title)
  }

  selectedPickImage = () => {
    this.setState({
      pickimage: true,
      writecontent: false,
      addtags: false,
      pickalbum: false,
    });
  }

  selectedWriteContent = () => {
    this.setState({
      pickimage: false,
      writecontent: true,
      addtags: false,
      pickalbum: false,
    });
  }

  selectedAddTags = () => {
    this.setState({
      pickimage: false,
      writecontent: false,
      addtags: true,
      pickalbum: false,
    });
  }

  selectedPickAlbum = () => {
    this.setState({
      pickimage: false,
      writecontent: false,
      addtags: false,
      pickalbum: true,
    });
  }

  render() {
    return (
      <div>
        <PickImage
          photos={this.state.photos}
          status={this.state.pickimage}
          selectedWriteContent={this.selectedWriteContent}
        />
        <WriteContent
          status={this.state.writecontent}
          handleWriteTitle={this.handleWriteTitle}
          selectedAddTags={this.selectedAddTags}
          selectedPickImage={this.selectedPickImage}
        />
        <AddTags
          tags={this.state.tags}
          handleDeleteTag={this.handleDeleteTag}
          handleAddTag={this.handleAddTag}
          status={this.state.addtags}
          selectedWriteContent={this.selectedWriteContent}
          selectedPickAlbum={this.selectedPickAlbum}
        />
        <PickAlbum
          albums={this.state.albums}
          status={this.state.pickalbum}
          selectedAddTags={this.selectedAddTags}
        />
      </div>
    );
  }
}

export default Post;