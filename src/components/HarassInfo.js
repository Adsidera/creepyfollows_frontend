import React, { Component } from "react";
import HarassCard from "./HarassCard";
import { ImageList } from "@mui/material";

class HarassInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      harass_cases: this.props.harass_cases,
    };
  }

  render() {
    return (
      <ImageList cols={3}>
        {this.props.harass_cases.map(marker => {
          return <HarassCard marker={marker} key={marker.id} />;
        })}
      </ImageList>
    );
  }
}

export default HarassInfo;
