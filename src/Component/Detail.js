import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import Carousel from 'nuka-carousel';

import '../Style/Detail.css';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
      user: "Kumika Chan",
      time: "An hour ago",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
      images: [
        {
          original: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large",
          thumbnail: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"
        },
        {
          original: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large",
          thumbnail: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"
        },
        {
          original: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large",
          thumbnail: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"
        },
        {
          original: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large",
          thumbnail: "https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"
        }
      ],
      tags: ["animal", "girl", "henshin", "hihi"],
      love: "12k",
      comment: "9k",
      check: "5k",
      loved: false,
      checked: false,
      commentContent: [
        {
          user: "",
          content: ""
        },
        {
          user: "",
          content: ""
        },
        {
          user: "",
          content: ""
        }
      ]
    }
  }

  render() {
    let elements = this.state.images.map((image) => {
      return <img alt="" src={image.original} />
    })
    return (
      <Grid style={{ marginTop: "90px" }} container spacing={32}>
        <Grid item xs={2} />
        <Grid className="grid" item xs={8}>
          <Card>
            <CardContent>
              {/* <ImageGallery
                infinite="true" showFullscreenButton="false"
                items={this.state.images}></ImageGallery> */}
              <Carousel wrapAround="true">
                {elements}
              </Carousel>
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    );
  }
}

export default Detail;