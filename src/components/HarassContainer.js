import React, { Component } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import HarassMap from "./HarassMap";
import HarassForm from "./HarassForm";
import HarassInfo from "./HarassInfo";
import Notifier, { openSnackbar } from "./Notifier";

class HarassContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      harass_markers: [],
    };
  }

  showNotifier(message) {
    openSnackbar({ message });
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_API_URL)
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

  getHarasses = () => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then(response => {
        console.log(response);
        this.setState({
          isLoaded: true,
          harass_markers: response.data.data,
          editingHarassMarkerId: null,
        });
      })
      .catch(error => console.log(error));
  };

  addNewHarass = ({ harass }) => {
    axios
      .post(process.env.REACT_APP_API_URL, {
        harass,
      })
      .then(res => {
        console.log(res);
        console.log("Post successful");
        console.log(res.data);
        this.showNotifier("Report successfully registered");
        this.getHarasses();
      })
      .catch(error => {
        console.log(error);
        this.showNotifier(error);
      });
  };

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
                <HarassForm
                  harass_cases={this.state.harass_markers}
                  addNewHarass={this.addNewHarass}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Notifier />
        <Grid container direction="row" spacing={2} style={{ padding: 24 }}>
          <HarassInfo harass_cases={this.state.harass_markers} />
        </Grid>
      </div>
    );
  }
}

export default HarassContainer;
