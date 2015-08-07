import React from 'react';
import ReactDOM from 'react-dom';
import $ from './vendor/jquery.min';

import FullRainbow from './rainbow/FullRainbow';
import Sun from './sun/Sun';
import Sparkles from './sparkles/Sparkles';

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
    let hidden = false;
    var dancingRainbow = function() {
      if (deg >= 4.2) {
        rotationDirection = false;
      }
      else if (deg <= -4.2) {
        rotationDirection = true;
      }
      if (rotationDirection) {
        $(".rainbow-wrapper").css({
          'transform': `rotate(${deg += .1}deg)`,
          '-moz-transform': `rotate(${deg += .1}deg)`,
          '-o-transform': `rotate(${deg += .1}deg)`,
          '-webkit-transform': `rotate(${deg += .1}deg)`
        })
      }
      else {
        $(".rainbow-wrapper").css({
          'transform': `rotate(${deg -= .1}deg)`,
          '-moz-transform': `rotate(${deg -= .1}deg)`,
          '-o-transform': `rotate(${deg -= .1}deg)`,
          '-webkit-transform': `rotate(${deg -= .1}deg)`
        })
      }
    }
    setInterval(dancingRainbow, 50);
    var dancingSparkles = function() {
      if (hidden) {
        $('.sparkle').show();
        hidden = false;
      }
      else {
        $('.sparkle').hide();
        hidden = true;
      }
    }
    setInterval(dancingSparkles,2000);
  }
  render() {
    return (
      <div id="app-wrapper">
        <Sun />
        <FullRainbow rainbowColors={this.state.rainbowColors} location={0} isDisplaying={'block'}/>
        <FullRainbow rainbowColors={this.state.rainbowColors} location={50} isDisplaying={'none'}/>
        <Sparkles />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
