import React from 'react';

export default class RainbowDashboard extends React.Component {
  localHandleSpeed() {
    // this.props.setSpeed()
  }
  render() {
    let dashboardStyle = {
      'border': '4px solid white',
      'borderRadius': '10px',
      'color': 'white',
      'position': 'absolute',
      'padding': '10px',
      'width': '40vw'
    }
    let titleFont = {
      'fontSize': '1.4rem',
      'marginBottom': '15px'
    }
    let buttonFont = {
      'fontSize': '1rem',
      'border': '1px solid white',
      'cursor': 'pointer',
      'padding': '5px',
      'width': '140px'
    }
    return (
      <div style={dashboardStyle}>
        <div style={titleFont}>Dashboard:</div>
        <span style={buttonFont} className="double-rainbow" onClick={this.props.showDoubleRainbow}>Double Rainbow?!</span>
        <div>
          <input type="number" name="speed" style={{'marginTop': '15px', 'marginBottom': '5px'}}></input>
          <br />
          <span style={buttonFont} className="double-rainbow" onClick={this.localHandleSpeed}>Set dance spped</span>
        </div>
      </div>
    )
  }
}
