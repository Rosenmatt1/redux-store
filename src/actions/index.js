import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts  = () => async dispatch => {
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

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
}


//Not needed with redux thunk
// export const selectPost = () => {
//   return {
//     type: 'SELECT_POST'
//   }
// }

