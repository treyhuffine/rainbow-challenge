import React from 'react';

export default class SingleSparkle extends React.Component {
  render() {
    let sparkleStyle = {
      'fontSize': '10px',
      'position': 'absolute',
      'color': 'white',
      'left': `${Math.random() * 50}vw`,
      'top': `${Math.random() * 20}vh`,
      'width': '5px',
      'height': '5px',
      'borderRadius': '50%',
      'backgroundColor': 'white',
      'boxShadow': '0 0 5px rgba(255, 255, 255, 1)'
    }
    return (
      <div style={sparkleStyle} className='sparkle'></div>
    )
  }
}
