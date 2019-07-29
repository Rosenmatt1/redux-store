import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions'
import { getTitle } from '../actions'
import { getBody } from '../actions'
import { clearTitle } from '../actions'
import '../App.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      body: null
    }
  }

  sendTitle = (e) => {
    this.props.getTitle(e.target.value)
  }

  sendBody = (e) => {
    this.props.getBody(e.target.value)
  }

  triggerPost() {
    this.props.createPost()
    this.props.clearTitle()
  }

  render() {
    return (
      <div className="header">
        <h3> New Post </h3>

        <div className="row">

          <div>
            <p>title</p>
          </div>
          <input
            onChange={(e) => this.sendTitle(e)}
            value={this.props.title}
          />

          <div>
            <p>body</p>
          </div>
          <input
            onChange={(e) => this.props.getBody(e.target.value)} />

          <button onClick={() => this.triggerPost()}>Submit</button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { title: state.title }
}

export default connect(mapStateToProps, { getTitle, getBody, createPost, clearTitle })(Form)

