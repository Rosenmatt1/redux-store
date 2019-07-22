import { combineReducers } from 'redux'
import postsReducer from './postsReducer'

export default combineReducers({
  // fakeReducer: () => 'hi there'
  posts: postsReducer
})