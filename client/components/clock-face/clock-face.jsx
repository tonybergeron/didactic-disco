import React, {Component, PropTypes} from 'react'
import moment from 'moment-timezone'

import './clock-face.scss'

const fourOClock = '16'

const rotate = (deg) => {
  return 'rotate(' + deg + 'deg)'
}

export default class ClockFaceComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.start = this.start.bind(this)
  }

  componentDidMount() {
    this.start()
  }

  start() {
    var that = this
    that.setState({ date: moment().tz(that.props.offset) })
    setInterval(() => {
      that.setState({ date: moment().tz(that.props.offset) })
    }, 100)
  }

  render() {
    var millis = moment(this.state.date).millisecond()
    var second = moment(this.state.date).second() * 6 + millis * (6 / 1000)
    var minute = moment(this.state.date).minute() * 6 + second / 60
    var hour = ((moment(this.state.date).hour() % 12) / 12) * 360 + 90 + minute / 12

    let circleStyles = {}
    let secondStyles = {transform: rotate(second)}
    let minuteStyles = {transform: rotate(minute)}
    let hourStyles = {transform: rotate(hour)}

    if (moment(this.state.date).format('HH') === fourOClock) {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
      circleStyles.borderColor = randomColor
      secondStyles.background = randomColor
      minuteStyles.background = randomColor
      hourStyles.background = randomColor
    }

    return (
      <div className="clock-face-component">
        <div className="clock-center">
          <div className="circle" style={circleStyles}>
            <div className="face">
              <div className="second" style={secondStyles} />
              <div className="minute" style={minuteStyles} />
              <div className="hour" style={hourStyles} />
            </div>
            <div style={{textAlign: 'center'}}><h4>{this.props.location}</h4></div>
          </div>
        </div>
      </div>
    )
  }
}

ClockFaceComponent.propTypes = {
  offset: PropTypes.string,
  location: PropTypes.string
}
