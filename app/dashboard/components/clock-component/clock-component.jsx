import React, {Component} from 'react'
import moment from 'moment-timezone'
import * as TimeZoneConstants from 'common/constants/time-zones';
import ClockFace from 'common/components/clock-face/clock-face'
import './clock-component.scss';

const markets = [{
  name: 'Chicago',
  timezone: TimeZoneConstants.CHICAGO
},{
  name: 'Seattle',
  timezone: TimeZoneConstants.SEATTLE
},{
  name: 'New York',
  timezone: TimeZoneConstants.NEW_YORK
},{
  name: 'London',
  timezone: TimeZoneConstants.LONDON
}];

export default class ClockComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const localTimezone = moment().format('Z');
    let localMarkets = [];
    let otherMarkets = [];

    markets.forEach((market) => {
      if (moment.tz(market.timezone).format('Z') === localTimezone) {
        localMarkets.push(market)
      } else {
        otherMarkets.push(market)
      }
    });

    return (
      <div className="clock-component">
        <div className="local-market">
          {(localMarkets || []).map(localMarket => (<ClockFace key={localMarket.name} offset={localMarket.timezone} location={localMarket.name}/>))}
        </div>
        <div className="other-markets">
          {(otherMarkets || []).map(otherMarket => (<ClockFace key={otherMarket.name} offset={otherMarket.timezone} location={otherMarket.name}/>))}
        </div>
      </div>
    )
  }
}
