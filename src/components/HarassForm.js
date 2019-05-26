import React, { Component } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import axios from "axios";
import Notifier, { openSnackbar } from "./Notifier";

class HarassForm extends Component {
  // const classes = useStyles();
  constructor(props) {
    super(props);
    this.state = {
      start_address: "Type an address",
      happened_at: "",
      description: "Describe what",
      alert: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showNotifier(message) {
    openSnackbar({ message });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const harass = {
      start_address: this.state.start_address,
      happened_at: this.state.happened_at,
      description: this.state.description,
    };
    axios
      .post("https://creepyfollows.herokuapp.com/api/v1/harasses", {
        harass,
      })
      .then(res => {
        console.log(res);
        console.log("Post successful");
        console.log(res.data);
        this.showNotifier("Report successfully registered");
      })
      .catch(error => {
        console.log(error);
        this.showNotifier("Form is not correctly filled out. Try again");
      });
  }

  render() {
    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <Grid container direction="column" justify="left" alignItems="left">
          <Grid item xs={12}>
            <TextField
              id="harass_place"
              // className={classes.textField}
              helperText="Where did it happen?"
              name="start_address"
              value={this.state.start_address}
              margin="normal"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="harass_date"
              // className={classes.textField}
              helperText="When and at what hour did it happen?"
              type="datetime-local"
              name="happened_at"
              value={this.state.happened_at}
              margin="normal"
              onChange={this.handleChange}
            />
          </Grid>
          <TextField
            id="description"
            label="Description"
            helperText="Describe what happened"
            rows={5}
            rowsMax={10}
            name="description"
            value={this.state.description}
            margin="normal"
            multiline
            variant="filled"
            onChange={this.handleChange}
          />
        </Grid>
        <Grid container direction="column" justify="left" alignItems="left">
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Save it on the map
            </Button>
          </Grid>
        </Grid>
        <Notifier />
      </form>
    );
  }
}
export default HarassForm;
