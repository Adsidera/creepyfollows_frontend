import React, { Component } from "react";
import { Typography, GridListTile, Paper, Divider } from "@material-ui/core";

import moment from "moment";

class HarassCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: this.props.marker,
      friendly_happened_at: moment
        .utc(this.props.marker.attributes.happened_at)
        .format("LLLL"),
      friendly_created_at: moment(
        this.props.marker.attributes.created_at
      ).format("LLLL"),
    };
  }

  render() {
    const classes = {
      tile: {
        margin: 5,
        padding: 5,
      },
      description: {
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: 100,
      },
    };
    return (
      <GridListTile key="Subheader" style={classes.tile}>
        <Paper style={{ margin: 3, padding: 25 }}>
          <Typography variant="h6">
            {this.state.marker.attributes.start_address}
          </Typography>
          <Typography gutterBottom>
            {this.state.friendly_happened_at}
          </Typography>
          <Typography variant="p" style={classes.description} gutterBottom>
            {this.state.marker.attributes.description}
          </Typography>
          <Divider variant="middle" />
          <Typography variant="caption" display="block" gutterBottom>
            Reported on {this.state.friendly_created_at}
          </Typography>
        </Paper>
      </GridListTile>
    );
  }
}

export default HarassCard;
