import React, { Component } from "react";

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Palette">
        {/* TODO: Navbar goes here */}
        <div className="Palette-colors"></div>
        {/* TODO: Footer goes here */}
      </div>
    );
  }
}
export default Palette;
