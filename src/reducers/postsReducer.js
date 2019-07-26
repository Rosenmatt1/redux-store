// import _ from 'lodash'

export default (state=[], action) => {
  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload
  // }
  // return state
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload
    case 'NEW_POST':
      return [...state, action.payload]
    case 'DELETE_POST':
      // return _.omit([...state, action.payload])
      console.log(state)
      return state.filter(post => post.id !== action.payload)
    default: 
      return state
  }
}

// case 'EDIT_POST':
// console.log(state)
// return state.map(post => {
//   if (post.id === action.payload.id) {
//     return action.payload
//   }
//   return post
// }




  