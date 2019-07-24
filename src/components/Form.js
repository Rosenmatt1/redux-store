import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions'
import { getTitle } from '../actions'
import { getBody } from '../actions'

class Form extends React.Component {

  render() {
    return (
      <div className="header">
        <h3> New Post </h3>
     
        title<input onChange={(e) => this.props.getTitle(e.target.value)}/>
        body<input onChange={(e) => this.props.getBody(e.target.value)}/>
        <button onClick={() => this.props.createPost()}>Submit</button>
      </div>
    )
  }
}

export default connect(null, { getTitle, getBody, createPost })(Form)

