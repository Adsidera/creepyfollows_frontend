import React, { Component } from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import update from "immutability-helper";
import axios from "axios";
import HarassMap from "./HarassMap";
import HarassForm from "./HarassForm";
import HarassInfo from "./HarassInfo";

class HarassContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      harass_markers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://creepyfollows.herokuapp.com/api/v1/harasses")
      .then(response => {
        console.log(response);
        this.setState({
          isLoaded: true,
          harass_markers: response.data.data,
          editingHarassMarkerId: null,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Grid container spacing={24} style={{ padding: 24 }}>
          <Grid item xs={12} sm={8}>
            <HarassMap harass_markers={this.state.harass_markers} />
          </Grid>
          <Grid item xs={12} sm={4}>
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
        <Grid container direction="row" spacing={24} style={{ padding: 24 }}>
          <HarassInfo harass_cases={this.state.harass_markers} />
        </Grid>
      </div>
    );
  }
}

export default HarassContainer;
