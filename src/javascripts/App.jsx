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
    // rainbow motion feature
  }
  render() {
    return (
      <FullRainbow rainbowColors={this.state.rainbowColors}/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
