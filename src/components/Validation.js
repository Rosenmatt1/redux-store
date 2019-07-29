import React from 'react'
import { connect } from 'react-redux'

class Validation extends React.Component {

  render() {
    const user = this.props.user

    if (!user) {
      return null
    }

    return (
      <div className="header"> Sorry, please enter a longer title </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(Validation)