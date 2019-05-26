import React, { Component } from "react";
import { Typography, GridListTile, Paper } from "@material-ui/core";

class HarassCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: this.props.marker,
    };
  }

  render() {
    const styles = {
      margin: 5,
      padding: 5,
    };

    return (
      <GridListTile style={styles}>
        <Paper style={{ margin: 3, padding: 25 }}>
          <Typography>{this.state.marker.attributes.start_address}</Typography>
          <p>{this.state.marker.attributes.happened_at}</p>
          <p>{this.state.marker.attributes.description}</p>
        </Paper>
      </GridListTile>
    );
  }
}

export default HarassCard;
