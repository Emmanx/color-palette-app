import React, { Component } from "react";
import Slider from "rc-slider";

// Styles
import "rc-slider/assets/index.css";
import "../styles/Palette.css";
// Components
import ColorBox from "./ColorBox.js";

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 500
    };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    console.log(level);
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        {/* TODO: Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* TODO: Footer goes here */}
      </div>
    );
  }
}
export default Palette;
