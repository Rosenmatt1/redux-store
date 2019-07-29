import React from 'react'
import { connect } from 'react-redux'

class Validation extends React.Component {

  render() {
    return (
      <div className="alert"> Sorry, please enter a longer title </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return { user: state.users.find(user => user.id === ownProps.userId) }
// }

export default connect(null)(Validation)