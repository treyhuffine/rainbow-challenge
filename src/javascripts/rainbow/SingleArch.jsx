import React from 'react';

export default class SingleArch extends React.Component {
  render() {
    let archStyle = {
      'position': 'absolute',
      'height': `${this.props.sizing}vh`,
      'width': `${this.props.sizing}vw`,
      'borderTopLeftRadius': '100vw',
      'borderTopRightRadius': '100vw',
      'backgroundColor': this.props.rainbowSpecs,
      'bottom': '15vh'
    }
    return (
      <div style={archStyle}></div>
    )
  }
}
