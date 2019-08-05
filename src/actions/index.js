import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  // const userIds = _.uniq(_.map(getState().posts, 'userId'))
  // userIds.forEach(id => dispatch(fetchUser(id)))
  // console.log(userIds)
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
  //forEach can not have await.  If wanted to wait for each userId would have to :
  // await Promise.all(userIds.map(id => dispatch (fetchUser(id))))
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  })
  // return {
  //   type: 'FETCH_POSTS',
  //   payload: reponse
  // }
}

//Not needed with redux thunk
// export const selectPost = () => {
//   return {
//     type: 'SELECT_POST'
//   }
// }

// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch)
// }

// const _fetchUser = _.memoize(async(id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`)
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   })
// })

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
}

export const getTitle = title => dispatch => {
  // console.log("action fired")
  dispatch({
    type: 'GET_TITLE',
    payload: title
  })
}

export const clearTitle = () => dispatch => {
  console.log("clearTitle fired")
  const emptyString = ""
  dispatch({
    type: 'CLEAR_TITLE',
    payload: emptyString
  })
}

export const titleError = () => (dispatch, getState) => {
  const { title } = getState()
  const error = title.length < 6 ? true : false
  console.log("error action fired", error)
  dispatch({
    type: 'ERROR_LENGTH',
    payload: error
  })
}

export const getBody = body => dispatch => {
  dispatch({
    type: 'GET_BODY',
    payload: body
  })
}

export const clearBody = () => dispatch => {
  console.log("clearBody fired")
  const emptyString = ""
  dispatch({
    type: 'CLEAR_BODY',
    payload: emptyString
  })
}

export const createPost = () => (dispatch, getState) => {
  const { title, body } = getState()
  let postData = {
    title: title,
    body: body
  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(singlePost => {
      console.log(singlePost)
      dispatch({
        type: 'NEW_POST',
        payload: singlePost
      })
    })
}

export const deletePost = (id) => async (dispatch, getState) => {
  // const posts = getState().posts
  // console.log("theDeletePosts posts", posts)
  // const removedPost = posts.filter(post => {
  //   if (post.id === id) {
  //     return post
  //   }
  //   return !post
  // })
  // console.log("removedPost", removePost)
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(removedPost => {
      // console.log("removedPost", removedPost)
      dispatch({
        type: 'DELETE_POST',
        payload: id
      })
    })
}

export const editPost = (title, id) => async (dispatch, getState) => {
  // console.log(title, id)
  // const posts = getState().posts
  // // console.log("theDeletePosts posts", posts)
  // // const removedPost = posts.filter(post => {
  // //   if (post.id === id) {
  // //     return post
  // //   }
  // //   return !post
  // // })
  const updatedPost = {
    title: title,
    id: id
  }
  console.log("updatedPost", updatedPost)
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updatedPost),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
    .then(res => res.json())
    .then(editedPost => {
      console.log("editedPost", editedPost)
      dispatch({
        type: 'EDIT_POST',
        payload: editedPost
      })
    })
}










