import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import HarassMarker from "./HarassMarker";
import axios from "axios";

class HarassMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.5313923,
      lng: 13.3966832,
    },
    zoom: 11,
  };

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
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "80vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.state.harass_markers.map(marker => {
            return (
              <HarassMarker
                lat={marker.attributes.latitude}
                lng={marker.attributes.longitude}
                text="Creepy Follow here!"
                key={marker.id}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default HarassMap;
