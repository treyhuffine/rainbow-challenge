import React from 'react';
import SingleArch from './SingleArch';

export default class FullRainbow extends React.Component {
  render() {
    let fullRainbow = {
      'position': 'absolute',
      'top':  '55vh',
      'left': `${this.props.location}vw`,
      'height': '50vh',
      'width': '50vw',
      'display': `${this.props.isDisplaying}`
    }
    let rainbowSizes = [50, 45, 40, 35, 30, 25, 20, 15]
    let arches = this.props.rainbowColors.map( (props, idx) =>  {
      return <SingleArch rainbowColors={props} sizing={rainbowSizes[idx]} key={idx} index={idx} />
    })
    return (
      <div className="rainbow-wrapper" style={fullRainbow}>
        {arches}
      </div>
    )
  }
}
