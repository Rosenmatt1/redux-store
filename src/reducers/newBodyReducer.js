export default (state = [], action) => {
  // if (action.type === 'GET_BODY') {
  //   return action.payload
  // }
  // return state
  switch (action.type) {
    case 'GET_BODY':
      console.log('reducer')
      return action.payload
    default:
      return state;
  }
}