import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  // fakeReducer: () => 'hi there'
  posts: postsReducer,
  users: usersReducer
})