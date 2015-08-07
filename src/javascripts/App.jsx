import React from 'react';
import ReactDOM from 'react-dom';
import $ from './vendor/jquery.min';

import FullRainbow from './rainbow/FullRainbow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rainbowColors: [
        '#FF0000',
        '#FF7F00',
        '#FFFF00',
        '#00FF00',
        '#0000FF',
        '#4B0082',
        '#8B00FF'
      ]
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
