import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let val;
    if (this.props.opacity >=0.2) {
      val = <ColorBox opacity={this.props.opacity - 0.1} />
    } else {
      val = null;
    }
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
          {val}
      </div>
    )
  }

}

