import React from 'react'
import moment from 'moment'
import './clock.scss'

export default class ClockComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="clock-component">
        <span>{moment().format()}</span>
      </div>
    )
  }
}
