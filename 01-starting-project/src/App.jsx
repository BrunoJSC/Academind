import { useState } from "react";

import componentsImg from "./assets/components.png";
import { Header } from "../src/components/Header/Header.jsx";

import { CORE_CONCEPTS } from "./data.js";
import { Examples } from "../src/components/Examples.jsx";
import { CoreConcepts } from "../src/components/CoreConcepts.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
