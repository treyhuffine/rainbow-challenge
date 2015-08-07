import React from 'react';
import ReactDOM from 'react-dom';
import $ from './vendor/jquery.min';

class App extends React.Component {
  render() {
    return (
      <div className="divnasty">Hello World</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
