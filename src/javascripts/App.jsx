import React from 'react';
import ReactDOM from 'react-dom';
import $ from './vendor/jquery.min';

import FullRainbow from './rainbow/FullRainbow';

class App extends React.Component {
  render() {
    return (
      <FullRainbow />
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
