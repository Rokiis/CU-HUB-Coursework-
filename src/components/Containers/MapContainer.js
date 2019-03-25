import React, { Component } from "react";
import {
  Map,
  GoogleApiWrapper,
  InfoWindow,
  Marker,
  Polyline
} from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "100%"
};

const mark = [
  { lat: 52.407866, lng: -1.510551 },
  { lat: 52.406866, lng: -1.511551 },
  { lat: 52.406866, lng: -1.510551 },
  { lat: 52.407866, lng: -1.511551 }
];

export class MapContainer extends Component {
  state = {};

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMouseoverMarker(props, marker, e) {
    return e;
  }
  //onMapClicked = (mapProps, map, clickEvent) => {
  //return clickEvent.pa
  //};

  render() {
    return (
      <Map
        onClick={this.onMapClicked}
        google={this.props.google}
        zoom={15.5}
        style={mapStyles}
        initialCenter={mark[3]}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"One"}
          position={mark[0]}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Two"}
          position={mark[1]}
        />
        <Marker />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.onMarkerClick.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCd5MzjNlOA9FAPDZejidetR71ixzpsimk"
})(MapContainer);
