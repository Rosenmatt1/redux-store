import React from 'react'
import { connect } from 'react-redux'

class ValidationBody extends React.Component {

  render() {
    return (
      <div className="alert"> Must include a body </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return { user: state.users.find(user => user.id === ownProps.userId) }
// }

export default connect(null)(ValidationBody)