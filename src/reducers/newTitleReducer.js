export default (state = "", action) => {
  switch (action.type) {
    case 'GET_TITLE':
      return action.payload 
    case 'CLEAR_TITLE':
      // console.log('clear title reducer fired')
      return action.payload 
    default:
      return state;
  }
}

