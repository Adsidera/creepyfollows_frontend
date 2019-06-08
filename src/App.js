import React from "react";
import { AppBar } from "@material-ui/core";
import HarassContainer from "./components/HarassContainer";

function App() {
  return (
    <div>
      <AppBar color="secondary" position="static" style={{ paddingLeft: 25 }}>
        <h1>Creepy Follows</h1>
      </AppBar>
      <HarassContainer />
    </div>
  );
}

export default App;
