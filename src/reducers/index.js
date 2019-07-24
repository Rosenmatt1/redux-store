import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'
import newPostReducer from './newPostReducer'

export default combineReducers({
  // fakeReducer: () => 'hi there'
  posts: postsReducer,
  users: usersReducer,
  newPost: newPostReducer
})