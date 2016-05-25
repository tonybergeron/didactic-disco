import React from 'react'
import {Route} from 'react-router'

import Dashboard from 'components/dashboard/dashboard'

export default function getRoutes() {
  return (
    <Route path="/" component={Dashboard} />
  )
}
