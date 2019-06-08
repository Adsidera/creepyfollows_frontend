import React from "react";
import { AppBar } from "@material-ui/core";
import HarassContainer from "./components/HarassContainer";

function App() {
  return (
    <div>
      <AppBar color="secondary" position="static">
        <h1 style={{ paddingLeft: 20 }}>Creepy Follows</h1>
      </AppBar>
      <HarassContainer />
    </div>
  );
}

export default App;
