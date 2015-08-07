import React from 'react';
import ReactDOM from 'react-dom';
import $ from './vendor/jquery.min';

import FullRainbow from './rainbow/FullRainbow';

// move initializers to separate file
var rainbowColors = [
  '#FF0000',
  '#FF7F00',
  '#FFFF00',
  '#00FF00',
  '#0000FF',
  '#8B00FF',
  '#4B0082',
  '#7fc6f4'
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rainbowColors: rainbowColors
    }
  }
  componentDidMount() {
    let deg = 0;
    let rotationDirection = true;
    var dancingRainbow = function() {
      if (Math.floor(deg) === 5) {
        rotationDirection = false;
      }
      else if (deg <= -5) {
        rotationDirection = true;
      }
      if (rotationDirection) {
        $("#rainbow-wrapper").css({
          'transform': `rotate(${deg += .1}deg)`,
          '-moz-transform': `rotate(${deg += .1}deg)`,
          '-o-transform': `rotate(${deg += .1}deg)`,
          '-webkit-transform': `rotate(${deg += .1}deg)`
        })
      }
      else {
        $("#rainbow-wrapper").css({
          'transform': `rotate(${deg -= .1}deg)`,
          '-moz-transform': `rotate(${deg -= .1}deg)`,
          '-o-transform': `rotate(${deg -= .1}deg)`,
          '-webkit-transform': `rotate(${deg -= .1}deg)`
        })
      }
    }
    setInterval(dancingRainbow, 50);
  }
  render() {
    return (
      <FullRainbow rainbowColors={this.state.rainbowColors}/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
