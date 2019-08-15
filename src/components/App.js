import React from 'react'
import PostList from './PostList'
import Form from './Form'
// import DateIntl from './DateIntl'

const App = () => {
  return (
    <div className="ui container">
      <Form />
      <PostList />
      {/* <DateIntl /> */}
    </div>
  );
}

export default App
