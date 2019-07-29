
export default (state = [], action) => {
  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload
  // }
  // return state
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload
    case 'NEW_POST':
      // console.log(state)
      return [...state, action.payload]
    case 'DELETE_POST':
      // console.log(state)
      return state.filter(post => post.id !== action.payload)
    case 'EDIT_POST':
      return state.map(post => {
        if (post.id === action.payload.id) {
          return action.payload
        }
        return post
      })
    default:
      return state
  }
}






