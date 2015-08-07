import React from 'react';

let sunStyle = {
  'backgroundColor': '#FB7209',
  'width': '20vh',
  'height': '20vh',
  'position': 'absolute',
  'right': '20px',
  'boxShadow': '0 0 80px rgba(255, 160, 60, 0.4)',
  'borderRadius': '50%'
}

export default class FullRainbow extends React.Component {
  render() {
    return (
      <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">
        <div className="sun" style={sunStyle}></div>
      </a>
    )
  }
}
