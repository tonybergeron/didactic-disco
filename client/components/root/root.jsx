import React, {Component, PropTypes} from 'react'

import {Router} from 'react-router'
import getRoutes from 'routes/routes'

import 'styles/app.scss'

class Root extends Component {
  render() {
    const routes = getRoutes()

    return (
      <Router history={this.props.history} routes={routes} />
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired
}

export default Root
