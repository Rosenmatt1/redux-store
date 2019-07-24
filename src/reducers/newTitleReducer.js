export default (state = [], action) => {
  // if (action.type === 'GET_TITLE') {
  //   return action.payload
  // }
  // return state
  switch (action.type) {
    case 'GET_TITLE':
      console.log('reducer')
      return action.payload 
    default:
      return state;
  }
}