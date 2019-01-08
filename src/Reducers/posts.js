var initState = {
  posts: [
    {
      avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
      user: "Fumika Chan",
      time: "An hour ago",
      title: "Nhìn mặt thằng này ám ảnh vê lìn.",
      images: ["https://www.chatwork.com/gateway/download_file.php?bin=1&preview=1&file_id=314828572"],
      tags: ["Biến thái", "Nguy hiểm", "Lolicon"],
      love: 12,
      comment: 2,
      check: 9,
      loved: false,
      checked: false,
      commentContent: [
        {
          user: "Khoa Trần",
          content: "Tiêu diệt nó",
          reply: [
            {
              user: "Nhân cute",
              content: "Thiến nó"
            },
            {
              user: "Khoa Trần",
              content: "Oki"
            }
          ]
        },
        {
          user: "Thư babe",
          content: "Em sợ quá chị"
        }
      ]
    },
    {
      avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
      user: "Fumika Chan",
      time: "An hour ago",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
      images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
      tags: ["1", "2", "3"],
      love: 45,
      comment: 2,
      check: 7,
      loved: false,
      checked: false,
      commentContent: [
        {
          user: "Daigo",
          content: "I love you"
        },
        {
          user: "Yasuo",
          content: "Pretty girl"
        }
      ]
    },
    {
      avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
      user: "Fumika Chan",
      time: "An hour ago",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
      images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
      tags: ["1", "2", "3"],
      love: 8,
      comment: 2,
      check: 7,
      loved: false,
      checked: false,
      commentContent: [
        {
          user: "Daigo",
          content: "I love you"
        },
        {
          user: "Yasuo",
          content: "Pretty girl"
        }
      ]
    },
    {
      avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
      user: "Fumika Chan",
      time: "An hour ago",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
      images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
      tags: ["1", "2", "3"],
      love: 32,
      comment: 2,
      check: 7,
      loved: false,
      checked: false,
      commentContent: [
        {
          user: "Daigo",
          content: "I love you"
        },
        {
          user: "Yasuo",
          content: "Pretty girl"
        }
      ]
    },
    {
      avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
      user: "Fumika Chan",
      time: "An hour ago",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
      images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
      tags: ["1", "2", "3"],
      love: 1,
      comment: 22,
      check: 45,
      loved: false,
      checked: false,
      commentContent: [
        {
          user: "Daigo",
          content: "I love you"
        },
        {
          user: "Yasuo",
          content: "Pretty girl"
        }
      ]
    },
    {
      avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
      user: "Fumika Chan",
      time: "An hour ago",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
      images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
      tags: ["1", "2", "3"],
      love: 4,
      comment: 2,
      check: 69,
      loved: false,
      checked: false,
      commentContent: [
        {
          user: "Daigo",
          content: "I love you"
        },
        {
          user: "Yasuo",
          content: "Pretty girl"
        }
      ]
    },
    {
      avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
      user: "Fumika Chan",
      time: "An hour ago",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
      images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
      tags: ["1", "2", "3"],
      love: 65,
      comment: 2,
      check: 12,
      loved: false,
      checked: false,
      commentContent: [
        {
          user: "Daigo",
          content: "I love you"
        },
        {
          user: "Yasuo",
          content: "Pretty girl"
        }
      ]
    }
  ]
};

const posts = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOVE':
      console.log(action)
      let lovePost = state.posts.map((post, index) => {
        if (index == action.postId) {
          if (post.loved === true) {
            post.loved = false;
            post.love = post.love - 1;
          }
          else {
            post.loved = true;
            post.love = post.love + 1;
          }
        }
        return post;
      })
      return {
        posts: lovePost
      };
    case 'TOGGLE_CHECK':
      let checkPost = state.posts.map((post, index) => {
        if (index == action.postId) {
          if (post.checked === true) {
            post.checked = false;
            post.check = post.check - 1;
          }
          else {
            post.checked = true;
            post.check = post.check + 1;
          }
        }
        return post;
      })
      return {
        posts: checkPost
      };
    case 'ADD_COMMENT':
      let addComment = state.posts.map((post, index) => {
        if (index == action.postId) {
          if (action.commentId === "-1") {
            post.comment = post.comment + 1;
            post.commentContent.push({
              user: action.userName,
              content: action.content
            })
          }
        }
        return post;
      })
      return {
        posts: addComment
      }
    case 'NEW_POST':
      let post = [{
        avatar: "https://vinagamemobile.com/wp-content/uploads/2018/04/avatar-doi-fb-01.jpg",
        user: "Sudo",
        time: action.time,
        title: action.title,
        images: action.images,
        tags: action.tags,
        love: action.love,
        comment: action.comment,
        check: action.check,
        loved: action.loved,
        checked: action.checked,
        commentContent: action.commentContent
      }, ...state.posts];
      return {
        posts: post
      }
    default:
      return state;
  }
}

export default posts;