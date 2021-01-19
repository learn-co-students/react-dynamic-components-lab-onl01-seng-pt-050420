import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let upscaledOpacity = this.props.opacity * 100;
    if (upscaledOpacity >= 20 ) {
      let downscaledOpacity = (upscaledOpacity - 10) / 100;
      return (
        <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
          <ColorBox opacity={downscaledOpacity}/>
        </div>
      )
    }
    else return null;
    
  }

}

