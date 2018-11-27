import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import Post from './Post';
import '../../../Style/TimelinePost.css';

class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          love: 12,
          comment: 3,
          check: 9,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "",
              content: ""
            }
          ]
        },
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          love: 45,
          comment: 2,
          check: 7,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "",
              content: ""
            }
          ]
        },
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          love: 8,
          comment: 4,
          check: 7,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "",
              content: ""
            }
          ]
        },
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          love: 32,
          comment: 4,
          check: 7,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "",
              content: ""
            }
          ]
        },
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          love: 1,
          comment: 12,
          check: 45,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "",
              content: ""
            }
          ]
        },
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          love: 4,
          comment: 7,
          check: 69,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "",
              content: ""
            }
          ]
        },
        {
          avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
          images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
          love: 65,
          comment: 8,
          check: 12,
          loved: false,
          checked: false,
          commentContent: [
            {
              user: "",
              content: ""
            }
          ]
        }
      ]
    }
  }

  toggleLove = (inx) => {
    let clone = [...this.state.users];
    clone.map((user, index) => {
      if (index === inx) {
        if (user.loved === false) {
          user.loved = true;
          user.love = user.love + 1;
        }
        else {
          user.loved = false;
          user.love = user.love - 1;
        }
      }
    })
    this.setState({
      users: clone
    })
  }

  toggleCheck = (inx) => {
    let clone = [...this.state.users];
    clone.map((user, index) => {
      if (index === inx) {
        if (user.checked === false) {
          user.checked = true;
          user.check = user.check + 1;
        }
        else {
          user.checked = false;
          user.check = user.check - 1;
        }
      }
    })
    this.setState({
      users: clone
    })
  }

  render() {
    let elements = this.state.users.map((user, index) => {
      return <Post
        index={index}
        avatar={user.avatar} user={user.user}
        time={user.time} title={user.title}
        images={user.images} love={user.love}
        comment={user.comment} check={user.check}
        loved={user.loved} checked={user.checked}
        toggleLove={this.toggleLove} toggleCheck={this.toggleCheck}
      />
    })
    return (
      <div style={{ marginTop: "90px" }}>
        {elements}
      </div >
    );
  }
}

export default Posts;