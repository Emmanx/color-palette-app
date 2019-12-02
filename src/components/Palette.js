import React, { Component } from "react";

// Styles
import "../styles/Palette.css";
// Components
import ColorBox from "./ColorBox.js";

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* TODO: Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* TODO: Footer goes here */}
      </div>
    );
  }
}
export default Palette;
