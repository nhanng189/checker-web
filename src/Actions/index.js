export const toggleLove = postId => {
  return {
    type: 'TOGGLE_LOVE',
    postId
  }
}

export const toggleCheck = postId => {
  return {
    type: 'TOGGLE_CHECK',
    postId
  }
}

export const addComment = (postId, userName, content) => {
  return {
    type: 'ADD_COMMENT',
    postId,
    userName,
    content
  }
}

export const newPost = (avatar, user, time, title, images, tags, love, comment, check, loved, checked, commentContent) => {
  return {
    type: 'NEW_POST',
    avatar,
    user,
    time,
    title,
    images,
    tags,
    love,
    comment,
    check,
    loved,
    checked,
    commentContent,
  }
}