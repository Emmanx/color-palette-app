import React from "react";

// Seed Palette
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./helpers/colorHelpers";

// Components
import Palette from "./components/Palette";

function App() {
  console.log(generatePalette(seedPalettes[0]));
  return (
    <div>
      <Palette palette={generatePalette(seedPalettes[0])} />
    </div>
  );
}

export default App;
