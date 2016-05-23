import React from 'react'
import ClockComponent from 'dashboard/components/clock-component/clock-component'

import './index.scss'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="index">
        <ClockComponent/>
      </div>
    )
  }
}
