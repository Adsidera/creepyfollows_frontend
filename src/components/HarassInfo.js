import React, { Component } from "react";
import HarassCard from "./HarassCard";
import { GridList } from "@material-ui/core";

class HarassInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      harass_cases: this.props.harass_cases,
    };
  }

  render() {
    return (
      <GridList cols={3}>
        {this.props.harass_cases.map(marker => {
          return <HarassCard marker={marker} />;
        })}
      </GridList>
    );
  }
}

export default HarassInfo;
