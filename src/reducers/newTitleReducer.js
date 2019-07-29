export default (state = [], action) => {
  // if (action.type === 'GET_TITLE') {
  //   return action.payload
  // }
  // return state
  switch (action.type) {
    case 'GET_TITLE':
      return action.payload 
    case 'ClEAR_TITLE':
      console.log('clear title reducer fired')
      return action.payload 
    default:
      return state;
  }
}