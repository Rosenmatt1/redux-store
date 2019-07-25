import React from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader'

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers()
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button> Delete </button>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    })
  }

  render() {
    // console.log("posts", this.props.posts)
    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("state", state)
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPostsAndUsers: fetchPostsAndUsers  })(PostList)