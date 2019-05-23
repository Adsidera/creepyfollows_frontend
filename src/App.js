import React from "react";
import HarassMap from "./components/HarassMap";
import {
  AppBar,
  Grid,
  Paper,
  Card,
  CardContent,
  CardAction,
  Typography,
  TextField,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import HarassForm from "./components/HarassForm";

function App() {
  return (
    <div>
      <AppBar color="primary" position="static">
        <h1>Creepy Follows</h1>
      </AppBar>
      <Grid container spacing={24} style={{ padding: 24 }}>
        <Grid item xs={8}>
          <HarassMap />
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography>
                <h3>Report a Case</h3>
              </Typography>
              <HarassForm />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
