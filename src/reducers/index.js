import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'
import newTitleReducer from './newTitleReducer'
import newBodyReducer from './newBodyReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  // fakeReducer: () => 'hi there'
  posts: postsReducer,
  users: usersReducer,
  title: newTitleReducer,
  body: newBodyReducer,
  isError: errorReducer
})