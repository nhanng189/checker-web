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