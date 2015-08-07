import React from 'react';

export default class RainbowDashboard extends React.Component {
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
      'padding': '5px'
    }
    return (
      <div style={dashboardStyle}>
        <div style={titleFont}>Dashboard:</div>
        <span style={buttonFont} className="double-rainbow" onClick={this.props.localHandleClick}>Double Rainbow?!</span>
      </div>
    )
  }
}
