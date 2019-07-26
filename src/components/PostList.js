import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers, deletePost, editPost } from '../actions'
import UserHeader from './UserHeader'

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
    }
    // this.updater = this.updater.bind(this)
  }
   

  componentDidMount() {
    this.props.fetchPostsAndUsers()
  }

  deleter = (id) => {
    console.log("deleter Id", id)
    this.props.deletePost(id)
  }

  edit = (e) => {
    e.preventDefault()
    this.setState({
      title: e.target.value
    })
  }

  // editer = (title, id) => {
  //   this.props.editPost(title, id)
  // }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button onClick={() => this.deleter(post.id)}> Delete </button>
              <input onChange={(e) => this.edit(e)}/>
              <button >Edit</button>
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

export default connect(mapStateToProps, { fetchPostsAndUsers, deletePost, editPost })(PostList)