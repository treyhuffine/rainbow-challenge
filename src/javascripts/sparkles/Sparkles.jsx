import React from 'react';

import SingleSparkle from './SingleSparkle';

let allSparkles = {
  'position': 'relative',
  'top': '15vh',
  'left': '10vw',
  'height': '20vh',
  'width': '50vw'
}

export default class Sparkles extends React.Component {
  render() {
    let sparkles = [];
    for (let i = 0; i < 10; i++) {
      sparkles.push(<SingleSparkle key={i} index={i}/>);
    }
    return (
      <div style={allSparkles}>
        {sparkles}
      </div>
    )
  }
}
