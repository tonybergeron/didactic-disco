import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, useRouterHistory} from 'react-router'
import {createHashHistory} from 'history'

/**
 * Remove the _k tag, unecessary for applications not using it
 * @link https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#using-custom-histories
 */
const appHistory = useRouterHistory(createHashHistory)({queryKey: false})

import App from './routes/index/index'
import 'common/styles/app.scss'

ReactDOM.render((
  <Router history={appHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'))
