import React from 'react';

let firstRainbow = {
  'position': 'absolute',
  'bottom': '10vh',
  'left': '20vw',
  'borderTopLeftRadius': '100vh',
  'borderTopRightRadius': '100vh',
  'width': '20vw',
  'height': '10vw',
  'backgroundColor': '#7fc6f4'
}
let secondRainbow = {
  'position': 'absolute',
  'bottom': '10vh',
  'left': '15vw',
  'borderTopLeftRadius': '100vh',
  'borderTopRightRadius': '100vh',
  'width': '30vw',
  'height': '15vw',
  'backgroundColor': 'red'
}

export default class FullRainbow extends React.Component {
  render() {
    return (
      <div id="rainbow-wrapper">
        <div style={secondRainbow}></div>
        <div style={firstRainbow}></div>
      </div>
    )
  }
}
