import React from 'react';

export default class SingleSparkle extends React.Component {
  render() {
    let sparkleStyle = {
      'fontSize': '10px',
      'position': 'absolute',
      'color': 'white',
      'left': `${Math.random() * 50}vw`,
      'top': `${Math.random() * 20}vh`
    }
    return (
      <p style={sparkleStyle} className='sparkle'>sparkle</p>
    )
  }
}
