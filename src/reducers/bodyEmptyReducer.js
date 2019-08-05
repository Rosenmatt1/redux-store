export default (state = false, action) => {
  switch (action.type) {
    case 'BODY_EMPTY':
      console.log('empty body reducer fired')
      return action.payload
    default:
      return state;
  }
}