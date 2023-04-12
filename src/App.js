import React from "react";
import { AppBar } from "@mui/material";
import HarassContainer from "./components/HarassContainer";
import { pink } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar>
          <h1 style={{ paddingLeft: 20 }}>Creepy Follows</h1>
        </AppBar>
        <HarassContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
