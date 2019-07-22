import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts()
  }
  // console.log("props", song)
  render() {
    return (
      <div>
        Post List
    </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   console.log("state", state)
//   return { song: state.selectedSong }
// }

export default connect(null, { fetchPosts: fetchPosts })(PostList)