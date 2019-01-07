var initState = {
  posts: [
    {
      avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
      user: "Fumika Chan",
      time: "An hour ago",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.",
      images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
      tags: ["1", "2", "3"],
      love: 12,
      comment: 2,
      check: 9,
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
      let lovePost = state.posts.map((post, index) => {
        if (index === action.postId) {
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
        if (index === action.postId) {
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
      console.log('addComment')
      return state;
    default:
      return state;
  }
}

export default posts;