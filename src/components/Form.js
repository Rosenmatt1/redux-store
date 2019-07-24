import React from 'react'
// import { connect } from 'react-redux'
import { createPost } from '../actions'
import { getTitle } from '../actions'
import { getBody } from '../actions'

class Form extends React.Component {

  render() {
    return (
      <div className="header">
        <h3> New Post </h3>
     
        title<input onChange={(e) => getTitle(e.target.value)}/>
        body<input onChange={(e) => getBody(e.target.value)}/>
        <button onChange={() => createPost()}>Submit</button>
      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return { userData: state) }
// }

// export default connect(mapStateToProps)(Form)

export default Form