import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    // console.log("posts", this.props.posts)
    return (
      <div>
        Post List
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("state", state)
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList)