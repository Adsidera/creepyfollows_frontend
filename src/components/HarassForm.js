import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
//   dense: {
//     marginTop: 19,
//   },
//   menu: {
//     width: 200,
//   },
// }));

function HarassForm() {
  // const classes = useStyles();

  return (
    <form novalidate autoComplete="off">
      <Grid container direction="column" justify="left" alignItems="left">
        <Grid item xs={12}>
          <TextField
            id="harass_place"
            // className={classes.textField}
            label="Where?"
            name="harassplace"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="harass_date"
            // className={classes.textField}
            helperText="When?"
            type="datetime-local"
            defaultValue="2019-05-22T22:00"
            name="harassdate"
            margin="normal"
          />
        </Grid>
        <TextField
          id="description"
          label="Description"
          helperText="Describe what happened"
          rows={5}
          rowsMax={10}
          name="description"
          margin="normal"
          multiline={true}
          variant="filled"
        />
      </Grid>
    </form>
  );
}
export default HarassForm;
