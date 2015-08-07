import React from 'react';

export default class SingleArch extends React.Component {
  render() {
    let archStyle = {
      'position': 'absolute',
      'height': `${this.props.sizing}vh`,
      'width': `${this.props.sizing}vw`,
      'borderTopLeftRadius': '100vh',
      'borderTopRightRadius': '100vh',
      'backgroundColor': this.props.rainbowSpecs,
      'bottom': '15vh'
    }
    return (
      <div style={archStyle}></div>
    )
  }
}
