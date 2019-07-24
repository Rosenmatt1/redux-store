export default (state = [], action) => {
  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload
  // }
  // return state
  switch (action.type) {
    case 'NEW_POST':
      console.log('reducer')
      return { posts: [...state, action.payload]}
    default:
      return state;
  }
}



// case 'Delete Todo':
//   return {
//     ...state,
//     posts: state.todos.filter(post => post.id !== action.payload)
//   }


