import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts  = () => async dispatch => {
    const response = await jsonPlaceholder.get('./posts')
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

