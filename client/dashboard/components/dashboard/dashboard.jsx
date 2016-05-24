import React, {Component} from 'react'
import moment from 'moment-timezone'

import * as TimeZoneConstants from 'common/constants/time-zones'
import ClockFace from 'common/components/clock-face/clock-face'

import './dashboard.scss'

const markets = [{
  name: 'Chicago',
  timezone: TimeZoneConstants.CHICAGO
}, {
  name: 'Seattle',
  timezone: TimeZoneConstants.SEATTLE
}, {
  name: 'New York',
  timezone: TimeZoneConstants.NEW_YORK
}, {
  name: 'London',
  timezone: TimeZoneConstants.LONDON
}]

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.localMarkets = []
    this.otherMarkets = []

    const localTimezone = moment().format('Z')
    markets.forEach((market) => {
      if (moment.tz(market.timezone).format('Z') === localTimezone) {
        this.localMarkets.push(market)
      } else {
        this.otherMarkets.push(market)
      }
    })

    this.renderClockFace = this.renderClockFace.bind(this)
  }

  renderClockFace(market) {
    return (
      <ClockFace
        key={market.name}
        location={market.name}
        offset={market.timezone} />
    )
  }

  render() {
    return (
      <div className="clock-component index">
        <div className="local-market">
          {this.localMarkets.map(this.renderClockFace)}
        </div>
        <div className="other-markets">
          {this.otherMarkets.map(this.renderClockFace)}
        </div>
      </div>
    )
  }
}

