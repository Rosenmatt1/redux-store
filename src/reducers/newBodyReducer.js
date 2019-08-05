export default (state = "", action) => {
  // if (action.type === 'GET_BODY') {
  //   return action.payload
  // }
  // return state
  switch (action.type) {
    case 'GET_BODY':
      return action.payload
    case 'CLEAR_BODY':
      return action.payload
    default:
      return state;
  }
}