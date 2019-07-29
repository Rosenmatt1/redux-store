export default (state = false, action) => {
  switch (action.type) {
    case 'ERROR_LENGTH':
      console.log('error title reducer fired')
      return action.payload 
    default:
      return state;
  }
}


