import React, { Component } from "react";
import { TextField, Grid, Button } from "@mui/material";

class HarassForm extends Component {
  // const classes = useStyles();
  constructor(props) {
    super(props);
    this.state = {
      start_address: "",
      happened_at: "",
      description: "",
      alert: "",
      editingHarassMarkerId: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleReset() {
    this.setState({
      description: "",
      happened_at: "",
      start_address: "Type an address",
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const harass = {
      start_address: this.state.start_address,
      happened_at: this.state.happened_at,
      description: this.state.description,
    };
    this.props.addNewHarass({ harass });
    this.handleReset(event);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
      </form>
    );
  }
}
export default HarassForm;
