import React from 'react'
import { connect } from 'react-redux'
import { createPost, getTitle, getBody, clearBody, bodyEmpty, clearTitle, titleError } from '../actions'
import '../App.css'
import Validation from './Validation.js'
import ValidationBody from './ValidationBody.js'

class Form extends React.Component {

  sendTitle = (e) => {
    this.props.getTitle(e.target.value)
  }

  sendBody = (e) => {
    this.props.getBody(e.target.value)
  }

  triggerPost = () => {
    this.props.createPost()
    this.props.titleError()
    this.props.clearTitle()
    this.props.bodyEmpty()
    this.props.clearBody()
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
            onChange={(e) => this.props.getBody(e.target.value)}
            value={this.props.body}
          />

          <button onClick={() => this.triggerPost()}>Submit</button>
        </div>

        {this.props.isError && <Validation />}
        {this.props.emptyBody && <ValidationBody />}
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { title: state.title, body: state.body, isError: state.isError, emptyBody: state.emptyBody }
}

export default connect(mapStateToProps, { getTitle, getBody, clearBody, createPost, clearTitle, titleError, bodyEmpty })(Form)

