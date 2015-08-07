import React from 'react';
import SingleArch from './SingleArch';

let fullRainbow = {
  'position': 'relative',
  'top': '55vh',
  'height': '50vh',
  'width': '50vw'
}

export default class FullRainbow extends React.Component {
  render() {
    let rainbowSizes = [50, 45, 40, 35, 30, 25, 20, 15]
    let arches = this.props.rainbowColors.map( (props, idx) =>  {
      return <SingleArch rainbowColors={props} sizing={rainbowSizes[idx]} key={idx} index={idx} />
    })
    return (
      <div id="rainbow-wrapper" style={fullRainbow}>
        {arches}
      </div>
    )
  }
}
