import React from 'react'
import ReactDOM from 'react-dom'

import {useRouterHistory} from 'react-router'
import {createHashHistory} from 'history'

import Root from './components/root'

/**
 * Remove the _k tag, unecessary for applications not using it
 * @link https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#using-custom-histories
 */
const appHistory = useRouterHistory(createHashHistory)({queryKey: false})

ReactDOM.render(
  <Root history={appHistory} />,
  document.getElementById('app')
)

