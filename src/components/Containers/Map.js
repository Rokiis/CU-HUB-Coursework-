/* global google */
import React from "react";
import { compose, withProps } from "recompose";
import _ from "lodash";
import { default as canUseDOM } from "can-use-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import update from "immutability-helper";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer"
const FaAnchor = require("react-icons/lib/fa/anchor");
export default class Map extends React.PureComponent {
  state = {
        markers: [
      {
        isOpen: false,
        isMarkerShown: false,
        position: {
          lat: 52.4055645,
          lng: -1.515488,
        },
        defaultAnimation: 2,
        key: "COV"
      }
    ]
  };
  componentDidMount() {
    if (!canUseDOM) {
      return;
    }
    window.addEventListener("resize", this.handleWindowResize);
  }
  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  componentWillUnmount() {
    if (!canUseDOM) {
      return;
    }
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleMapClick = e => {
    let latitude = e.latLng.lat();
    let longtitude = e.latLng.lng();
    var { markers } = this.state;
    markers = update(markers, {
      $push: [
        {
          isMarkerShown: true,
          position: { lat: latitude, lng: longtitude },
          defaultAnimation: 2,
          key: Date.now() // Add a key property for: http://fb.me/react-warning-keys
        }
      ]
    });
    this.setState({ markers });
    console.log(this.state);
  };

  render() {
    
    const MyMapComponent = compose(
      withProps({
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBA5_zCZx0WQLfF5tnv9n1xRs9cWah7TbY&v=3.exp&libraries=geometry,drawing,places,visualization",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `55em` }} />,
        mapElement: <div style={{ height: `100%`,width: `50%` }} />
      }),
      withScriptjs,
      withGoogleMap,
    )(props => (
      <GoogleMap
        isMarkerShown={this.state.isMarkerShown}
        onClick={this.handleMapClick}
        defaultZoom={14}
        defaultCenter={{ lat: 52.4055645, lng:-1.515488 }}
      >
        {this.state.markers.map((marker, index) => {
          return <Marker {...marker}
          onClick={props.onToggleOpen}
          >
          {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
          <FaAnchor/>
          </InfoWindow>}
          </Marker>;
        })}
      </GoogleMap>
    ));
    
    return <MyMapComponent />;
  }
}
