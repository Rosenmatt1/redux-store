import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'
import newTitleReducer from './newTitleReducer'
import newBodyReducer from './newBodyReducer'
import errorReducer from './errorReducer'
import bodyEmptyReducer from './bodyEmptyReducer'

export default combineReducers({
  // fakeReducer: () => 'hi there'
  posts: postsReducer,
  users: usersReducer,
  title: newTitleReducer,
  body: newBodyReducer,
  isError: errorReducer,
  emptyBody: bodyEmptyReducer
})