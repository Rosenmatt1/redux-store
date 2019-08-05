import React from 'react'
import { connect } from 'react-redux'
import { createPost, getTitle, getBody, clearTitle, titleError } from '../actions'
import '../App.css'
import Validation from './Validation.js'

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
        
        {this.props.isError && <Validation />}
          
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { title: state.title, isError: state.isError }
}

export default connect(mapStateToProps, { getTitle, getBody, createPost, clearTitle, titleError })(Form)

