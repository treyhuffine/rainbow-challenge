import React from 'react';
import SingleArch from './SingleArch';

export default class FullRainbow extends React.Component {

  render() {
    let rainbowSizes = [50, 45, 40, 35, 30, 25, 20, 15]
    let arches = this.props.rainbowColors.map( (props, idx) =>  {
      return <SingleArch rainbowSpecs={props} sizing={rainbowSizes[idx]} key={idx} index={idx} />
    })
    return (
      <div id="rainbow-wrapper">
        {arches}
      </div>
    )
  }
}
