import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import HarassMarker from "./HarassMarker";

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
      harass_markers: this.props.harass_markers,
    };
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
          {this.props.harass_markers.map(marker => {
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
