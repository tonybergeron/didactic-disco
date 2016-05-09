import React from 'react'
import ClockComponent from 'common/components/clock/clock'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1><ClockComponent/></h1>
      </div>
    )
  }
}
